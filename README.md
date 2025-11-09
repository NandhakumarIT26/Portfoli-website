# Nandha Kumar - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Nandha Kumar, a Full-Stack & AI Developer specializing in MERN stack, Python, Flask, and AI integrations.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark/light mode toggle
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About section with professional summary
  - Skills section with interactive tech stack grid
  - Projects section showcasing 4 featured projects
  - Services section highlighting offerings
  - Contact section with form and social links

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyPorfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
MyPorfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx         # Hero section with intro
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills and technologies
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Services.jsx     # Services offered
│   │   └── Contact.jsx      # Contact form and info
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update name and title
2. **About Section**: Edit `src/components/About.jsx` to update professional summary
3. **Contact Section**: Edit `src/components/Contact.jsx` to update email, GitHub, and LinkedIn links
4. **Projects**: Edit `src/components/Projects.jsx` to update project details and links

### Color Scheme

The color scheme can be customized in `tailwind.config.js`. The current theme uses:
- Primary: Cyan (`primary-500`)
- Accent: Purple (`accent-500`)

### Dark Mode

Dark mode is enabled by default and can be toggled using the button in the navbar. The preference is saved in localStorage.

## 📝 Notes

- The contact form currently shows an alert on submission. To integrate with a backend, update the `handleSubmit` function in `src/components/Contact.jsx`
- Project links (GitHub and demo) are set to `#` as placeholders. Update them with actual URLs
- Resume download link points to `/resume.pdf`. Add your resume PDF to the `public` folder
- Social media links are placeholders. Update them with your actual profiles

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nandha Kumar**
- Full-Stack & AI Developer
- Specializing in MERN stack, Python, Flask, and AI integrations

---

Built with ❤️ using React, Vite, and Tailwind CSS

