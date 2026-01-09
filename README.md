# Lakzhmy Mari Zaro - Portfolio Website

A modern, responsive portfolio website for showcasing industrial and computational design projects.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference storage
- **Multi-Page Structure**: Home page, individual project pages, and story/about page
- **Modern Tech Stack**: Built with vanilla HTML5, CSS3, and JavaScript (no dependencies)
- **Easy to Customize**: Clean code structure for easy updates and expansions
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Fast Loading**: Optimized images and minimal JavaScript

## 📁 Project Structure 

```
portfolio/
├── index.html              # Home page with project grid
├── story.html              # About/Story page
├── assets/
│   ├── images/            # Project images and photos
│   └── fonts/             # Custom fonts (Urbanist)
├── css/
│   ├── style.css          # Main stylesheet with theming
│   ├── project.css        # Project page specific styles
│   └── story.css          # Story page specific styles
├── js/
│   └── main.js            # Theme switcher and interactions
└── projects/
    ├── nose-pad-system.html
    ├── bex-sunglasses.html
    ├── pet-care-startup.html
    └── led-light-wedges.html
```

## 🚀 Getting Started

### Option 1: Open Locally
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Option 2: GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Netlify/Vercel
1. Connect your GitHub repository to Netlify or Vercel
2. No build settings needed - just deploy!
3. Your site will be live with automatic SSL

## 🎨 Customization

### Adding a New Project

1. **Duplicate a project page**:
   ```bash
   cp projects/nose-pad-system.html projects/your-new-project.html
   ```

2. **Edit the project page**:
   - Update the title, meta description
   - Change project name, role, year, category
   - Update project description and content
   - Replace placeholder images

3. **Add to home page** (`index.html`):
   ```html
   <a href="projects/your-new-project.html" class="project-card">
       <div class="project-image">
           <img src="your-image-url.jpg" alt="Project description">
       </div>
       <div class="project-info">
           <div class="project-details">
               <h3 class="project-title">Your Project Name</h3>
               <p class="project-subtitle">Project Subtitle</p>
           </div>
           <span class="project-type">Product Design</span>
       </div>
   </a>
   ```

### Changing Colors/Theme

Edit the CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #FFFFFF;      /* Background color */
    --text-primary: #000000;    /* Text color */
    --border-color: #585858;    /* Border color (subtle gray) */
    --label-color: #585858;     /* Label color for BIO/CONTACT */
    /* ... more variables */
}

[data-theme="dark"] {
    --bg-primary: #000000;      /* Dark mode background */
    --text-primary: #FFFFFF;    /* Dark mode text */
    --border-color: #585858;    /* Border color (same in both themes) */
    --label-color: #585858;     /* Label color (same in both themes) */
    /* ... more variables */
}
```

### Adding Custom Fonts

1. Place font files in `assets/fonts/`
2. Update the font-family in `css/style.css`:

```css
@font-face {
    font-family: 'Urbanist';
    src: url('../assets/fonts/Urbanist-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}

:root {
    --font-family: 'Urbanist', sans-serif;
}
```

### Updating Contact Information

Edit the contact section in `index.html`:
```html
<a href="mailto:your-email@gmail.com" class="contact-email">
    YOUR-EMAIL@GMAIL.COM
</a>
```

Update social links in the footer:
```html
<a href="https://instagram.com/yourhandle" target="_blank">INSTAGRAM</a>
<a href="https://behance.net/yourhandle" target="_blank">BEHANCE</a>
<a href="https://linkedin.com/in/yourhandle" target="_blank">LINKEDIN</a>
```

## 📱 Responsive Breakpoints

The site adapts to different screen sizes:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

## 🎯 Adding CMS (Future Enhancement)

To add a Content Management System:

### Option 1: Netlify CMS
1. Add `admin/config.yml`
2. Configure collections for projects
3. Deploy to Netlify

### Option 2: Decap CMS
1. Similar to Netlify CMS but self-hosted
2. More control over deployment

### Option 3: Headless CMS
1. Consider Contentful, Sanity, or Strapi
2. Fetch data via API
3. Add build process (recommended: Next.js or Astro)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Best Practices

### Images
- Use optimized images (WebP format recommended)
- Recommended sizes:
  - Project cards: 800x600px
  - Project detail images: 1200x900px
  - Hero images: 1920x1080px

### SEO
- Update meta descriptions for each page
- Use descriptive alt text for all images
- Update the sitemap when adding new pages

### Performance
- Compress images before uploading
- Use lazy loading for images (already implemented)
- Keep JavaScript minimal

## 🐛 Troubleshooting

**Theme toggle not working?**
- Check browser console for JavaScript errors
- Ensure `js/main.js` is loaded correctly

**Images not showing?**
- Check file paths (relative paths from HTML files)
- Ensure images are in the correct directory

**Layout issues on mobile?**
- Clear browser cache
- Test in device mode in browser DevTools

## 📄 License

This is a personal portfolio template. Feel free to use it for your own portfolio with proper attribution.

## 🤝 Credits

- Design: Lakzhmy Mari Zaro
- Development: Built with modern web standards
- Images: Placeholder images from Unsplash (replace with your own)

## 📞 Support

For questions or issues with the template:
- Email: lakzhmy.dsgn@gmail.com
- Open an issue on GitHub

---

**Last Updated**: January 2026
