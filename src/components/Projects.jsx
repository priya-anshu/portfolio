// src/components/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Zap, Brain, Dumbbell, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const projects = [
  {
    id: 1,
    name: "BioLift",
    subtitle: "Smart Fitness Companion Web App",
    description: "A comprehensive dual-theme fitness platform that empowers solo gym-goers with smart workout plans, adaptive routines, diet suggestions, and real-time performance insights.",
    longDescription: "Developed a competitive ranking system that updates based on users' sprint-based workout intensity, PRs, and consistency, motivating them to push further and improve their strength levels. Implemented Firebase Realtime Database & Firestore to manage user data across distributed systems, ensuring low-latency, scalable updates.",
    technologies: [
      "React.js", "Tailwind CSS", "Firebase", "Firestore", "Realtime DB", 
      "Firebase Storage", "Git & GitHub", "TensorFlow.js", "OpenAI API"
    ],
    features: [
      "Dual-theme fitness platform",
      "Smart workout plan generation",
      "Adaptive routines based on user progress",
      "Diet suggestions and nutrition tracking",
      "Competitive ranking system",
      "Real-time performance insights",
      "Firebase Realtime Database integration",
      "Low-latency, scalable architecture"
    ],
    githubLink: "https://github.com/priya-anshu/bio-lift",
    liveLink: "", // Add if available
    date: "Sep 2025",
    status: "Completed",
    icon: Dumbbell,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20",
    accentColor: "text-green-500"
  },
  {
    id: 2,
    name: "NAC",
    subtitle: "Next-Gen Assistive Controller - AI Powered Desktop Assistant",
    description: "An advanced AI-powered desktop assistant featuring real-time gesture detection, eye-tracking, and speech recognition for hands-free computer interaction.",
    longDescription: "Developed real-time gesture detection mapping specific hand poses to cursor movements and clicks with sub-50ms latency and 98% recognition accuracy. Built an eye-tracking module using standard webcam input with adaptive smoothing and calibration routines to enable precise pointer control without external hardware.",
    technologies: [
      "Python", "OpenCV", "MediaPipe", "PyQt6", "Speech Recognition",
      "PyAudio", "PyAutoGUI", "python-opencv"
    ],
    features: [
      "Real-time gesture detection (sub-50ms latency)",
      "98% recognition accuracy",
      "Eye-tracking module with webcam input",
      "Adaptive smoothing and calibration",
      "Continuous speech recognition",
      "Natural language parsing",
      "App launching and web search",
      "PyTTSx3-powered TTS feedback"
    ],
    githubLink: "https://github.com/priya-anshu/NAC_Next-GenAssistiveController",
    liveLink: "", // Add if available
    date: "May 2025",
    status: "Completed",
    icon: Brain,
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-400/20 to-indigo-500/20",
    accentColor: "text-purple-500"
  }
];

export default function Projects() {
  const { colors } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-20 right-10 w-40 h-40 bg-gradient-to-br ${colors.primary} opacity-10 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <span className={`text-lg ${colors.textSecondary} font-medium`}>My Work</span>
          </motion.div>
          
          <motion.h2
            className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-6`}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Innovative solutions built with modern technologies and creative problem-solving
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`
                  relative overflow-hidden rounded-3xl ${colors.surface} backdrop-blur-md 
                  ${colors.border} ${colors.shadow} transition-all duration-700
                  hover:${colors.shadowHover} hover:${colors.borderHover}
                `}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center relative z-10`}>
                  {/* Project Content */}
                  <div className="flex-1 p-10 lg:p-12">
                    {/* Project Header */}
                    <motion.div
                      className="flex items-center gap-6 mb-8"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} ${colors.shadow}`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <project.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <motion.h3
                            className={`text-3xl lg:text-4xl font-black ${colors.text}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {project.name}
                          </motion.h3>
                          <motion.span
                            className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full shadow-lg"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                                "0 0 0 10px rgba(34, 197, 94, 0)",
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            {project.status}
                          </motion.span>
                        </div>
                        
                        <p className={`text-xl ${colors.textSecondary} font-medium mb-3`}>
                          {project.subtitle}
                        </p>
                        
                        <div className={`flex items-center gap-2 ${colors.textMuted}`}>
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.date}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Description */}
                    <motion.div
                      className="mb-8"
                      whileHover={{ x: 5 }}
                    >
                      <p className={`${colors.textSecondary} text-lg leading-relaxed mb-6`}>
                        {project.description}
                      </p>
                      
                      <p className={`${colors.textMuted} leading-relaxed`}>
                        {project.longDescription}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      className="mb-8"
                      whileHover={{ x: 5 }}
                    >
                      <h4 className={`text-sm font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-4 py-2 text-sm ${colors.surface} ${colors.text} rounded-xl ${colors.border} backdrop-blur-sm font-medium`}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(168, 85, 247, 0.1)"
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                      className="mb-10"
                      whileHover={{ x: 5 }}
                    >
                      <h4 className={`text-sm font-bold ${colors.text} mb-4`}>Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.slice(0, 6).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className={`flex items-center gap-3 ${colors.textMuted}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <motion.div
                              className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: featureIndex * 0.2
                              }}
                            />
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex items-center gap-3 px-8 py-4 ${colors.surface} ${colors.border} rounded-2xl font-semibold ${colors.text} backdrop-blur-md ${colors.shadow} transition-all duration-300`}
                        whileHover={{
                          scale: 1.05,
                          rotateY: 5,
                          z: 20
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                      
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} rounded-2xl ${colors.shadow} font-semibold text-white`}
                          whileHover={{
                            scale: 1.05,
                            rotateY: -5,
                            z: 20
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="flex-shrink-0 p-10 lg:p-12">
                    <motion.div
                      className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center ${colors.shadow} overflow-hidden`}
                      whileHover={{
                        scale: 1.05,
                        rotate: index % 2 === 0 ? 3 : -3,
                        z: 30
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Animated background pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "20px 20px"
                        }}
                      />

                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <project.icon className="w-32 h-32 lg:w-40 lg:h-40 text-white/90 drop-shadow-2xl" />
                      </motion.div>

                      {/* Floating particles */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/40 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-20, 20, -20],
                            opacity: [0.4, 1, 0.4],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/priya-anshu"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r ${colors.primary} rounded-2xl ${colors.shadow} font-bold text-white text-lg`}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 20
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Github className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
