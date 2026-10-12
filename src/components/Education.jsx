// src/components/Education.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, Brain, School } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era Hill University",
    location: "Dehradun",
    duration: "2023 - 2025",
    status: "Completed",
    description: "Focus on full-stack development, advanced DBMS, and learning ML and data-driven application development.",
    highlights: [
      "Building real-time and full-stack applications",
      "Advanced DBMS and data modeling",
      "Learning ML and data-driven development"
    ],
    coursework: [
      "Advanced DBMS", "Full-Stack Development", "Data Structures", 
      "Algorithms", "Web Development", "Software Engineering"
    ],
    icon: Brain,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20"
  },
  {
    id: 2,
    degree: "Bachelor of Science in IT (BSc IT)",
    institution: "D.A.V. PG College",
    location: "Dehradun",
    duration: "2020 - 2023",
    status: "Completed",
    description: "Foundation in programming, DBMS, and web technologies.",
    highlights: [
      "Programming fundamentals and problem solving",
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
  }
];

export default function Education() {
  const { colors } = useTheme();

  return (
    <section className="py-8 md:py-10 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-7 md:mb-9"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <School className="w-4 h-4 text-purple-400" />
            <span className={`text-xs ${colors.textSecondary} font-medium`}>Academic Journey</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-2`}>
            Education
          </h2>
          <p className={`text-sm ${colors.textSecondary} max-w-xl mx-auto`}>
            Computer science and information technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {education.map((edu) => (
            <motion.article
              key={edu.id}
              className={`rounded-2xl p-4 md:p-5 ${colors.surface} ${colors.border} border ${colors.shadow} relative overflow-hidden`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${edu.gradient}`} />
              <div className="flex items-start gap-3 mb-3">
                <span className={`shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center`}>
                  <edu.icon className="w-4 h-4 text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className={`text-base md:text-lg font-bold ${colors.text} leading-snug`}>{edu.degree}</h3>
                  <p className={`text-xs ${colors.textSecondary} mt-0.5`}>{edu.institution}</p>
                </div>
                <span className="shrink-0 px-2 py-1 text-[10px] font-bold bg-emerald-500 text-white rounded-full">{edu.status}</span>
              </div>
              <div className={`flex flex-wrap gap-x-4 gap-y-1 text-[11px] ${colors.textMuted} mb-3`}>
                <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.duration}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
              </div>
              <p className={`text-xs ${colors.textSecondary} leading-relaxed mb-3`}>{edu.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span key={course} className={`px-2 py-1 text-[10px] ${colors.textSecondary} ${colors.surface} rounded-md ${colors.border} border`}>
                    {course}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
