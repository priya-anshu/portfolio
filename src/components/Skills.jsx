// src/components/Skills.jsx
import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Zap,
  Star,
  TrendingUp,
  Sparkles,
  Award,
  Target
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20",
    skills: [
      { name: "C++", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "Java", level: 80, color: "from-orange-400 to-orange-600" },
      { name: "JavaScript", level: 88, color: "from-yellow-300 to-yellow-500" },
      { name: "SQL", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "C", level: 75, color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20",
    skills: [
      { name: "React.js", level: 92, color: "from-cyan-400 to-cyan-600" },
      { name: "HTML", level: 95, color: "from-orange-400 to-orange-600" },
      { name: "CSS", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-teal-600" },
      { name: "PHP", level: 75, color: "from-purple-400 to-purple-600" },
      { name: "Node.js", level: 80, color: "from-green-500 to-green-700" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-400/20 to-pink-500/20",
    skills: [
      { name: "Firebase", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "MySQL", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Oracle (Advanced)", level: 88, color: "from-red-400 to-red-600" },
      { name: "Firestore", level: 87, color: "from-orange-400 to-orange-600" },
      { name: "Realtime DB", level: 85, color: "from-green-400 to-green-600" }
    ]
  },
  {
    title: "Other Tools",
    icon: Wrench,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-400/20 to-red-500/20",
    skills: [
      { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Git & GitHub", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "Android Studio", level: 75, color: "from-green-500 to-green-700" },
      { name: "Google Colab", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "TensorFlow.js", level: 70, color: "from-orange-400 to-orange-600" },
      { name: "OpenCV", level: 75, color: "from-blue-500 to-blue-700" }
    ]
  }
];

const achievements = [
  "Certificate of Excellence (Placement Hackathon, Exploring Academy 2025)",
  "Certificate of Completion (C Programming)",
  "Certificate Of Excellence (Graph-e-thon 2024)",
  "3-month internship as SDE-Intern"
];

export default function Skills() {
  const { colors } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-20 left-10 w-40 h-40 bg-gradient-to-br ${colors.primary} opacity-10 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
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
            <Target className="w-8 h-8 text-blue-400" />
            <span className={`text-lg ${colors.textSecondary} font-medium`}>My Expertise</span>
          </motion.div>
          
          <motion.h2
            className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-6`}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Technical Skills
          </motion.h2>
          
          <motion.p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Proficient in modern technologies and frameworks for full-stack development
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`
                  relative overflow-hidden rounded-3xl ${colors.surface} backdrop-blur-md 
                  ${colors.border} ${colors.shadow} transition-all duration-700 p-8
                  hover:${colors.shadowHover} hover:${colors.borderHover}
                `}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: categoryIndex % 2 === 0 ? 2 : -2,
                  z: 30
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <motion.div
                    className="flex items-center gap-6 mb-8"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} ${colors.shadow}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3
                      className={`text-2xl lg:text-3xl font-black ${colors.text}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.title}
                    </motion.h3>
                  </motion.div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <motion.span
                            className={`${colors.text} font-semibold text-lg`}
                            whileHover={{ x: 5 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span
                            className={`text-sm font-bold ${colors.textSecondary} px-3 py-1 rounded-full ${colors.surface} ${colors.border}`}
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        <div className={`relative h-3 ${colors.surface} rounded-full overflow-hidden ${colors.border}`}>
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                            variants={skillVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                          
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                          />
                          
                          {/* Floating particles */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/60 rounded-full"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * skill.level}%`,
                              }}
                              animate={{
                                y: [-5, 5, -5],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 2 + Math.random(),
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Zap,
              title: "Full-Stack",
              description: "End-to-end web development with modern frameworks",
              gradient: "from-blue-400 to-cyan-500",
              bgGradient: "from-blue-400/20 to-cyan-500/20"
            },
            {
              icon: TrendingUp,
              title: "AI/ML Ready",
              description: "Experience with TensorFlow.js and OpenCV",
              gradient: "from-green-400 to-emerald-500",
              bgGradient: "from-green-400/20 to-emerald-500/20"
            },
            {
              icon: Star,
              title: "Cloud Native",
              description: "Firebase, Firestore, and real-time databases",
              gradient: "from-purple-400 to-pink-500",
              bgGradient: "from-purple-400/20 to-pink-500/20"
            }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden text-center p-8 ${colors.surface} backdrop-blur-md rounded-3xl ${colors.border} ${colors.shadow} transition-all duration-700`}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl mb-6 ${colors.shadow}`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h4
                  className={`text-2xl font-bold ${colors.text} mb-3`}
                  whileHover={{ scale: 1.05 }}
                >
                  {highlight.title}
                </motion.h4>
                
                <p className={`${colors.textSecondary} leading-relaxed`}>
                  {highlight.description}
                </p>
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className={`group relative overflow-hidden ${colors.surface} backdrop-blur-md rounded-3xl p-10 ${colors.border} ${colors.shadow} mb-20`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
            rotateX: 1,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />

          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-6 mb-8"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="p-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className={`text-3xl font-black ${colors.text}`}
                whileHover={{ scale: 1.05 }}
              >
                Achievements & Certifications
              </motion.h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`group/achievement flex items-center gap-4 p-6 ${colors.surface} rounded-2xl ${colors.border} backdrop-blur-sm transition-all duration-300 hover:${colors.borderHover}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex-shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <span className={`${colors.textSecondary} font-medium`}>
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-8 h-8 text-pink-400" />
            <motion.h3
              className={`text-3xl font-black ${colors.text}`}
              whileHover={{ scale: 1.05 }}
            >
              Soft Skills
            </motion.h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Team Player", "Adaptability", "Integrity", "Fluent English Communication",
              "Socializing", "Visionary Leadership", "Proficient in English Grammar"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className={`px-6 py-3 ${colors.surface} backdrop-blur-md rounded-2xl ${colors.border} ${colors.shadow} transition-all duration-300 hover:${colors.borderHover} ${colors.text} font-medium`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 10
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
