// ============================================
// XENON AIRDROP ULTIMATE - UTILITY FUNCTIONS
// ============================================

// Format date to readable string
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Check if deadline is approaching (within 3 days)
function isDeadlineNear(deadline) {
    if (!deadline) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadlineDate = new Date(deadline);
    deadlineDate.setHours(0, 0, 0, 0);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
}

// Get priority color (for charts)
function getPriorityColor(priority) {
    switch (priority) {
        case 'High': return '#ff6b6b';
        case 'Mid': return '#ffd93d';
        case 'Low': return '#6bcb77';
        default: return '#888';
    }
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'DeFi': '📊',
        'NFT': '🎨',
        'L1': '⛓️',
        'L2': '⚡',
        'GameFi': '🎮',
        'SocialFi': '💬'
    };
    return icons[category] || '📋';
}

// Calculate completion percentage
function calculateProgress(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'done').length;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
}

// Get tasks by category (for charts)
function getTasksByCategory(tasks) {
    const categories = ['DeFi', 'NFT', 'L1', 'L2', 'GameFi', 'SocialFi'];
    return categories.map(cat => ({
        category: cat,
        count: tasks.filter(t => t.category === cat).length
    }));
}

// Get tasks by priority
function getTasksByPriority(tasks) {
    const priorities = ['High', 'Mid', 'Low'];
    return priorities.map(pri => ({
        priority: pri,
        count: tasks.filter(t => t.priority === pri).length
    }));
}

// Export stats for reporting
function generateStatsReport(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'done').length;
    const pending = total - completed;
    const percent = calculateProgress(tasks);
    
    const byCategory = getTasksByCategory(tasks);
    const byPriority = getTasksByPriority(tasks);
    
    return {
        total,
        completed,
        pending,
        percent,
        byCategory,
        byPriority,
        lastUpdated: new Date().toISOString()
    };
}

// Get upcoming deadlines (next 7 days)
function getUpcomingDeadlines(tasks) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    return tasks
        .filter(t => t.deadline && t.status !== 'done')
        .filter(t => {
            const deadline = new Date(t.deadline);
            deadline.setHours(0, 0, 0, 0);
            return deadline >= today && deadline <= nextWeek;
        })
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
}

// Generate random ID (for fallback)
function generateRandomId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

// Validate URL format
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Truncate text
function truncateText(text, maxLength = 100) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Debounce function (for search)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export to console for debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDate,
        isDeadlineNear,
        getPriorityColor,
        getCategoryIcon,
        calculateProgress,
        getTasksByCategory,
        getTasksByPriority,
        generateStatsReport,
        getUpcomingDeadlines,
        isValidUrl,
        truncateText,
        debounce
    };
}

console.log('🛠️ Utils.js loaded - utility functions ready!');
