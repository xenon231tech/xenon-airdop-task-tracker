// ============================================
// XENON AIRDROP ULTIMATE - MAIN JAVASCRIPT
// ============================================

// Global variables
let tasks = [];
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
let totalCountEl, completedCountEl, pendingCountEl;
let progressFillEl, progressLabelEl, progressPercentEl, progressCircleEl;
let taskListEl, searchInputEl;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    totalCountEl = document.getElementById('totalCount');
    completedCountEl = document.getElementById('completedCount');
    pendingCountEl = document.getElementById('pendingCount');
    progressFillEl = document.getElementById('progressFill');
    progressLabelEl = document.getElementById('progressLabel');
    progressPercentEl = document.getElementById('progressPercent');
    progressCircleEl = document.getElementById('progressCircle');
    taskListEl = document.getElementById('taskList');
    searchInputEl = document.getElementById('searchInput');

    // Load tasks from localStorage
    loadTasks();

    // Setup search listener
    if (searchInputEl) {
        searchInputEl.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderTasks();
        });
    }

    // Setup filter buttons
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            setFilter(btn.dataset.filter);
        });
    });
});

// Show toast notification
function showToast(msg, isErr = false) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    if (isErr) toast.style.borderLeftColor = '#ff6b6b';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Copy address to clipboard
function copyAddress(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    showToast('✅ Address copied!');
}

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem('xenon_tasks');
    if (saved) {
        tasks = JSON.parse(saved);
    } else {
        // Default sample tasks
        tasks = [
            {
                id: 1,
                name: "zkSync Era",
                category: "L2",
                priority: "High",
                desc: "Bridge, swap, deploy contract",
                deadline: "2026-05-15",
                website: "https://zksync.io",
                status: "pending"
            },
            {
                id: 2,
                name: "LayerZero",
                category: "L2",
                priority: "High",
                desc: "Cross-chain messaging",
                deadline: "2026-05-20",
                website: "https://layerzero.network",
                status: "pending"
            },
            {
                id: 3,
                name: "Scroll",
                category: "L2",
                priority: "Mid",
                desc: "Testnet dApps",
                deadline: "2026-05-10",
                website: "https://scroll.io",
                status: "done"
            }
        ];
    }
    renderAll();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('xenon_tasks', JSON.stringify(tasks));
}

// Add new task
function addTask() {
    const nameInput = document.getElementById('taskName');
    const categorySelect = document.getElementById('taskCategory');
    const prioritySelect = document.getElementById('taskPriority');
    const dateInput = document.getElementById('taskDate');
    const websiteInput = document.getElementById('taskWebsite');
    const descTextarea = document.getElementById('taskDesc');

    const name = nameInput.value.trim();
    if (!name) {
        showToast('❌ Project name is required!', true);
        return;
    }

    let website = websiteInput.value.trim();
    if (website && !website.startsWith('http')) {
        website = 'https://' + website;
    }

    const newTask = {
        id: Date.now(),
        name: name,
        category: categorySelect.value,
        priority: prioritySelect.value,
        desc: descTextarea.value.trim(),
        deadline: dateInput.value,
        website: website,
        status: 'pending'
    };

    tasks.unshift(newTask);
    saveTasks();

    // Clear form
    nameInput.value = '';
    descTextarea.value = '';
    dateInput.value = '';
    websiteInput.value = '';

    renderAll();
    showToast('✅ Task added successfully!');
}

// Delete task
function deleteTask(id) {
    if (confirm('Delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderAll();
        showToast('🗑️ Task deleted');
    }
}

// Toggle task status (pending/done)
function toggleStatus(id) {
    tasks = tasks.map(t => {
        if (t.id === id) {
            t.status = t.status === 'pending' ? 'done' : 'pending';
        }
        return t;
    });
    saveTasks();
    renderAll();
    const task = tasks.find(t => t.id === id);
    showToast(task.status === 'done' ? '✅ Task completed!' : '🔄 Task reopened');
}

// Edit task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const newName = prompt('Edit project name:', task.name);
    if (newName && newName.trim()) task.name = newName.trim();

    const newDesc = prompt('Edit notes:', task.desc);
    if (newDesc !== null) task.desc = newDesc;

    const newDeadline = prompt('Edit deadline (YYYY-MM-DD):', task.deadline);
    if (newDeadline) task.deadline = newDeadline;

    const newWebsite = prompt('Edit website URL:', task.website);
    if (newWebsite !== null) task.website = newWebsite;

    saveTasks();
    renderAll();
    showToast('✏️ Task updated');
}

// Get priority class for styling
function getPriorityClass(priority) {
    if (priority === 'High') return 'priority-high';
    if (priority === 'Mid') return 'priority-mid';
    return 'priority-low';
}

// Escape HTML to prevent XSS
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, (m) => {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Render tasks table
function renderTasks() {
    let filtered = tasks.filter(t => {
        if (currentFilter !== 'all' && t.category !== currentFilter) return false;
        if (searchQuery && !t.name.toLowerCase().includes(searchQuery) && !t.desc.toLowerCase().includes(searchQuery)) return false;
        return true;
    });

    if (!taskListEl) return;

    if (filtered.length === 0) {
        taskListEl.innerHTML = '<tr><td colspan="7" style="text-align: center;">✨ No tasks found</td></tr>';
        return;
    }

    taskListEl.innerHTML = filtered.map(task => `
        <tr>
            <td>
                <strong>${escapeHtml(task.name)}</strong>
                <br><small style="opacity:0.7">${escapeHtml(task.desc?.substring(0, 50) || '')}</small>
            </td>
            <td><span class="category-badge">${task.category}</span></td>
            <td class="${getPriorityClass(task.priority)}">${task.priority}</td>
            <td>${task.deadline || '-'}</td>
            <td>${task.website ? `<a href="${task.website}" target="_blank" class="website-link">🔗 Visit</a>` : '-'}</td>
            <td><span class="status-badge ${task.status === 'done' ? 'done' : ''}" onclick="toggleStatus(${task.id})">${task.status === 'done' ? '✅ Done' : '⏳ Pending'}</span></td>
            <td class="task-actions">
                <button class="task-btn edit" onclick="editTask(${task.id})">✏️ Edit</button>
                <button class="task-btn delete" onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

// Update statistics (total, done, pending, progress)
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'done').length;
    const pending = total - completed;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    if (totalCountEl) totalCountEl.textContent = total;
    if (completedCountEl) completedCountEl.textContent = completed;
    if (pendingCountEl) pendingCountEl.textContent = pending;
    if (progressLabelEl) progressLabelEl.textContent = `${Math.round(percent)}%`;
    if (progressFillEl) progressFillEl.style.width = `${percent}%`;
    if (progressPercentEl) progressPercentEl.textContent = `${Math.round(percent)}%`;

    if (progressCircleEl) {
        const circumference = 188.5;
        const offset = circumference - (percent / 100) * circumference;
        progressCircleEl.setAttribute('stroke-dashoffset', offset);
    }
}

// Set filter by category
function setFilter(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-chip').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderTasks();
}

// Export to CSV
function exportCSV() {
    let csv = "ID,Name,Category,Priority,Description,Deadline,Website,Status\n";
    tasks.forEach(t => {
        csv += `"${t.id}","${escapeHtml(t.name)}","${t.category}","${t.priority}","${escapeHtml(t.desc)}","${t.deadline}","${t.website || ''}","${t.status}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xenon-airdrop-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📊 CSV exported!');
}

// Export to JSON
function exportData() {
    const data = JSON.stringify(tasks, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xenon-airdrop-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 JSON exported!');
}

// Import from JSON
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (Array.isArray(imported)) {
                    tasks = imported;
                    saveTasks();
                    renderAll();
                    showToast('📥 Import successful!');
                } else {
                    throw new Error();
                }
            } catch (err) {
                showToast('❌ Invalid file', true);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// Render everything
function renderAll() {
    renderTasks();
    updateStats();
}

// Toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('light');
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
        btn.textContent = document.body.classList.contains('light') ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Make functions globally available
window.addTask = addTask;
window.deleteTask = deleteTask;
window.toggleStatus = toggleStatus;
window.editTask = editTask;
window.setFilter = setFilter;
window.exportCSV = exportCSV;
window.exportData = exportData;
window.importData = importData;
window.toggleTheme = toggleTheme;
window.copyAddress = copyAddress;

console.log('🚀 Xenon Airdrop Ultimate loaded!');
console.log('⭐ Star repo: https://github.com/xenon231tech/xenon-airdrop-task-tracker');
