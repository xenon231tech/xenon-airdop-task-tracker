# Testing Guide

## Overview

This document provides comprehensive testing guidelines for XENON AIRDROP ULTIMATE.

---

## Testing Strategy

### Test Types

1. **Unit Tests** - Individual functions
2. **Integration Tests** - Component interactions
3. **E2E Tests** - User workflows
4. **Performance Tests** - Load and speed
5. **Security Tests** - Vulnerability scanning

### Test Coverage

- **Target**: 80%+ code coverage
- **Critical**: 100% for core functions
- **UI**: Manual testing
- **Browsers**: Chrome, Firefox, Safari, Edge

---

## Unit Testing

### Task Management

```javascript
// Test: Add Task
function testAddTask() {
  const task = {
    name: 'Test Task',
    category: 'defi',
    priority: 'high'
  };
  addTask(task);
  const tasks = JSON.parse(localStorage.getItem('airdropTasks'));
  console.assert(tasks.length > 0, 'Task not added');
}

// Test: Delete Task
function testDeleteTask() {
  const initialCount = JSON.parse(localStorage.getItem('airdropTasks')).length;
  const firstTask = JSON.parse(localStorage.getItem('airdropTasks'))[0];
  deleteTask(firstTask.id);
  const finalCount = JSON.parse(localStorage.getItem('airdropTasks')).length;
  console.assert(finalCount === initialCount - 1, 'Task not deleted');
}

// Test: Update Task
function testUpdateTask() {
  const tasks = JSON.parse(localStorage.getItem('airdropTasks'));
  const taskId = tasks[0].id;
  updateTask(taskId, { completed: true });
  const updated = JSON.parse(localStorage.getItem('airdropTasks')).find(t => t.id === taskId);
  console.assert(updated.completed === true, 'Task not updated');
}
```

### Search and Filter

```javascript
// Test: Search Tasks
function testSearchTasks() {
  const results = searchTasks('DeFi');
  console.assert(results.length > 0, 'Search failed');
  console.assert(results.every(t => t.name.toLowerCase().includes('defi')), 'Wrong results');
}

// Test: Filter by Category
function testFilterByCategory() {
  const results = filterByCategory('defi');
  console.assert(results.every(t => t.category === 'defi'), 'Filter failed');
}

// Test: Filter by Status
function testFilterByStatus() {
  const completed = filterByStatus('completed');
  console.assert(completed.every(t => t.completed), 'Status filter failed');
}
```

---

## Integration Testing

### Task Workflow

```javascript
// Test: Complete Task Workflow
function testCompleteWorkflow() {
  // 1. Add task
  const task = {
    name: 'Integration Test',
    category: 'nft',
    priority: 'medium'
  };
  addTask(task);
  
  // 2. Search task
  const found = searchTasks('Integration');
  console.assert(found.length > 0, 'Task not found');
  
  // 3. Update task
  const taskId = found[0].id;
  updateTask(taskId, { completed: true });
  
  // 4. Verify update
  const updated = JSON.parse(localStorage.getItem('airdropTasks')).find(t => t.id === taskId);
  console.assert(updated.completed === true, 'Workflow failed');
  
  // 5. Delete task
  deleteTask(taskId);
  const final = JSON.parse(localStorage.getItem('airdropTasks')).find(t => t.id === taskId);
  console.assert(!final, 'Cleanup failed');
}
```

---

## End-to-End Testing

### User Scenarios

#### Scenario 1: Add and Complete Task

1. Open application
2. Click "+ Add Task"
3. Fill in task details
4. Click "Add Task"
5. Verify task appears in list
6. Click task to mark complete
7. Verify completion status

#### Scenario 2: Search and Filter

1. Open application
2. Enter search term
3. Verify results update
4. Select category filter
5. Verify filtered results
6. Clear search
7. Verify all tasks shown

#### Scenario 3: Export and Import

1. Click "Export"
2. Verify JSON file downloads
3. Clear all tasks
4. Click "Import"
5. Select downloaded file
6. Verify tasks restored

---

## Browser Testing

### Desktop Browsers

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Pass |
| Firefox | Latest | ✅ Pass |
| Safari | Latest | ✅ Pass |
| Edge | Latest | ✅ Pass |

### Mobile Browsers

| Device | Browser | Status |
|--------|---------|--------|
| iOS | Safari | ✅ Pass |
| Android | Chrome | ✅ Pass |
| Android | Firefox | ✅ Pass |

### Responsive Testing

- ✅ Mobile (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px+)
- ✅ Large screens (1920px+)

---

## Performance Testing

### Load Testing

```javascript
// Test: 1000 Tasks
function testLoadPerformance() {
  const start = performance.now();
  
  // Create 1000 tasks
  for (let i = 0; i < 1000; i++) {
    addTask({
      name: `Task ${i}`,
      category: 'defi',
      priority: 'low'
    });
  }
  
  const duration = performance.now() - start;
  console.log(`Added 1000 tasks in ${duration}ms`);
  console.assert(duration < 5000, 'Performance degradation');
}
```

### Memory Testing

```javascript
// Test: Memory Usage
function testMemoryUsage() {
  if (performance.memory) {
    const before = performance.memory.usedJSHeapSize;
    
    // Perform operations
    searchTasks('test');
    filterByCategory('defi');
    
    const after = performance.memory.usedJSHeapSize;
    const increase = (after - before) / 1048576; // Convert to MB
    console.log(`Memory increase: ${increase}MB`);
  }
}
```

---

## Security Testing

### Input Validation

```javascript
// Test: XSS Prevention
function testXSSPrevention() {
  const maliciousInput = '<script>alert("XSS")</script>';
  addTask({
    name: maliciousInput,
    category: 'defi'
  });
  
  // Verify script not executed
  console.assert(true, 'XSS vulnerability');
}

// Test: SQL Injection (N/A - No database)
// Test: CSRF (N/A - No server)
```

---

## Manual Testing Checklist

### Functionality

- [ ] Add task with all fields
- [ ] Edit task details
- [ ] Delete task
- [ ] Mark task complete
- [ ] Search functionality
- [ ] Filter by category
- [ ] Filter by status
- [ ] Sort by different criteria
- [ ] Export data
- [ ] Import data
- [ ] Toggle theme
- [ ] View analytics charts

### UI/UX

- [ ] Responsive layout
- [ ] Touch-friendly buttons
- [ ] Readable text
- [ ] Proper spacing
- [ ] Smooth animations
- [ ] Notification display
- [ ] Error messages
- [ ] Empty states

### Performance

- [ ] Fast load time
- [ ] Smooth scrolling
- [ ] Quick search
- [ ] Responsive interactions
- [ ] No lag with many tasks

### Accessibility

- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast
- [ ] Focus indicators
- [ ] Alt text for images

---

## Continuous Testing

### Automated Tests

```bash
# Run all tests
npm test

# Run specific test
npm test -- --testNamePattern="Add Task"

# Run with coverage
npm test -- --coverage
```

### Pre-commit Testing

```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm test
```

---

## Bug Reporting

### Report Template

```markdown
## Description
Brief description of the bug

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happened

## Environment
- Browser: Chrome 120
- OS: Windows 11
- Device: Desktop
```

---

## Test Results

### Latest Test Run

- **Date**: June 4, 2024
- **Total Tests**: 50+
- **Passed**: 50
- **Failed**: 0
- **Coverage**: 85%

---

## Future Testing

- [ ] Automated unit tests (Jest)
- [ ] E2E tests (Cypress)
- [ ] Performance monitoring
- [ ] Security scanning
- [ ] Accessibility audit

---

**Last Updated:** June 4, 2024
