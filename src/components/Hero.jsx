// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Coffee, Sparkles, Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { colors } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center min-h-[75svh] md:min-h-[82vh] px-4 md:px-6 py-14 md:py-0 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          variants={itemVariants}
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-10 h-10 my-4 text-yellow-400" />
          </motion.div>
          <span className={`text-base md:text-2xl ${colors.textSecondary} font-medium`}>
            Hello, I’m
          </span>
        </motion.div>

        {/* Main Title with 3D Effect */}
        <motion.div
          variants={itemVariants}
          className="relative mb-5"
        >
          <motion.h1
            className={`text-5xl sm:text-7xl md:text-9xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight relative z-10`}
            style={{
              textShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            Priyanshu
          </motion.h1>
          <motion.h1
            className={`text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r ${colors.secondary} bg-clip-text text-transparent leading-tight`}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            Dhyani
          </motion.h1>

          {/* 3D Shadow Effect */}
          <div 
            className="absolute inset-0 text-5xl sm:text-7xl md:text-9xl font-black text-gray-300/10 transform translate-x-2 translate-y-2 -z-10"
            style={{ transform: "translateX(4px) translateY(4px) translateZ(-10px)" }}
          >
            Priyanshu
            <div className="text-5xl sm:text-6xl md:text-8xl">Dhyani</div>
          </div>
        </motion.div>

        {/* Animated Role */}
        <motion.div
          className="mb-5"
          variants={itemVariants}
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-3 md:gap-4 md:px-8 md:py-4 ${colors.surface} backdrop-blur-md rounded-2xl ${colors.border} ${colors.shadow}`}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Code className="w-6 h-6 text-blue-500" />
            <motion.span
              className={`text-sm sm:text-base md:text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              AI-Assisted Full-Stack Developer
            </motion.span>
            <Coffee className="w-6 h-6 text-amber-500" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className={`text-sm md:text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8`}
          variants={itemVariants}
        >
          I build and maintain full-stack products with Next.js, React, and Supabase, and contribute to AI evaluation and data engineering projects. My experience spans production web applications, LLM benchmarking, and Python analytics.
        </motion.p>

        {/* 3D Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4"
          variants={itemVariants}
        >
          {[
            { href: "https://github.com/priya-anshu", icon: Github, label: "GitHub", gradient: colors.primary },
            { href: "https://www.linkedin.com/in/priyanshu-dhyani-2a7790266/", icon: Linkedin, label: "LinkedIn", gradient: colors.secondary },
            { href: "mailto:priyanshudhyani9808@gmail.com", icon: Mail, label: "Email", gradient: colors.accent },
            { href: "/Priyanshu_Dhyani_Resume.pdf", icon: Download, label: "Download Resume", gradient: colors.primary, download: true }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download ? "Priyanshu_Dhyani_Resume.pdf" : undefined}
              className={`group relative px-3 py-2.5 md:px-5 md:py-3 bg-gradient-to-r ${link.gradient} rounded-2xl ${colors.shadow} font-semibold text-white text-xs sm:text-sm overflow-hidden`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="relative z-10 flex items-center gap-3">
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* 3D depth effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-50 transform translate-x-1 translate-y-1 -z-10 rounded-2xl`}
                style={{ transform: "translateX(2px) translateY(2px) translateZ(-5px)" }}
              />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
