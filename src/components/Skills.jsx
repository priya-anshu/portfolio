// src/components/Skills.jsx
import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Target } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20",
    skills: [
      { name: "React.js", level: 92, color: "from-cyan-400 to-cyan-600" },
      { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-300 to-yellow-500" },
      { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-teal-600" },
      { name: "HTML5", level: 92, color: "from-orange-400 to-orange-600" },
      { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Android UI (Basic)", level: 60, color: "from-purple-400 to-purple-600" }
    ]
  },
  {
    title: "Backend & Cloud",
    icon: Wrench,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-400/20 to-red-500/20",
    skills: [
      { name: "Firebase Authentication", level: 87, color: "from-yellow-400 to-yellow-600" },
      { name: "Firestore", level: 87, color: "from-orange-400 to-orange-600" },
      { name: "Realtime Database", level: 85, color: "from-green-400 to-green-600" },
      { name: "Firebase Storage", level: 85, color: "from-pink-400 to-pink-600" },
      { name: "Node.js (Basic)", level: 60, color: "from-green-500 to-green-700" }
    ]
  },
  {
    title: "Programming",
    icon: Code2,
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-400/20 to-cyan-500/20",
    skills: [
      { name: "Java", level: 85, color: "from-orange-400 to-orange-600" },
      { name: "Python", level: 82, color: "from-yellow-400 to-yellow-600" },
      { name: "C", level: 78, color: "from-gray-400 to-gray-600" },
      { name: "C++", level: 78, color: "from-blue-400 to-blue-600" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-400/20 to-pink-500/20",
    skills: [
      { name: "Oracle DBMS (Advanced)", level: 88, color: "from-red-400 to-red-600" },
      { name: "MySQL", level: 85, color: "from-blue-500 to-blue-700" }
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-400/20 to-red-500/20",
    skills: [
      { name: "Git", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "GitHub", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Cursor AI", level: 88, color: "from-indigo-400 to-indigo-600" },
      { name: "Google Colab", level: 82, color: "from-yellow-400 to-yellow-600" }
    ]
  }
];

export default function Skills() {
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
            <Target className="w-4 h-4 text-blue-400" />
            <span className={`text-xs ${colors.textSecondary} font-medium`}>My Expertise</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-2`}>
            Technical Skills
          </h2>
          <p className={`text-sm ${colors.textSecondary} max-w-xl mx-auto`}>
            Technologies and tools I use to build and ship products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 min-[390px]:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className={`rounded-2xl p-4 ${colors.surface} ${colors.border} border ${colors.shadow}`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <category.icon className="w-4 h-4 text-white" />
                </span>
                <h3 className={`text-sm font-bold ${colors.text}`}>{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-xs ${colors.text} truncate`}>{skill.name}</span>
                      <span className={`text-[10px] ${colors.textMuted} shrink-0`}>{skill.level}%</span>
                    </div>
                    <div className={`h-1 ${colors.border} rounded-full overflow-hidden`}>
                      <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
