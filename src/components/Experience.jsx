// src/components/Experience.jsx
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight,
  Code,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  Building,
  Target
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const experiences = [
  {
    id: 1,
    company: "Pledgent Technologies",
    role: "React Developer Intern",
    duration: "Jun 2025 - Aug 2025",
    location: "Remote",
    type: "Internship",
    description: "Strengthened React.js fundamentals by building component-based UIs with JSX, hooks, and React Router for seamless navigation. Implemented global state management using Redux Toolkit and integrated Firebase Authentication, Firestore, and Realtime Database for scalable full-stack functionality.",
    skills: [
      "React.js", "JSX", "Hooks", "React Router", "Redux Toolkit", 
      "Firebase", "Authentication", "Firestore", "Realtime DB", 
      "Tailwind CSS", "Jest", "React Testing Library"
    ],
    achievements: [
      "Built component-based UIs with seamless navigation",
      "Implemented global state management with Redux Toolkit",
      "Integrated Firebase services for full-stack functionality",
      "Designed responsive interfaces with Tailwind CSS",
      "Conducted thorough testing with Jest and React Testing Library",
      "Deployed projects on Netlify/Vercel"
    ],
    icon: Code,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20"
  },
  {
    id: 2,
    company: "Graphic Era Deemed University",
    role: "SDE Intern",
    duration: "Apr 2024 - Jul 2024",
    location: "Dehradun, India",
    type: "Internship",
    description: "Collaborated with development teams to analyze problems and design efficient software solutions. Developed dynamic, user-friendly interfaces and optimized website performance. Organized and maintained documentation, files, and project reports to support senior developers.",
    skills: [
      "HTML", "CSS", "MongoDB", "Git", "GitHub", "Software Development",
      "Problem Analysis", "Documentation", "Team Collaboration"
    ],
    achievements: [
      "Collaborated with development teams for problem analysis",
      "Designed efficient software solutions",
      "Developed dynamic, user-friendly interfaces",
      "Optimized website performance",
      "Maintained comprehensive project documentation",
      "Supported senior developers with organized file management"
    ],
    icon: Users,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20"
  },
  {
    id: 3,
    company: "Forever Living Product (UK)",
    role: "Preferred Customer",
    duration: "Jan 2023 - Apr 2023",
    location: "UK",
    type: "Customer Relations",
    description: "Built strong customer relationships with personalized product recommendations and responsive support. Promoted and sold wellness and skincare products through social media and personal outreach. Managed inventory, tracked sales data, and identified potential growth areas in a competitive market.",
    skills: [
      "Customer Relations", "Social Media Marketing", "Sales", 
      "Inventory Management", "Data Analysis", "Market Research"
    ],
    achievements: [
      "Built strong customer relationships with personalized recommendations",
      "Promoted wellness and skincare products through social media",
      "Managed inventory and tracked sales data effectively",
      "Identified potential growth areas in competitive market",
      "Provided responsive customer support",
      "Developed social media marketing strategies"
    ],
    icon: TrendingUp,
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-400/20 to-pink-500/20"
  }
];

export default function Experience() {
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
    hidden: { x: -50, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
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
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
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
            <Building className="w-8 h-8 text-green-400" />
            <span className={`text-lg ${colors.textSecondary} font-medium`}>My Journey</span>
          </motion.div>
          
          <motion.h2
            className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-6`}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Building expertise through hands-on experience in software development and technology
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Timeline Line */}
          <motion.div
            className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.primary} hidden md:block rounded-full`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Enhanced Timeline Dot */}
                <motion.div
                  className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-r ${experience.gradient} rounded-full border-4 ${colors.surface} hidden md:block ${colors.shadow}`}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Experience Card */}
                <div className="md:ml-20">
                  <motion.div
                    className={`
                      group/card relative overflow-hidden rounded-3xl ${colors.surface} backdrop-blur-md 
                      ${colors.border} ${colors.shadow} transition-all duration-700
                      hover:${colors.shadowHover} hover:${colors.borderHover}
                    `}
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: index % 2 === 0 ? 2 : -2,
                      z: 30
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${experience.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="p-10 lg:p-12 relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                        <motion.div
                          className="flex items-center gap-6 mb-6 lg:mb-0"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${experience.gradient} ${colors.shadow}`}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <experience.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3
                              className={`text-3xl lg:text-4xl font-black ${colors.text} mb-2`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {experience.role}
                            </motion.h3>
                            <motion.p
                              className={`text-xl ${colors.textSecondary} font-semibold`}
                              whileHover={{ x: 3 }}
                            >
                              {experience.company}
                            </motion.p>
                          </div>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.div
                            className={`flex items-center gap-2 ${colors.textMuted}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-5 h-5" />
                            <span className="text-sm font-medium">{experience.duration}</span>
                          </motion.div>
                          <motion.div
                            className={`flex items-center gap-2 ${colors.textMuted}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-medium">{experience.location}</span>
                          </motion.div>
                          <motion.span
                            className={`px-4 py-2 text-sm font-bold bg-gradient-to-r ${experience.gradient} text-white rounded-full shadow-lg w-fit`}
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                                "0 0 0 8px rgba(59, 130, 246, 0)",
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          >
                            {experience.type}
                          </motion.span>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p
                        className={`${colors.textSecondary} leading-relaxed mb-8 text-lg`}
                        whileHover={{ x: 5 }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Skills */}
                      <motion.div
                        className="mb-8"
                        whileHover={{ x: 5 }}
                      >
                        <h4 className={`text-sm font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                          <Target className="w-5 h-5 text-orange-400" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className={`px-4 py-2 text-sm ${colors.surface} ${colors.text} rounded-xl ${colors.border} backdrop-blur-sm font-medium`}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(59, 130, 246, 0.1)"
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Key Achievements */}
                      <motion.div
                        whileHover={{ x: 5 }}
                      >
                        <h4 className={`text-sm font-bold ${colors.text} mb-6 flex items-center gap-2`}>
                          <Award className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              className={`flex items-start gap-3 ${colors.textMuted}`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                animate={{
                                  rotate: [0, 90, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: achievementIndex * 0.2
                                }}
                              >
                                <ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                              </motion.div>
                              <span className="text-sm leading-relaxed font-medium">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-15, 15, -15],
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Experience Summary */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              value: "2+",
              label: "Years of Experience",
              gradient: "from-blue-400 to-cyan-500",
              bgGradient: "from-blue-400/20 to-cyan-500/20",
              icon: Calendar
            },
            {
              value: "3",
              label: "Professional Roles",
              gradient: "from-green-400 to-emerald-500",
              bgGradient: "from-green-400/20 to-emerald-500/20",
              icon: Briefcase
            },
            {
              value: "15+",
              label: "Technologies Used",
              gradient: "from-purple-400 to-pink-500",
              bgGradient: "from-purple-400/20 to-pink-500/20",
              icon: Code
            }
          ].map((stat, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 ${colors.shadow}`}
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
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.value}
                </motion.div>
                
                <p className={`${colors.textSecondary} font-medium`}>
                  {stat.label}
                </p>
              </div>

              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
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
      </div>
    </section>
  );
}
