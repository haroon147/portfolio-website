# Portfolio Website

A modern, fully animated portfolio website built with React, GSAP, and Tailwind CSS.

## Features

- ✨ Smooth GSAP animations throughout
- 🎨 Beautiful, modern design with Tailwind CSS
- 📱 Fully responsive layout
- 🚀 Fast and optimized performance
- � sections: Introduction, Education, Articles, Publications, Projects, and Contact

## Sections

1. **Hero/Introduction** - Animated introduction with floating elements
2. **Education** - Display your educational background
3. **Articles** - Showcase your written articles
4. **Publications** - Academic or professional publications
5. **Projects** - Portfolio of your projects with technologies used
6. **Contact** - Contact form and social media links

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Change the avatar/initials

2. **Education** (`src/components/Education.jsx`):
   - Modify the `educationData` array with your education history

3. **Articles** (`src/components/Articles.jsx`):
   - Update the `articles` array with your articles

4. **Publications** (`src/components/Publications.jsx`):
   - Modify the `publications` array with your publications

5. **Projects** (`src/components/Projects.jsx`):
   - Update the `projects` array with your projects

6. **Contact** (`src/components/Contact.jsx`):
   - Update social media URLs in the `socialLinks` array
   - Modify email address
   - Customize contact form fields if needed

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes

### Animations

All animations use GSAP. You can customize them in each component's `useEffect` hook. The main animation setup is in `src/App.jsx`.

## Technologies Used

- **React** - UI library
- **GSAP** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1. **Create a GitHub Repository:**
   - Go to GitHub and create a new repository
   - Name it (e.g., `portfolio-website` or `mha-solutions-portfolio`)

2. **Initialize Git and Push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to `main` branch

4. **Access Your Site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - If you want a custom domain, you can configure it in the Pages settings

### Manual Deployment:

If you prefer to deploy manually:
```bash
npm run build
# Then upload the dist folder to GitHub Pages or your hosting service
```

## License

MIT
