# API Documentation

## Overview

XENON AIRDROP ULTIMATE provides a comprehensive JavaScript API for task management and data operations.

---

## Task API

### Create Task

```javascript
const task = {
  id: Date.now(),
  name: 'Complete KYC',
  category: 'defi',
  priority: 'high',
  link: 'https://example.com',
  deadline: '2024-06-15',
  description: 'Complete identity verification',
  completed: false,
  createdAt: new Date().toISOString()
};

addTask(task);
```

### Read Tasks

```javascript
// Get all tasks
const allTasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];

// Filter tasks
const completedTasks = allTasks.filter(t => t.completed);
const pendingTasks = allTasks.filter(t => !t.completed);
```

### Update Task

```javascript
function updateTask(taskId, updates) {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    Object.assign(task, updates);
    localStorage.setItem('airdropTasks', JSON.stringify(tasks));
  }
}
```

### Delete Task

```javascript
function deleteTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  tasks = tasks.filter(t => t.id !== taskId);
  localStorage.setItem('airdropTasks', JSON.stringify(tasks));
}
```

---

## Filter API

### Search Tasks

```javascript
function searchTasks(searchTerm) {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  return tasks.filter(task => 
    task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
}
```

### Filter by Category

```javascript
function filterByCategory(category) {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  return tasks.filter(t => t.category === category);
}
```

### Filter by Status

```javascript
function filterByStatus(status) {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  if (status === 'completed') {
    return tasks.filter(t => t.completed);
  } else if (status === 'pending') {
    return tasks.filter(t => !t.completed);
  }
  return tasks;
}
```

### Sort Tasks

```javascript
function sortTasks(tasks, sortBy) {
  const sorted = [...tasks];
  
  switch(sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    case 'priority':
      const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2 };
      return sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    case 'deadline':
      return sorted.sort((a, b) => {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return new Date(a.deadline) - new Date(b.deadline);
      });
    default:
      return sorted;
  }
}
```

---

## Statistics API

### Get Statistics

```javascript
function getStatistics() {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  
  return {
    total,
    completed,
    pending: total - completed,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
  };
}
```

### Get Category Statistics

```javascript
function getCategoryStats() {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  const categories = ['defi', 'nft', 'l1', 'l2', 'gamefi', 'socialfi'];
  
  return categories.map(cat => ({
    category: cat,
    count: tasks.filter(t => t.category === cat).length
  }));
}
```

---

## Data Export/Import API

### Export Data

```javascript
function exportData() {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks')) || [];
  const dataStr = JSON.stringify(tasks, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `airdrop-tasks-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
}
```

### Import Data

```javascript
function importData(jsonData) {
  try {
    const tasks = JSON.parse(jsonData);
    if (Array.isArray(tasks)) {
      localStorage.setItem('airdropTasks', JSON.stringify(tasks));
      return true;
    }
  } catch (error) {
    console.error('Import failed:', error);
    return false;
  }
}
```

---

## Theme API

### Toggle Theme

```javascript
function toggleTheme() {
  document.body.classList.toggle('light');
  const isDark = !document.body.classList.contains('light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

### Load Theme

```javascript
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
}
```

---

## Notification API

### Show Notification

```javascript
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(255, 0, 255, 0.2));
    color: ${type === 'success' ? '#00ff88' : '#00ffff'};
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 2px solid ${type === 'success' ? '#00ff88' : '#00d9ff'};
    box-shadow: 0 0 20px ${type === 'success' ? 'rgba(0, 255, 136, 0.6)' : 'rgba(0, 217, 255, 0.6)'};
    animation: slideInRight 0.3s ease;
    z-index: 1000;
    font-weight: bold;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}
```

---

## Constants

### Categories

```javascript
const CATEGORIES = {
  DEFI: 'defi',
  NFT: 'nft',
  L1: 'l1',
  L2: 'l2',
  GAMEFI: 'gamefi',
  SOCIALFI: 'socialfi'
};
```

### Priority Levels

```javascript
const PRIORITIES = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};
```

### Chart Types

```javascript
const CHART_TYPES = {
  DOUGHNUT: 'doughnut',
  BAR: 'bar',
  LINE: 'line'
};
```

---

## Error Handling

### Validation

```javascript
function validateTask(task) {
  if (!task.name || task.name.trim() === '') {
    throw new Error('Task name is required');
  }
  if (!task.category) {
    throw new Error('Category is required');
  }
  if (!['high', 'medium', 'low'].includes(task.priority)) {
    throw new Error('Invalid priority');
  }
  return true;
}
```

---

## Best Practices

1. **Always validate input** before creating or updating tasks
2. **Use try-catch** when parsing JSON from localStorage
3. **Check for null/undefined** when accessing task properties
4. **Sanitize user input** to prevent XSS attacks
5. **Use meaningful error messages** for better debugging

---

**Last Updated:** June 4, 2024
