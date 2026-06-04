# Development Guide

## Getting Started

### Prerequisites

- Git installed
- Text editor (VS Code recommended)
- Modern web browser
- Basic JavaScript knowledge

### Setup

```bash
# Clone repository
git clone https://github.com/xenon231tech/xenon-airdop-task-tracker.git
cd xenon-airdop-task-tracker

# Open in editor
code .

# Start local server (optional)
python -m http.server 8000
# or
npx http-server
```

---

## Project Structure

```
xenon-airdop-task-tracker/
├── index.html           # Main application file
├── main.js              # Core application logic
├── storage.js           # LocalStorage management
├── utils.js             # Utility functions
├── api-client.js        # API utilities
├── chart-config.js      # Chart configuration
├── sw.js                # Service Worker
├── manifest.json        # PWA manifest
├── robots.txt           # SEO configuration
└── public/              # Static assets
```

---

## Development Workflow

### 1. Understanding the Codebase

Start by reading these files in order:
1. **index.html** - Overall structure
2. **main.js** - Application logic
3. **storage.js** - Data persistence
4. **utils.js** - Helper functions

### 2. Making Changes

#### Adding a New Feature

```javascript
// 1. Define the feature in main.js
function newFeature() {
  // Implementation
}

// 2. Add event listener
document.getElementById('newFeatureBtn').addEventListener('click', newFeature);

// 3. Update storage if needed
function saveFeatureData(data) {
  const existing = JSON.parse(localStorage.getItem('featureData')) || [];
  existing.push(data);
  localStorage.setItem('featureData', JSON.stringify(existing));
}

// 4. Test the feature
// 5. Update documentation
```

#### Modifying Existing Code

```javascript
// 1. Locate the function
// 2. Understand current behavior
// 3. Make changes carefully
// 4. Test thoroughly
// 5. Update related documentation
```

### 3. Testing Changes

```bash
# Manual testing
1. Open index.html in browser
2. Test the feature
3. Check browser console for errors
4. Test on different browsers
5. Test on mobile

# Automated testing
npm test
```

---

## Code Style Guide

### JavaScript

```javascript
// Use const by default
const taskName = 'My Task';

// Use let for variables that change
let taskCount = 0;

// Use descriptive names
const getUserTasks = () => { /* ... */ };

// Use arrow functions
const filter = (items) => items.filter(item => item.active);

// Use template literals
const message = `Task "${name}" created successfully`;

// Add comments for complex logic
// Calculate completion percentage
const percentage = (completed / total) * 100;
```

### HTML

```html
<!-- Use semantic elements -->
<main>
  <section>
    <h1>Tasks</h1>
    <article class="task">
      <!-- Task content -->
    </article>
  </section>
</main>

<!-- Use meaningful IDs and classes -->
<button id="addTaskBtn" class="btn btn-primary">Add Task</button>

<!-- Use data attributes for JavaScript -->
<div data-task-id="123" class="task">
  <!-- Content -->
</div>
```

### CSS

```css
/* Use CSS variables */
:root {
  --color-primary: #00d9ff;
  --color-secondary: #ff1493;
}

/* Use BEM naming convention */
.task-list { }
.task-list__item { }
.task-list__item--completed { }

/* Group related properties */
.button {
  /* Layout */
  display: inline-block;
  padding: 0.5rem 1rem;
  
  /* Typography */
  font-size: 1rem;
  font-weight: 600;
  
  /* Colors */
  background: var(--color-primary);
  color: white;
  
  /* Effects */
  border-radius: 4px;
  transition: all 0.3s ease;
}
```

---

## Common Tasks

### Adding a New Category

```javascript
// 1. Update CATEGORIES constant
const CATEGORIES = {
  DEFI: 'defi',
  NFT: 'nft',
  L1: 'l1',
  L2: 'l2',
  GAMEFI: 'gamefi',
  SOCIALFI: 'socialfi',
  NEW_CATEGORY: 'new_category'  // Add here
};

// 2. Update category colors
const categoryColors = {
  'defi': '#00d9ff',
  'nft': '#ff1493',
  // ... add color for new category
  'new_category': '#ffaa00'
};

// 3. Update HTML select options
<select id="taskCategory">
  <option value="defi">DeFi</option>
  <option value="nft">NFT</option>
  <!-- ... add new option -->
  <option value="new_category">New Category</option>
</select>

// 4. Update chart configuration
// 5. Test the feature
// 6. Update documentation
```

### Adding a New Filter

```javascript
// 1. Add filter function in utils.js
function filterByNewCriteria(tasks, criteria) {
  return tasks.filter(task => {
    // Filter logic
    return true;
  });
}

// 2. Add UI element in index.html
<select id="newFilter">
  <option value="">All</option>
  <option value="option1">Option 1</option>
</select>

// 3. Add event listener in main.js
document.getElementById('newFilter').addEventListener('change', (e) => {
  const filtered = filterByNewCriteria(tasks, e.target.value);
  displayTasks(filtered);
});

// 4. Test thoroughly
// 5. Update documentation
```

### Adding a New Chart Type

```javascript
// 1. Add chart configuration in chart-config.js
const chartConfigs = {
  doughnut: { /* ... */ },
  bar: { /* ... */ },
  line: { /* ... */ },
  pie: { /* ... */ }  // Add new
};

// 2. Add UI option
<button class="chart-type-btn" data-type="pie">Pie Chart</button>

// 3. Update chart rendering logic
function renderChart(type) {
  const config = chartConfigs[type];
  // Render chart
}

// 4. Test the chart
// 5. Update documentation
```

---

## Debugging

### Browser DevTools

```javascript
// Console logging
console.log('Task:', task);
console.warn('Warning message');
console.error('Error message');

// Breakpoints
// Set breakpoints in Sources tab
// Step through code
// Inspect variables

// Network tab
// Check API calls
// Monitor performance
// Check cache

// Storage tab
// View localStorage
// Edit values
// Clear data
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Data not saving | Check localStorage in DevTools |
| UI not updating | Check DOM manipulation code |
| Events not firing | Check event listener setup |
| Performance slow | Check for loops and heavy operations |
| Memory leak | Check for unreleased references |

---

## Performance Tips

### Optimization

```javascript
// Cache DOM queries
const taskList = document.getElementById('taskList');

// Batch DOM updates
const fragment = document.createDocumentFragment();
tasks.forEach(task => {
  const element = createTaskElement(task);
  fragment.appendChild(element);
});
taskList.appendChild(fragment);

// Debounce event handlers
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Use event delegation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-btn')) {
    handleTaskClick(e.target);
  }
});
```

---

## Testing

### Manual Testing Checklist

- [ ] Add task
- [ ] Edit task
- [ ] Delete task
- [ ] Search functionality
- [ ] Filter by category
- [ ] Filter by status
- [ ] Sort tasks
- [ ] Export data
- [ ] Import data
- [ ] Toggle theme
- [ ] View charts
- [ ] Responsive design
- [ ] Mobile compatibility

### Automated Testing

```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

---

## Git Workflow

### Commit Messages

```
feat: add new feature
fix: fix bug
docs: update documentation
style: code style changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

### Branch Strategy

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request
# Wait for review
# Merge to main
```

---

## Building & Deployment

### Local Build

```bash
# No build step needed
# Just open index.html in browser
```

### Production Deployment

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys
# Check deployment status
# Verify live site
```

---

## Resources

### Documentation

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Libraries

- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [Flatpickr Docs](https://flatpickr.js.org/)
- [Font Awesome Docs](https://fontawesome.com/docs)

### Tools

- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Git Documentation](https://git-scm.com/doc)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

---

**Last Updated:** June 4, 2024
