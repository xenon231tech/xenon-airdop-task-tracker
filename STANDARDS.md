# Coding Standards

## Overview

This document defines the coding standards and best practices for XENON AIRDROP ULTIMATE.

---

## JavaScript Standards

### Naming Conventions

```javascript
// Constants - UPPER_SNAKE_CASE
const MAX_TASKS = 10000;
const API_TIMEOUT = 5000;

// Functions - camelCase
function getUserTasks() { }
const calculatePercentage = () => { };

// Classes - PascalCase
class TaskManager { }
class StorageService { }

// Variables - camelCase
let taskCount = 0;
const taskList = [];

// Private functions - _camelCase
function _internalHelper() { }

// Boolean variables - is/has prefix
const isCompleted = true;
const hasError = false;
```

### Function Guidelines

```javascript
// Keep functions small and focused
function addTask(task) {
  validateTask(task);
  const savedTask = saveTask(task);
  updateUI();
  return savedTask;
}

// Use descriptive names
// ✅ Good
function calculateTaskCompletionRate(tasks) { }

// ❌ Bad
function calc(t) { }

// Maximum 3 parameters, use object for more
// ✅ Good
function createTask({ name, category, priority }) { }

// ❌ Bad
function createTask(name, category, priority, deadline, description, link) { }

// Use early returns
function processTask(task) {
  if (!task) return null;
  if (!task.name) throw new Error('Name required');
  
  // Process task
  return task;
}

// Use const by default
const value = 'constant';
let counter = 0;
var oldStyle = 'avoid';
```

### Error Handling

```javascript
// Always handle errors
try {
  const data = JSON.parse(localStorage.getItem('tasks'));
  return data;
} catch (error) {
  console.error('Failed to parse tasks:', error);
  return [];
}

// Use meaningful error messages
throw new Error('Task name is required');

// Validate input
function addTask(task) {
  if (!task || !task.name) {
    throw new Error('Invalid task object');
  }
  // Process task
}

// Use console methods appropriately
console.log('Normal message');
console.warn('Warning message');
console.error('Error message');
```

### Comments

```javascript
// Single line comments for brief explanations
const maxTasks = 10000; // Maximum tasks per session

// Multi-line comments for complex logic
/*
 * Calculate completion percentage
 * Handles edge cases where total is 0
 * Returns 0 if no tasks exist
 */
function calculatePercentage(completed, total) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

// TODO comments for future work
// TODO: Add pagination for large task lists

// FIXME comments for known issues
// FIXME: Performance degrades with 50k+ tasks
```

---

## HTML Standards

### Semantic HTML

```html
<!-- Use semantic elements -->
<header>
  <nav>Navigation</nav>
</header>

<main>
  <section>
    <h1>Title</h1>
    <article>Content</article>
  </section>
</main>

<footer>Footer content</footer>

<!-- Avoid div soup -->
<!-- ❌ Bad -->
<div class="container">
  <div class="header">
    <div class="title">Title</div>
  </div>
</div>

<!-- ✅ Good -->
<header>
  <h1>Title</h1>
</header>
```

### Attributes

```html
<!-- Use meaningful IDs -->
<button id="addTaskBtn">Add Task</button>

<!-- Use data attributes for JavaScript -->
<div data-task-id="123" data-category="defi">
  Task content
</div>

<!-- Use aria attributes for accessibility -->
<button aria-label="Delete task">×</button>
<div role="alert">Error message</div>

<!-- Use class for styling -->
<div class="task task--completed">
  Completed task
</div>
```

### Form Elements

```html
<!-- Always use labels -->
<label for="taskName">Task Name</label>
<input id="taskName" type="text" required>

<!-- Use proper input types -->
<input type="email" placeholder="Email">
<input type="date" placeholder="Deadline">
<input type="number" min="0" max="100">

<!-- Use fieldset for grouping -->
<fieldset>
  <legend>Task Details</legend>
  <!-- Form fields -->
</fieldset>
```

---

## CSS Standards

### Naming Convention - BEM

```css
/* Block - standalone component */
.task-list { }

/* Element - part of block */
.task-list__item { }
.task-list__header { }

/* Modifier - variation */
.task-list__item--completed { }
.task-list__item--high-priority { }

/* Usage */
<div class="task-list">
  <div class="task-list__item task-list__item--completed">
    Completed task
  </div>
</div>
```

### Property Organization

```css
.element {
  /* Display & Box Model */
  display: block;
  position: relative;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  
  /* Typography */
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  
  /* Colors */
  background: #f0f0f0;
  color: #333;
  
  /* Effects */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: 1;
  
  /* Transitions */
  transition: all 0.3s ease;
}
```

### Media Queries

```css
/* Mobile first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 80%;
    max-width: 1200px;
  }
}
```

### CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #00d9ff;
  --color-secondary: #ff1493;
  --color-success: #00ff88;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}

.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  transition: all var(--transition-normal);
}
```

---

## Git Standards

### Commit Messages

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Build/dependencies

**Scope**: Component or file affected

**Subject**: Brief description (50 chars max)

**Body**: Detailed explanation (optional)

**Footer**: Issue references (optional)

### Examples

```
feat(task): add task search functionality

Implement real-time search for tasks by name and description.
Debounce search input for performance optimization.

Closes #123

---

fix(storage): prevent data corruption on import

Handle edge case where JSON parsing fails gracefully.
Show user-friendly error message instead of crashing.

Fixes #456

---

docs(readme): update installation instructions

Add Docker installation method and troubleshooting section.
```

---

## Documentation Standards

### README Structure

```markdown
# Project Name

## Overview
Brief description

## Features
List of features

## Installation
Setup instructions

## Usage
How to use

## Contributing
Contribution guidelines

## License
License information
```

### API Documentation

```javascript
/**
 * Adds a new task to the task list
 * 
 * @param {Object} task - Task object
 * @param {string} task.name - Task name (required)
 * @param {string} task.category - Task category (required)
 * @param {string} task.priority - Task priority (high/medium/low)
 * @returns {Object} Created task with ID
 * @throws {Error} If task validation fails
 * 
 * @example
 * const task = addTask({
 *   name: 'Complete KYC',
 *   category: 'defi',
 *   priority: 'high'
 * });
 */
function addTask(task) {
  // Implementation
}
```

---

## Performance Standards

### JavaScript Performance

- Minimize DOM queries
- Cache frequently accessed elements
- Use event delegation
- Debounce/throttle event handlers
- Avoid memory leaks

### CSS Performance

- Minimize specificity
- Avoid expensive selectors
- Use transform for animations
- Optimize media queries
- Minimize repaints/reflows

### General Performance

- Keep bundle size small
- Optimize images
- Use caching
- Minimize network requests
- Lazy load when possible

---

## Accessibility Standards

### WCAG 2.1 Level AA

```html
<!-- Use semantic HTML -->
<button>Click me</button>

<!-- Provide alt text -->
<img src="image.png" alt="Description">

<!-- Use ARIA when needed -->
<div role="alert" aria-live="polite">Alert message</div>

<!-- Ensure color contrast -->
<!-- Minimum 4.5:1 for normal text -->
<!-- Minimum 3:1 for large text -->

<!-- Keyboard navigation -->
<input type="text" tabindex="0">
```

---

## Security Standards

### Input Validation

```javascript
// Always validate user input
function validateTask(task) {
  if (!task || typeof task !== 'object') {
    throw new Error('Invalid task');
  }
  if (!task.name || typeof task.name !== 'string') {
    throw new Error('Task name required');
  }
  return true;
}
```

### Data Protection

```javascript
// Never store sensitive data in localStorage
// Use HTTPS for all communications
// Sanitize user input
// Validate on both client and server
```

---

## Testing Standards

### Test Coverage

- Minimum 80% code coverage
- 100% for critical functions
- Unit tests for utilities
- Integration tests for workflows
- E2E tests for user flows

### Test Organization

```javascript
describe('TaskManager', () => {
  describe('addTask', () => {
    it('should add a new task', () => {
      // Test implementation
    });
    
    it('should validate task data', () => {
      // Test implementation
    });
  });
});
```

---

## Review Checklist

- [ ] Code follows naming conventions
- [ ] Functions are small and focused
- [ ] Error handling is implemented
- [ ] Comments explain complex logic
- [ ] HTML is semantic
- [ ] CSS follows BEM
- [ ] Performance is optimized
- [ ] Accessibility is considered
- [ ] Security is implemented
- [ ] Tests are included
- [ ] Documentation is updated
- [ ] Commit messages are clear

---

**Last Updated:** June 4, 2024
