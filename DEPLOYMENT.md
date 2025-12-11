# Deployment Guide - GitHub Pages

## Quick Start

Follow these steps to deploy your portfolio website to GitHub Pages:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository (e.g., `portfolio-website` or `mha-solutions-portfolio`)
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

### Step 2: Connect and Push to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
# Set the main branch
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/haroon147/portfolio-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy!

### Step 4: Access Your Live Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://haroon147.github.io/portfolio-website/
```

## Automatic Deployment

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy it to GitHub Pages
3. Make it live within a few minutes

## Updating Your Site

To update your site:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Troubleshooting

### If deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Look for any error messages
3. Ensure your `vite.config.js` has `base: '/'` (or your repo name if deploying to subdirectory)

### If you want to deploy to a subdirectory:
Update `vite.config.js`:
```javascript
base: '/your-repo-name/',
```

### Custom Domain:
1. Go to **Settings** → **Pages**
2. Enter your custom domain
3. Follow GitHub's DNS configuration instructions

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Actions Documentation: https://docs.github.com/en/actions

