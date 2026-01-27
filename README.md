# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with beautiful animations
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth page transitions
- 💼 Projects showcase with filtering
- 📧 Contact form
- 🌟 Interactive hero section with profession animation
- 🎯 Box-shaped background with mouse hover glow effect

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Button.jsx
│  │  │  └─ Loader.jsx
│  │  └─ ui/
│  │     ├─ SectionTitle.jsx
│  │     └─ Card.jsx
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Experience.jsx
│  │  └─ Contact.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Projects.jsx
│  │  └─ NotFound.jsx
│  ├─ data/
│  │  ├─ projects.js
│  │  ├─ skills.js
│  │  └─ socialLinks.js
│  ├─ hooks/
│  │  └─ useScroll.js
│  ├─ utils/
│  │  └─ constants.js
│  ├─ services/
│  │  └─ api.js
│  ├─ layouts/
│  │  └─ MainLayout.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
└─ package.json
```

## Customization

### Update Personal Information

1. Edit `src/sections/Hero.jsx` to update name and profession
2. Update `src/data/socialLinks.js` with your social media links
3. Modify `src/data/projects.js` to add your projects
4. Edit `src/data/skills.js` to reflect your skills

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  dark: {
    100: '#1a1a1a',
    200: '#121212',
    300: '#0a0a0a',
  },
  accent: {
    100: '#60a5fa',
    200: '#3b82f6',
    300: '#2563eb',
  }
}
```

## Special Features

### Hero Section Animation
- Fast profession text animation (1.5 seconds interval)
- Box-shaped background with glow effect
- Mouse hover creates glowing light effect
- Animated grid background

### Interactive Elements
- Smooth scroll navigation
- Hover effects on all interactive elements
- Project filtering system
- Timeline view for experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For any questions or feedback, reach out via the contact form on the website.

---

Made with ❤️ by Kalam Ahmmed# personal-web
