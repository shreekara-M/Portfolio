# 🚀 Deploy Your Portfolio to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions for automatic deployment.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js installed (version 18 or higher)

## 🛠️ Step-by-Step Deployment Guide

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository settings:**
   - Repository name: `portfolio` (or your preferred name)
   - Description: "My Portfolio Website"
   - Set to **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - ✅ Check "Add .gitignore" and select "Node"
5. **Click "Create repository"**

### Step 2: Upload Your Code to GitHub

#### Option A: Using GitHub Desktop (Recommended for beginners)

1. **Download GitHub Desktop** from [desktop.github.com](https://desktop.github.com)
2. **Clone your repository:**
   - Open GitHub Desktop
   - Click "Clone a repository from the Internet"
   - Enter your repository URL: `https://github.com/YOUR_USERNAME/portfolio`
   - Choose a local path
   - Click "Clone"

3. **Copy your portfolio files:**
   - Copy all your portfolio files into the cloned repository folder
   - Make sure to include: `App.jsx`, `main.jsx`, `index.html`, `package.json`, etc.

4. **Commit and push:**
   - In GitHub Desktop, you'll see all your files
   - Add a commit message: "Initial portfolio setup"
   - Click "Commit to main"
   - Click "Push origin"

#### Option B: Using Command Line

1. **Open terminal/command prompt** in your portfolio folder
2. **Initialize git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

3. **Connect to GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub.com
2. **Click on "Settings"** tab
3. **Scroll down to "Pages"** section (in the left sidebar)
4. **Source settings:**
   - Source: "GitHub Actions"
   - Click "Save"

### Step 4: Automatic Deployment Setup

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`. It will automatically:

1. **Build your portfolio** when you push to main branch
2. **Deploy to GitHub Pages** automatically
3. **Update your live site** every time you make changes

### Step 5: Access Your Live Portfolio

1. **Wait 2-3 minutes** for the first deployment to complete
2. **Go to your repository Settings → Pages**
3. **Your portfolio will be available at:**
   ```
   https://YOUR_USERNAME.github.io/portfolio
   ```

## 🔄 Making Updates

### To update your portfolio:

1. **Make changes** to your files locally
2. **Test locally:**
   ```bash
   npm run dev
   ```
3. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. **GitHub Actions will automatically deploy** your changes

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check that all dependencies are installed: `npm install`
   - Verify all file paths are correct
   - Check for any syntax errors

2. **Site not loading:**
   - Wait 5-10 minutes for deployment
   - Check GitHub Actions tab for build status
   - Verify repository is public

3. **Styling issues:**
   - Clear browser cache
   - Check that all CSS files are included
   - Verify file paths in imports

### Check Deployment Status:

1. Go to your repository
2. Click "Actions" tab
3. Check the status of your latest deployment
4. Click on the workflow to see detailed logs

## 📱 Custom Domain (Optional)

To use a custom domain:

1. **Add a CNAME file** to your repository root:
   ```
   yourdomain.com
   ```

2. **Update DNS settings** with your domain provider:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io

3. **Enable HTTPS** in GitHub Pages settings

## 🎉 Success!

Your portfolio is now live and will automatically update whenever you push changes to your main branch!

**Your portfolio URL:** `https://YOUR_USERNAME.github.io/portfolio`

## 📞 Need Help?

- Check GitHub Pages documentation
- Review GitHub Actions logs
- Ensure all files are properly committed
- Verify repository is public

---

**Happy coding! 🚀**


