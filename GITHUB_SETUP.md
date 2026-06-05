# GitHub Setup Guide

## Overview

This guide explains how to set up GitHub Actions workflows and other GitHub features for XENON AIRDROP ULTIMATE.

---

## GitHub Actions Workflows

### Available Workflows

We have prepared 4 GitHub Actions workflows for automation:

1. **Code Quality Check** (`.github/workflows/code-quality.yml`)
   - Runs ESLint
   - Checks code formatting
   - Security audit
   - Dependency check

2. **Build** (`.github/workflows/build.yml`)
   - Install dependencies
   - Build application
   - Upload artifacts
   - Check build size

3. **Deploy** (`.github/workflows/deploy.yml`)
   - Build application
   - Deploy to Vercel
   - Run smoke tests
   - Create deployment status

4. **Security** (`.github/workflows/security.yml`)
   - npm audit
   - Vulnerability check
   - Dependency updates
   - Security headers check

---

## Setup Instructions

### Step 1: Enable GitHub Actions

1. Go to your repository: https://github.com/xenon231tech/xenon-airdop-task-tracker
2. Click **Settings** tab
3. Go to **Actions** → **General**
4. Under "Actions permissions", select **Allow all actions and reusable workflows**
5. Click **Save**

### Step 2: Grant Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### Step 3: Add Workflows

The workflows are already in `.github/workflows/` folder. They will automatically run when you:
- Push to main or develop branch
- Create a pull request
- On schedule (for security scans)

### Step 4: Configure Secrets (Optional)

For deployment to Vercel, add these secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

| Secret Name | Value | Where to Get |
|------------|-------|-------------|
| `VERCEL_TOKEN` | Your Vercel token | [Vercel Settings](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel org ID | Vercel dashboard |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Vercel project settings |

---

## Workflow Triggers

### Code Quality Check

**Triggers**:
- Push to main or develop
- Pull request to main or develop
- Manual trigger

**When it runs**:
- On every commit
- On every PR

### Build

**Triggers**:
- Push to main or develop
- Pull request to main or develop

**When it runs**:
- On every commit
- On every PR

### Deploy

**Triggers**:
- Push to main branch only
- Manual trigger

**When it runs**:
- After code quality and build pass
- Only on main branch

### Security

**Triggers**:
- Push to main or develop
- Pull request to main or develop
- Weekly schedule (Sunday at 00:00 UTC)

**When it runs**:
- On every commit
- On every PR
- Every Sunday

---

## Monitoring Workflows

### View Workflow Runs

1. Go to repository
2. Click **Actions** tab
3. Select workflow from left sidebar
4. View all runs and their status

### Check Workflow Logs

1. Click on a workflow run
2. Click on a job
3. View detailed logs
4. Check for errors or warnings

### Rerun Failed Workflows

1. Go to failed workflow
2. Click **Re-run all jobs**
3. Workflow will run again

---

## Troubleshooting

### Workflow Not Running

**Check**:
1. Actions are enabled in Settings
2. Workflow file syntax is correct
3. Branch matches trigger condition
4. No workflow disabled

**Fix**:
1. Enable Actions in Settings
2. Check workflow YAML syntax
3. Verify branch name
4. Re-enable workflow if disabled

### Build Fails

**Common Issues**:
- Missing dependencies - Run `npm install`
- Node version mismatch - Check `.nvmrc` or `package.json`
- Environment variables - Check `.env` file
- Build script missing - Check `package.json` scripts

**Fix**:
1. Check error logs
2. Run locally to reproduce
3. Fix issue
4. Push fix
5. Workflow reruns automatically

### Deploy Fails

**Common Issues**:
- Missing Vercel secrets
- Build fails before deploy
- Vercel project not configured
- Insufficient permissions

**Fix**:
1. Check Vercel secrets are set
2. Check build logs
3. Verify Vercel project ID
4. Check GitHub App permissions

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

## Advanced Configuration

### Add Custom Workflows

**Create new workflow**:
1. Create file: `.github/workflows/custom.yml`
2. Add workflow configuration
3. Commit and push
4. Workflow runs automatically

**Example**:
```yaml
name: Custom Workflow

on:
  push:
    branches: [ main ]

jobs:
  custom:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run custom task
        run: echo "Custom task"
```

### Schedule Workflows

**Run on schedule**:
```yaml
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday
```

### Conditional Steps

**Run only if condition met**:
```yaml
- name: Deploy
  if: github.ref == 'refs/heads/main'
  run: npm run deploy
```

---

## GitHub Features

### Branch Protection

**Setup**:
1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Enter branch name: `main`
4. Check **Require status checks to pass before merging**
5. Select workflows to require
6. Click **Create**

**Benefits**:
- Require passing tests before merge
- Require code review
- Prevent accidental pushes
- Maintain code quality

### Automatic Releases

**Setup**:
1. Create `.github/workflows/release.yml`
2. Configure release automation
3. Workflows create releases automatically

### Code Scanning

**Setup**:
1. Go to **Settings** → **Code security and analysis**
2. Enable **Code scanning**
3. Choose analysis tool
4. Configure rules

---

## Monitoring & Alerts

### Email Notifications

**Setup**:
1. Go to **Settings** → **Notifications**
2. Choose notification preferences
3. Select when to notify

**Options**:
- All activity
- Participating
- Watching
- Custom

### Slack Notifications

**Setup**:
1. Install GitHub app in Slack
2. Connect repository
3. Configure notification rules
4. Receive Slack messages

---

## CI/CD Best Practices

### Pipeline Strategy

**Recommended flow**:
1. Code pushed
2. Lint & format check
3. Build application
4. Run tests
5. Security scan
6. Deploy to staging
7. Deploy to production

### Caching

**Speed up workflows**:
```yaml
- uses: actions/setup-node@v3
  with:
    node-version: '20.x'
    cache: 'npm'
```

### Artifacts

**Store build outputs**:
```yaml
- uses: actions/upload-artifact@v3
  with:
    name: build
    path: dist/
```

---

## Troubleshooting Checklist

- [ ] Actions enabled in Settings
- [ ] Workflow permissions granted
- [ ] Secrets configured (if needed)
- [ ] Workflow YAML syntax correct
- [ ] Branch name matches trigger
- [ ] Dependencies installed
- [ ] Build script works locally
- [ ] Environment variables set
- [ ] Logs checked for errors
- [ ] Workflow rerun successful

---

## Resources

### GitHub Actions Documentation
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

### Popular Actions
- [Checkout](https://github.com/actions/checkout)
- [Setup Node](https://github.com/actions/setup-node)
- [Upload Artifact](https://github.com/actions/upload-artifact)
- [Deploy to Vercel](https://github.com/vercel/action)

### Tools
- [GitHub CLI](https://cli.github.com/)
- [Act](https://github.com/nektos/act) - Run workflows locally
- [GitHub Desktop](https://desktop.github.com/)

---

## FAQ

**Q: How do I run workflows locally?**
A: Use [Act](https://github.com/nektos/act) to run workflows on your machine.

**Q: Can I disable a workflow?**
A: Yes, rename the file to `.disabled` or delete it.

**Q: How do I see workflow logs?**
A: Go to Actions tab, click workflow, click job to see logs.

**Q: Can I run workflows manually?**
A: Yes, if workflow has `workflow_dispatch` trigger.

**Q: How do I skip a workflow?**
A: Add `[skip ci]` to commit message.

---

## Support

**Need help?**
- Check [GitHub Actions Docs](https://docs.github.com/en/actions)
- Open [GitHub Issue](https://github.com/xenon231tech/xenon-airdop-task-tracker/issues)
- Email: [xannrlcs@gmail.com](mailto:xannrlcs@gmail.com)

---

**Last Updated**: June 4, 2024
