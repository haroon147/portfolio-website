# GitHub Pages Deployment Troubleshooting

## If your site is not deploying, check these:

### 1. Check GitHub Actions Status
- Go to: https://github.com/haroon147/portfolio-website/actions
- Look for the "Deploy to GitHub Pages" workflow
- Click on the latest run to see if there are any errors

### 2. Verify GitHub Pages Settings
- Go to: Settings → Pages
- Source should be: **GitHub Actions**
- If it says "Deploy from a branch", change it to "GitHub Actions"

### 3. Check Workflow Permissions
- Go to: Settings → Actions → General
- Under "Workflow permissions", ensure:
  - ✅ "Read and write permissions" is selected
  - ✅ "Allow GitHub Actions to create and approve pull requests" is checked

### 4. Manual Workflow Trigger
If the workflow didn't run automatically:
- Go to: Actions tab
- Click "Deploy to GitHub Pages" workflow
- Click "Run workflow" button
- Select "main" branch
- Click "Run workflow"

### 5. Common Issues

**Issue: Workflow fails at build step**
- Check if all dependencies are in package.json
- Verify Node version compatibility

**Issue: 404 Error on GitHub Pages**
- Ensure base path in vite.config.js is `/portfolio-website/`
- Clear browser cache and try again

**Issue: Assets not loading**
- Check if base path is correct
- Verify all assets are in the public folder

### 6. Your Site URL
Once deployed, your site will be at:
```
https://haroon147.github.io/portfolio-website/
```

Note: It may take 5-10 minutes after pushing for the site to be live.

### 7. Verify Deployment
- Check Actions tab for successful deployment
- Look for green checkmark ✅
- Click on the deployment to see the URL

