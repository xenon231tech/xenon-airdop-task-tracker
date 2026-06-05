# Contributing Workflow

## Getting Started

### Prerequisites

- Git installed
- Node.js 14+
- GitHub account
- Basic Git knowledge

### Fork & Clone

**Step 1**: Fork the repository
1. Go to https://github.com/xenon231tech/xenon-airdop-task-tracker
2. Click "Fork" button
3. Select your account

**Step 2**: Clone your fork
```bash
git clone https://github.com/YOUR_USERNAME/xenon-airdop-task-tracker.git
cd xenon-airdop-task-tracker
```

**Step 3**: Add upstream remote
```bash
git remote add upstream https://github.com/xenon231tech/xenon-airdop-task-tracker.git
```

---

## Branch Naming Conventions

### Format
```
<type>/<description>
```

### Types

**feature** - New feature
```
feature/add-dark-mode
feature/improve-performance
```

**bugfix** - Bug fix
```
bugfix/fix-export-error
bugfix/correct-typo
```

**docs** - Documentation
```
docs/update-readme
docs/add-api-guide
```

**refactor** - Code refactoring
```
refactor/optimize-storage
refactor/improve-structure
```

**test** - Testing
```
test/add-unit-tests
test/improve-coverage
```

**chore** - Maintenance
```
chore/update-dependencies
chore/cleanup-code
```

### Examples

✅ Good:
- `feature/add-calendar-sync`
- `bugfix/fix-import-bug`
- `docs/add-examples`

❌ Bad:
- `new-feature`
- `fix`
- `update`

---

## Development Workflow

### Step 1: Create Feature Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Step 2: Make Changes

```bash
# Edit files
# Add new features
# Fix bugs

# Check status
git status
```

### Step 3: Commit Changes

**Commit Message Format**:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Example**:
```
feat(ui): add dark mode toggle

Add a new theme toggle button to switch between light and dark modes.
The preference is saved to localStorage.

Fixes #123
```

**Types**:
- `feat` - Feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Refactoring
- `test` - Testing
- `chore` - Maintenance

**Scope** (optional):
- `ui` - User interface
- `api` - API
- `storage` - Data storage
- `docs` - Documentation

**Subject**:
- Imperative mood ("add" not "added")
- No period at end
- Under 50 characters

**Body** (optional):
- Explain what and why
- Wrap at 72 characters
- Separate from subject with blank line

**Footer** (optional):
- Reference issues: `Fixes #123`
- Breaking changes: `BREAKING CHANGE: ...`

### Step 4: Push Changes

```bash
# Push to your fork
git push origin feature/your-feature-name
```

### Step 5: Create Pull Request

**On GitHub**:
1. Go to your fork
2. Click "Compare & pull request"
3. Fill in PR template
4. Submit PR

**PR Title Format**:
```
<type>(<scope>): <description>
```

**PR Description**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #123

## Testing
How to test these changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for clarity
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

---

## Code Style Guidelines

### JavaScript

**Naming**:
```javascript
// ✅ Good
const taskList = [];
function addTask() {}
const MAX_TASKS = 100;

// ❌ Bad
const tl = [];
function add() {}
const maxTasks = 100;
```

**Formatting**:
```javascript
// ✅ Good
const task = {
  name: 'Task',
  priority: 'High',
  deadline: '2024-06-15'
};

// ❌ Bad
const task = {name: 'Task', priority: 'High', deadline: '2024-06-15'};
```

**Comments**:
```javascript
// ✅ Good
// Calculate task completion percentage
const completionRate = (completed / total) * 100;

// ❌ Bad
// This calculates the rate
const cr = (c / t) * 100;
```

### HTML

**Formatting**:
```html
<!-- ✅ Good -->
<div class="task-item">
  <h3 class="task-name">Task Name</h3>
  <p class="task-description">Description</p>
</div>

<!-- ❌ Bad -->
<div class="task-item"><h3 class="task-name">Task Name</h3><p class="task-description">Description</p></div>
```

### CSS

**Naming**:
```css
/* ✅ Good */
.task-item {
  background-color: #fff;
  padding: 1rem;
}

/* ❌ Bad */
.ti {
  bg: #fff;
  p: 1rem;
}
```

---

## Testing

### Before Submitting PR

**Manual Testing**:
```bash
# Start dev server
npm run dev

# Test your changes
# Test in different browsers
# Test on mobile
```

**Automated Testing** (when available):
```bash
# Run tests
npm run test

# Check coverage
npm run coverage

# Lint code
npm run lint
```

---

## Review Process

### What to Expect

1. **Automated Checks** - CI/CD pipeline runs
2. **Code Review** - Maintainers review code
3. **Feedback** - Comments on changes
4. **Revisions** - Address feedback
5. **Approval** - PR approved
6. **Merge** - PR merged to main

### Addressing Feedback

```bash
# Make requested changes
# Commit with clear message
git commit -m "refactor: address review feedback"

# Push changes
git push origin feature/your-feature-name
```

---

## Merging

### Merge Checklist

- [ ] All tests passing
- [ ] Code review approved
- [ ] No conflicts with main
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Commit messages clean

### After Merge

```bash
# Update local main
git checkout main
git pull upstream main

# Delete feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## Troubleshooting

### Merge Conflicts

```bash
# Update from upstream
git fetch upstream
git rebase upstream/main

# Resolve conflicts in editor
# Then continue rebase
git rebase --continue
```

### Accidental Commits

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Lost Changes

```bash
# Find lost commits
git reflog

# Recover lost commit
git checkout <commit-hash>
```

---

## Best Practices

### Do's ✅

- Make focused commits
- Write clear commit messages
- Test before submitting
- Follow code style
- Update documentation
- Be respectful in reviews
- Ask questions
- Help others

### Don'ts ❌

- Don't commit sensitive data
- Don't make huge commits
- Don't skip tests
- Don't ignore feedback
- Don't force push to main
- Don't be rude in reviews
- Don't commit to main directly
- Don't ignore style guidelines

---

## Getting Help

**Questions?**
- Open an issue
- Check existing issues
- Email: [xannrlcs@gmail.com](mailto:xannrlcs@gmail.com)
- GitHub Discussions

**Resources**:
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Help](https://help.github.com)
- [Contributing Guide](CONTRIBUTING.md)

---

**Last Updated**: June 4, 2024
