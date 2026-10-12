// src/App.jsx
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function AppContent() {
  const { colors, isDark } = useTheme();

  return (
    <div className={`relative isolate min-h-screen font-sans transition-colors duration-500 bg-gradient-to-br ${colors.bg}`}>
      <div
        className={`theme-background ${isDark ? "theme-background--dark" : "theme-background--light"}`}
        aria-hidden="true"
      />
      <ThemeToggle />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
