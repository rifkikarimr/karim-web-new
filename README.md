# Cloud Engineer Portfolio Website

A modern, responsive portfolio website showcasing cloud engineering expertise across AWS, GCP, and Azure. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Cloud+Engineer+Portfolio)

## 🚀 Live Demo

[View Live Portfolio](https://your-username.github.io/cloud-engineer-portfolio)

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** GitHub Pages / Netlify / Vercel

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Multi-Cloud Focus** - Showcases expertise in AWS, GCP, and Azure
- **Interactive Sections** - Smooth scrolling navigation and hover effects
- **Contact Form** - Functional contact form with validation
- **Blog Section** - Technical blog posts and insights
- **Performance Optimized** - Fast loading with optimized assets

## 📋 Sections

### 🏠 Home
- Professional introduction as a Cloud Engineer
- Key specializations: Multi-Cloud | DevOps | SRE
- Call-to-action buttons for projects and contact

### 👨‍💻 About Me
- Comprehensive overview of cloud engineering expertise
- Skills in infrastructure automation, observability, and security
- Focus on scalable, reliable cloud solutions

### 💼 Experience
- Professional timeline with key responsibilities
- Multi-cloud environment management
- DevOps and SRE implementation experience

### 🚀 Projects
- Featured cloud infrastructure projects
- Technologies used and business impact
- Real-world outcomes and metrics

### 🏆 Certifications
- Cloud platform certifications
- Professional credentials and achievements
- Continuous learning commitment

### 📝 Blog
- Technical articles and insights
- Cloud engineering best practices
- Industry trends and experiences

### 📞 Contact
- Professional contact information
- Interactive contact form
- Social media and professional links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cloud-engineer-portfolio.git
   cd cloud-engineer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Professional experience
│   ├── Projects.tsx    # Featured projects
│   ├── Certifications.tsx # Certifications
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── data/
│   └── portfolio.ts    # Portfolio data and content
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
// Add your projects
export const projects: Project[] = [
  {
    id: '1',
    name: 'Your Project Name',
    description: 'Project description...',
    technologies: ['AWS', 'Terraform', 'Docker'],
    outcome: 'Business impact and results...',
  },
];

// Add your experience
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
  },
];
```

### Styling

The project uses Tailwind CSS for styling. Customize colors and design in:
- `tailwind.config.js` - Tailwind configuration
- Component files - Individual component styling

### Contact Information

Update contact details in:
- `src/components/Contact.tsx` - Contact form and information
- `src/components/Footer.tsx` - Footer contact links

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source as "GitHub Actions"

2. **Create deployment workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Your Name** - Cloud Engineer

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🌐 Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Fast build tool

---

⭐ **Star this repository if you found it helpful!**
