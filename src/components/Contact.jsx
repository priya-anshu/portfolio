// src/components/Contact.jsx
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  User,
  Sparkles,
  Heart,
  Zap
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshidhyani9808@gmail.com",
    href: "mailto:priyanshidhyani9808@gmail.com",
    gradient: "from-red-400 to-pink-500",
    bgGradient: "from-red-400/20 to-pink-500/20"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9808 129 751",
    href: "tel:+919808129751",
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttarakhand, India",
    href: "#",
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/priya-anshu",
    gradient: "from-gray-600 to-gray-800",
    bgGradient: "from-gray-600/20 to-gray-800/20"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshu-dhyani-2a7790266/",
    gradient: "from-blue-500 to-blue-700",
    bgGradient: "from-blue-500/20 to-blue-700/20"
  }
];

export default function Contact() {
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

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-20 right-10 w-40 h-40 bg-gradient-to-br ${colors.primary} opacity-10 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-15 rounded-full blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
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
            <MessageCircle className="w-8 h-8 text-pink-400" />
            <span className={`text-lg ${colors.textSecondary} font-medium`}>Get In Touch</span>
          </motion.div>
          
          <motion.h2
            className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-6`}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className={`group relative overflow-hidden ${colors.surface} backdrop-blur-md rounded-3xl p-8 ${colors.border} ${colors.shadow} transition-all duration-700`}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 20
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    animate={{
                      rotate: [0, 3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className={`text-3xl font-black ${colors.text}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Let's Connect!
                  </motion.h3>
                </motion.div>

                <motion.p
                  className={`${colors.textSecondary} text-lg leading-relaxed mb-8`}
                  whileHover={{ x: 5 }}
                >
                  I'm always excited to discuss new opportunities, innovative projects, and creative collaborations. 
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </motion.p>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className={`group/contact flex items-center gap-4 p-4 ${colors.surface} rounded-2xl ${colors.border} backdrop-blur-sm transition-all duration-300 hover:${colors.borderHover}`}
                      whileHover={{
                        scale: 1.02,
                        x: 5
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Animated Background for contact items */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${contact.bgGradient} opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 rounded-2xl`}
                      />

                      <motion.div
                        className={`relative z-10 p-3 rounded-xl bg-gradient-to-r ${contact.gradient} shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <div className="relative z-10">
                        <motion.p
                          className={`text-sm font-bold ${colors.text} mb-1`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {contact.label}
                        </motion.p>
                        <motion.p
                          className={`${colors.textSecondary} font-medium`}
                          whileHover={{ x: 3 }}
                        >
                          {contact.value}
                        </motion.p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  className="mt-8"
                  whileHover={{ x: 5 }}
                >
                  <h4 className={`text-sm font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/social relative overflow-hidden p-4 ${colors.surface} rounded-2xl ${colors.border} ${colors.shadow} transition-all duration-300`}
                        whileHover={{
                          scale: 1.1,
                          rotateY: 10,
                          z: 20
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Animated Background for social links */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${social.bgGradient} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`}
                        />

                        <motion.div
                          className="relative z-10"
                          animate={{
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <social.icon className={`w-6 h-6 ${colors.text}`} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
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
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              className={`group relative overflow-hidden ${colors.surface} backdrop-blur-md rounded-3xl p-8 ${colors.border} ${colors.shadow} transition-all duration-700`}
              whileHover={{
                scale: 1.01,
                rotateY: -2,
                z: 20
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    animate={{
                      rotate: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <Send className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className={`text-3xl font-black ${colors.text}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Message
                  </motion.h3>
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-bold ${colors.text} mb-2 flex items-center gap-2`}>
                      <User className="w-4 h-4 text-blue-400" />
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      className={`w-full px-4 py-4 ${colors.surface} ${colors.text} rounded-2xl ${colors.border} backdrop-blur-sm focus:${colors.borderHover} focus:outline-none transition-all duration-300 font-medium`}
                      placeholder="Enter your name"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-bold ${colors.text} mb-2 flex items-center gap-2`}>
                      <Mail className="w-4 h-4 text-green-400" />
                      Your Email
                    </label>
                    <motion.input
                      type="email"
                      className={`w-full px-4 py-4 ${colors.surface} ${colors.text} rounded-2xl ${colors.border} backdrop-blur-sm focus:${colors.borderHover} focus:outline-none transition-all duration-300 font-medium`}
                      placeholder="Enter your email"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)"
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-bold ${colors.text} mb-2 flex items-center gap-2`}>
                      <MessageCircle className="w-4 h-4 text-purple-400" />
                      Your Message
                    </label>
                    <motion.textarea
                      rows={6}
                      className={`w-full px-4 py-4 ${colors.surface} ${colors.text} rounded-2xl ${colors.border} backdrop-blur-sm focus:${colors.borderHover} focus:outline-none transition-all duration-300 resize-none font-medium`}
                      placeholder="Tell me about your project or just say hello!"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)"
                      }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="group/btn w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl shadow-lg font-bold text-white text-lg transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      rotateY: 2,
                      z: 10
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(168, 85, 247, 0.4)",
                        "0 0 0 10px rgba(168, 85, 247, 0)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Zap className="w-6 h-6" />
                    </motion.div>
                    <span>Send Message</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>

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
                    y: [-8, 8, -8],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`group relative overflow-hidden ${colors.surface} backdrop-blur-md rounded-3xl p-10 ${colors.border} ${colors.shadow} transition-all duration-700`}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl mb-6 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h3
                className={`text-3xl font-black ${colors.text} mb-4`}
                whileHover={{ scale: 1.05 }}
              >
                Ready to Start Something Amazing?
              </motion.h3>
              
              <motion.p
                className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto leading-relaxed`}
                whileHover={{ scale: 1.02 }}
              >
                Let's turn your vision into reality. I'm here to help you build innovative solutions 
                that make a difference. Drop me a message and let's get started!
              </motion.p>
            </div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-12, 12, -12],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
