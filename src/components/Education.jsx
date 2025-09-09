// src/components/Education.jsx
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  BookOpen,
  Star,
  Brain,
  Sparkles,
  School,
  Target
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const education = [
  {
    id: 1,
    degree: "MCA",
    institution: "Graphic Era Hill University",
    location: "Bell Road, Dehradun",
    duration: "2023-2025",
    status: "Current",
    description: "Master of Computer Applications with focus on Advanced DBMS and Machine Learning",
    highlights: [
      "Building real world AI and full stack web applications",
      "Advanced Database Management Systems",
      "Machine Learning and AI fundamentals",
      "Full-stack web development projects"
    ],
    coursework: [
      "Advanced DBMS", "Machine Learning", "Web Development", 
      "Software Engineering", "Data Structures", "Algorithms"
    ],
    icon: Brain,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20"
  },
  {
    id: 2,
    degree: "BSc. IT",
    institution: "D.A.V PG College",
    location: "Karanpur, Dehradun",
    duration: "2020-2023",
    status: "Completed",
    description: "Bachelor of Science in Information Technology with foundational knowledge in core IT concepts",
    highlights: [
      "Gained foundational knowledge in core IT concepts",
      "Programming logic and computer science fundamentals",
      "Database management and web technologies",
      "Software development principles"
    ],
    coursework: [
      "Programming Fundamentals", "Database Systems", "Web Technologies",
      "Software Engineering", "Computer Networks", "Operating Systems"
    ],
    icon: BookOpen,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20"
  },
  {
    id: 3,
    degree: "XII (Science)",
    institution: "Constancia School",
    location: "Dehradun",
    duration: "2019-2020",
    status: "Completed",
    description: "Higher Secondary Education with Science stream focusing on Physics, Chemistry, and Mathematics",
    highlights: [
      "Strong foundation in Science and Mathematics",
      "Analytical and problem-solving skills development",
      "Preparation for engineering and technology careers"
    ],
    coursework: [
      "Physics", "Chemistry", "Mathematics", "Computer Science"
    ],
    icon: GraduationCap,
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-400/20 to-pink-500/20"
  },
  {
    id: 4,
    degree: "X (Science)",
    institution: "Constancia School",
    location: "Dehradun",
    duration: "2017-2018",
    status: "Completed",
    description: "Secondary Education with comprehensive foundation in core subjects",
    highlights: [
      "Comprehensive foundation in core subjects",
      "Development of critical thinking skills",
      "Strong academic performance"
    ],
    coursework: [
      "Mathematics", "Science", "English", "Social Studies", "Computer Applications"
    ],
    icon: Award,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-400/20 to-red-500/20"
  }
];

export default function Education() {
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
    hidden: { x: 50, opacity: 0, rotateY: 15 },
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
          className={`absolute top-20 left-10 w-40 h-40 bg-gradient-to-br ${colors.primary} opacity-10 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
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
            <School className="w-8 h-8 text-purple-400" />
            <span className={`text-lg ${colors.textSecondary} font-medium`}>Academic Journey</span>
          </motion.div>
          
          <motion.h2
            className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-6`}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Education
          </motion.h2>
          
          <motion.p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Academic journey building strong foundations in computer science and technology
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Timeline Line */}
          <motion.div
            className={`absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.primary} hidden md:block rounded-full`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Enhanced Timeline Dot */}
                <motion.div
                  className={`absolute right-6 top-8 w-6 h-6 bg-gradient-to-r ${edu.gradient} rounded-full border-4 ${colors.surface} hidden md:block ${colors.shadow}`}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.4)",
                      "0 0 0 10px rgba(168, 85, 247, 0)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Education Card */}
                <div className="md:mr-20">
                  <motion.div
                    className={`
                      group/card relative overflow-hidden rounded-3xl ${colors.surface} backdrop-blur-md 
                      ${colors.border} ${colors.shadow} transition-all duration-700
                      hover:${colors.shadowHover} hover:${colors.borderHover}
                    `}
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: index % 2 === 0 ? -2 : 2,
                      z: 30
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="p-10 lg:p-12 relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                        <motion.div
                          className="flex items-center gap-6 mb-6 lg:mb-0"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${edu.gradient} ${colors.shadow}`}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <edu.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3
                              className={`text-3xl lg:text-4xl font-black ${colors.text} mb-2`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {edu.degree}
                            </motion.h3>
                            <motion.p
                              className={`text-xl ${colors.textSecondary} font-semibold`}
                              whileHover={{ x: 3 }}
                            >
                              {edu.institution}
                            </motion.p>
                          </div>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.div
                            className={`flex items-center gap-2 ${colors.textMuted}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-5 h-5" />
                            <span className="text-sm font-medium">{edu.duration}</span>
                          </motion.div>
                          <motion.div
                            className={`flex items-center gap-2 ${colors.textMuted}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-medium">{edu.location}</span>
                          </motion.div>
                          <motion.span
                            className={`px-4 py-2 text-sm font-bold rounded-full shadow-lg w-fit ${
                              edu.status === 'Current' 
                                ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white'
                            }`}
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                                "0 0 0 8px rgba(34, 197, 94, 0)",
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          >
                            {edu.status}
                          </motion.span>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p
                        className={`${colors.textSecondary} leading-relaxed mb-8 text-lg`}
                        whileHover={{ x: 5 }}
                      >
                        {edu.description}
                      </motion.p>

                      {/* Highlights */}
                      <motion.div
                        className="mb-8"
                        whileHover={{ x: 5 }}
                      >
                        <h4 className={`text-sm font-bold ${colors.text} mb-6 flex items-center gap-2`}>
                          <Star className="w-5 h-5 text-yellow-400" />
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlightIndex}
                              className={`flex items-start gap-3 ${colors.textMuted}`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: highlightIndex * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full mt-2 flex-shrink-0`}
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: highlightIndex * 0.2
                                }}
                              />
                              <span className="text-sm leading-relaxed font-medium">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Relevant Coursework */}
                      <motion.div
                        whileHover={{ x: 5 }}
                      >
                        <h4 className={`text-sm font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                          <Target className="w-5 h-5 text-orange-400" />
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.coursework.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              className={`px-4 py-2 text-sm ${colors.surface} ${colors.text} rounded-xl ${colors.border} backdrop-blur-sm font-medium`}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(168, 85, 247, 0.1)"
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: courseIndex * 0.05 }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

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

        {/* Enhanced Education Summary */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              value: "7+",
              label: "Years of Education",
              gradient: "from-blue-400 to-cyan-500",
              bgGradient: "from-blue-400/20 to-cyan-500/20",
              icon: Calendar
            },
            {
              value: "MCA",
              label: "Current Degree",
              gradient: "from-green-400 to-emerald-500",
              bgGradient: "from-green-400/20 to-emerald-500/20",
              icon: GraduationCap
            },
            {
              value: "AI/ML",
              label: "Specialization Focus",
              gradient: "from-purple-400 to-pink-500",
              bgGradient: "from-purple-400/20 to-pink-500/20",
              icon: Brain
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
