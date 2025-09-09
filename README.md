# 🚀 Priyanshu Dhyani - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring dynamic animations, dark/light theme toggle, and a beautiful gradient design. This portfolio showcases my skills, experience, projects, and provides an easy way to get in touch.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **🌓 Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **📱 Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **⚡ Fast Performance**: Built with React 19 and optimized for speed
- **🎯 Interactive Sections**:
  - Hero section with animated introduction
  - Skills showcase with technology icons
  - Professional experience timeline
  - Education background
  - Project portfolio with live demos
  - Contact form with social links

## 🛠️ Tech Stack

- **Frontend**: React.js 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priya-anshu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing section
│   │   ├── Skills.jsx        # Technical skills
│   │   ├── Experience.jsx    # Work experience
│   │   ├── Education.jsx     # Educational background
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Footer.jsx        # Footer section
│   │   └── ThemeToggle.jsx   # Theme switcher
│   ├── contexts/
│   │   └── ThemeContext.jsx  # Theme management
│   ├── App.jsx              # Main application
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
├── package.json
└── README.md
```

## 🎯 Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner
- **`npm run build`** - Builds the app for production
- **`npm run eject`** - Ejects from Create React App (one-way operation)

## 🌟 Key Sections

### 🏠 Hero Section
- Animated introduction with gradient text effects
- Professional photo and brief introduction
- Call-to-action buttons for resume and contact

### 💼 Experience
- Interactive timeline of professional experience
- Detailed role descriptions and achievements
- Company logos and duration

### 🎓 Education
- Academic background and certifications
- Institution details and graduation years
- Relevant coursework and achievements

### 🛠️ Skills
- Categorized technical skills
- Interactive skill cards with proficiency levels
- Technology icons and descriptions

### 📂 Projects
- Showcase of major projects with live demos
- Technology stack for each project
- GitHub links and detailed descriptions

### 📞 Contact
- Contact form with validation
- Social media links
- Professional contact information

## 🎨 Customization

### Theme Colors
The theme system is managed through `ThemeContext.jsx`. You can customize colors by modifying the theme object:

```javascript
const themes = {
  light: {
    bg: 'from-gray-50 to-white',
    text: 'text-gray-900',
    // ... other properties
  },
  dark: {
    bg: 'from-gray-900 to-black',
    text: 'text-white',
    // ... other properties
  }
};
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation if needed

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Priyanshu Dhyani** - Full Stack Developer
- 📧 Email: priyanshidhyani9808@gmail.com
- 📱 Phone: +91 9808 129 751
- 🌍 Location: Uttarakhand, India
- 💼 LinkedIn: [priyanshu-dhyani-2a7790266](https://www.linkedin.com/in/priyanshu-dhyani-2a7790266/)
- 🐙 GitHub: [priya-anshu](https://github.com/priya-anshu)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/priya-anshu/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

*Built with ❤️ by Priyanshu Dhyani*
