// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Coffee, Sparkles, Zap, Star } from "lucide-react";
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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbVariants = {
    animate: {
      y: [-30, 30, -30],
      x: [-10, 10, -10],
      rotate: [0, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen px-6 overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-br ${
              i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
            } opacity-20 blur-sm`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={orbVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-br ${colors.primary} opacity-10 transform rotate-45`}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className={`absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10"
            variants={floatingVariants}
            animate="animate"
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.primary} ${colors.shadow} backdrop-blur-sm`}>
              <Code className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-20 right-16"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.secondary} ${colors.shadow} backdrop-blur-sm`}>
              <Zap className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-20"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.accent} ${colors.shadow} backdrop-blur-sm`}>
              <Star className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Greeting */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
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
          <span className={`text-xl md:text-2xl ${colors.textSecondary} font-medium`}>
            Hello, I'm
          </span>
        </motion.div>

        {/* Main Title with 3D Effect */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.h1
            className={`text-7xl md:text-9xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight relative z-10`}
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
            className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${colors.secondary} bg-clip-text text-transparent leading-tight`}
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
            className="absolute inset-0 text-7xl md:text-9xl font-black text-gray-300/10 transform translate-x-2 translate-y-2 -z-10"
            style={{ transform: "translateX(4px) translateY(4px) translateZ(-10px)" }}
          >
            Priyanshu
            <div className="text-6xl md:text-8xl">Dhyani</div>
          </div>
        </motion.div>

        {/* Animated Role */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div
            className={`inline-flex items-center gap-4 px-8 py-4 ${colors.surface} backdrop-blur-md rounded-2xl ${colors.border} ${colors.shadow}`}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Code className="w-6 h-6 text-blue-500" />
            <motion.span
              className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Full Stack Developer
            </motion.span>
            <Coffee className="w-6 h-6 text-amber-500" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className={`text-lg md:text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed mb-12`}
          variants={itemVariants}
        >
          MCA Graduate passionate about creating innovative web solutions with React.js, Firebase, and modern technologies. 
          I transform ideas into scalable, user-friendly applications that make a difference.
        </motion.p>

        {/* 3D Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          {[
            { href: "https://github.com/priya-anshu", icon: Github, label: "GitHub", gradient: colors.primary },
            { href: "https://www.linkedin.com/in/priyanshu-dhyani-2a7790266/", icon: Linkedin, label: "LinkedIn", gradient: colors.secondary },
            { href: "mailto:priyanshidhyani9808@gmail.com", icon: Mail, label: "Contact", gradient: colors.accent }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-8 py-4 bg-gradient-to-r ${link.gradient} rounded-2xl ${colors.shadow} font-semibold text-white overflow-hidden`}
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

        {/* Animated Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-16"
          variants={itemVariants}
        >
          {[
            { value: "2+", label: "Years Experience", color: "text-blue-500" },
            { value: "5+", label: "Projects Built", color: "text-purple-500" },
            { value: "∞", label: "Coffee Cups", color: "text-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 ${colors.surface} backdrop-blur-md rounded-2xl ${colors.border} ${colors.shadow}`}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 20
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className={`text-3xl font-bold ${stat.color} mb-2`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {stat.value}
              </motion.div>
              <div className={`text-sm ${colors.textMuted}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
