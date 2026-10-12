// src/components/Footer.jsx
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from "lucide-react";

export default function Footer() {
  const { colors } = useTheme();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/priya-anshu",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/priyanshu-dhyani-2a7790266/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      href: "mailto:priyanshidhyani9808@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  const scrollToSection = (sectionName) => {
    const sections = document.querySelectorAll('section');
    // Map section names to their order in the app
    const sectionMap = {
      'About': 0,     // Hero section
      'Skills': 1,    // Skills section  
      'Experience': 2, // Experience section
      'Education': 3,  // Education section
      'Projects': 4,   // Projects section
      'Contact': 5     // Contact section
    };
    
    const sectionIndex = sectionMap[sectionName];
    if (sectionIndex !== undefined && sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: "About", onClick: () => scrollToSection('About') },
    { name: "Skills", onClick: () => scrollToSection('Skills') },
    { name: "Experience", onClick: () => scrollToSection('Experience') },
    { name: "Education", onClick: () => scrollToSection('Education') },
    { name: "Projects", onClick: () => scrollToSection('Projects') },
    { name: "Contact", onClick: () => scrollToSection('Contact') }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative overflow-hidden ${colors.surface} border-t ${colors.border}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 mb-6 md:mb-8">
          
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              Priyanshu Dhyani
            </motion.h3>
            <p className={`${colors.textSecondary} mb-4 max-w-md leading-relaxed`}>
              Building future-ready applications with continuous learning and innovation.
            </p>
            <motion.div
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={colors.textMuted}>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span className={colors.textMuted}>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
              <span className={colors.textMuted}>in India</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold ${colors.text} mb-4`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={link.onClick}
                    className={`${colors.textSecondary} hover:text-purple-500 transition-colors duration-300 flex items-center gap-2 group`}
                    whileHover={{ x: 5 }}
                  >
                    <Code className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold ${colors.text} mb-4`}>Let's Connect</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl  ${colors.surface} ${colors.border} border ${colors.textSecondary} ${social.color} transition-all duration-300 group`}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className={`mt-4 p-3 rounded-xl ${colors.surface} ${colors.border} border ${colors.textSecondary} hover:text-purple-500 transition-all duration-300 group flex items-center gap-2`}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={`pt-8 border-t ${colors.border} flex flex-col md:flex-row justify-between items-center gap-4`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p
            className={`text-sm ${colors.textMuted} text-center md:text-left`}
            whileHover={{ scale: 1.02 }}
          >
            {new Date().getFullYear()} Priyanshu Dhyani. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex items-center gap-4 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className={`${colors.textMuted} hover:text-purple-500 cursor-pointer transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.span>
            <span className={colors.textMuted}>•</span>
            <motion.span
              className={`${colors.textMuted} hover:text-purple-500 cursor-pointer transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
