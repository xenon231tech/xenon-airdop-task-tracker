# CI/CD Guide

## Overview

This guide explains the Continuous Integration and Continuous Deployment (CI/CD) pipeline for XENON AIRDROP ULTIMATE.

---

## GitHub Actions Workflows

### Workflow 1: Code Quality Check

**Trigger**: On every push and pull request

**Steps**:
1. Lint code (ESLint)
2. Format check (Prettier)
3. Security scan (npm audit)
4. Dependency check

**Status Badge**:
```markdown
[![Code Quality](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/code-quality.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
```

---

### Workflow 2: Testing

**Trigger**: On every push and pull request

**Steps**:
1. Run unit tests
2. Run integration tests
3. Generate coverage report
4. Upload to Codecov

**Status Badge**:
```markdown
[![Tests](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/test.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
```

---

### Workflow 3: Build

**Trigger**: On every push to main

**Steps**:
1. Install dependencies
2. Build application
3. Generate artifacts
4. Upload to artifacts

**Status Badge**:
```markdown
[![Build](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/build.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
```

---

### Workflow 4: Deployment

**Trigger**: On release creation

**Steps**:
1. Build application
2. Deploy to Vercel
3. Run smoke tests
4. Notify on Slack

**Status Badge**:
```markdown
[![Deploy](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/deploy.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
```

---

## Local Development

### Pre-commit Hooks

**Setup**:
```bash
# Install husky
npm install husky --save-dev

# Setup hooks
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

**What Runs**:
- ESLint - Code quality
- Prettier - Code formatting
- Commit message validation

---

### Running Checks Locally

**Lint Code**:
```bash
npm run lint
```

**Format Code**:
```bash
npm run format
```

**Run Tests**:
```bash
npm run test
```

**Build**:
```bash
npm run build
```

---

## Deployment Process

### Manual Deployment

**To Vercel**:
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**To GitHub Pages**:
```bash
# Build
npm run build

# Deploy
npm run deploy
```

---

### Automatic Deployment

**Triggers**:
- Push to main branch
- Release created
- Manual trigger

**Process**:
1. Code pushed to GitHub
2. GitHub Actions triggered
3. Tests run
4. Build created
5. Deploy to Vercel
6. Smoke tests run
7. Notification sent

---

## Monitoring

### GitHub Actions Dashboard

**View**:
1. Go to repository
2. Click "Actions" tab
3. View workflow runs
4. Check logs

**Status**:
- ✅ Success - All checks passed
- ❌ Failed - Some checks failed
- ⏳ In Progress - Running

---

### Deployment Status

**Vercel Dashboard**:
- https://vercel.com/dashboard
- View deployment history
- Check build logs
- Monitor performance

---

## Troubleshooting

### Workflow Failed

**Steps**:
1. Click on failed workflow
2. View logs
3. Identify error
4. Fix locally
5. Push fix
6. Workflow reruns

**Common Issues**:
- Lint errors - Run `npm run lint --fix`
- Test failures - Check test output
- Build errors - Check build logs
- Deployment errors - Check Vercel logs

---

### Rerun Workflow

**Manual Rerun**:
1. Go to Actions tab
2. Click failed workflow
3. Click "Re-run jobs"
4. Workflow reruns

---

## Badges

### Add to README

```markdown
## Status

[![Code Quality](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/code-quality.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
[![Tests](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/test.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
[![Build](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/build.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
[![Deploy](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions/workflows/deploy.yml/badge.svg)](https://github.com/xenon231tech/xenon-airdop-task-tracker/actions)
```

---

## Best Practices

### Do's ✅

- Keep workflows simple
- Use caching for speed
- Run tests before deploy
- Monitor logs
- Keep dependencies updated
- Document workflows
- Use status badges

### Don'ts ❌

- Don't ignore failures
- Don't skip tests
- Don't deploy without review
- Don't hardcode secrets
- Don't commit sensitive data
- Don't ignore warnings
- Don't use outdated actions

---

## Future Improvements

**Planned**:
- [ ] Code coverage tracking
- [ ] Performance monitoring
- [ ] Security scanning
- [ ] Dependency updates
- [ ] Automated releases
- [ ] Slack notifications
- [ ] Email alerts

---

**Last Updated**: June 4, 2024
