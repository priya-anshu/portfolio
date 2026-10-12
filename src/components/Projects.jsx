// src/components/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github, Dumbbell, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const projects = [
  {
    id: 1,
    name: "BioLift",
    subtitle: "AI-Enhanced Fitness Web App",
    description: "BioLift is a production-ready fitness tracking application with secure authentication and real-time performance insights.",
    longDescription: "Developed the full system independently using prompt-assisted UI generation and manual implementation of data flow, debugging, and deployment.",
    technologies: [
      "React.js", "Tailwind CSS", "Firebase (Auth, Firestore, Realtime DB, Storage)", 
      "Git", "Prompt Engineering"
    ],
    features: [
      "Secure authentication",
      "Real-time performance insights",
      "Prompt-assisted UI generation",
      "Manual data flow implementation",
      "Debugging and deployment",
      "Full-stack architecture",
      "Firebase integration across services",
      "Solo-built production-ready delivery"
    ],
    githubLink: "https://github.com/priya-anshu/bio-lift",
    liveLink: "https://biolift-c37b6.web.app/",
    date: "2025",
    status: "Completed",
    icon: Dumbbell,
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-400/20 to-emerald-500/20",
    accentColor: "text-green-500"
  }
];

export default function Projects() {
  const { colors } = useTheme();

  return (
    <section className="py-10 md:py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className={`text-xs ${colors.textSecondary} font-medium`}>My Work</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-2`}>
            Featured Projects
          </h2>
          <p className={`text-sm ${colors.textSecondary}`}>
            A few things I have built.
          </p>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`rounded-2xl p-4 md:p-6 ${colors.surface} ${colors.border} border ${colors.shadow} relative overflow-hidden`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                <div className="min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className={`text-lg md:text-xl font-bold ${colors.text}`}>{project.name}</h3>
                        <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500 text-white rounded-full">{project.status}</span>
                      </div>
                      <p className={`text-xs md:text-sm ${colors.textSecondary}`}>{project.subtitle} - {project.date}</p>
                    </div>
                  </div>

                  <p className={`text-sm ${colors.textSecondary} leading-relaxed mb-3`}>
                    {project.description} {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`px-2 py-1 text-[11px] ${colors.textSecondary} ${colors.surface} rounded-lg ${colors.border} border`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className={`flex items-center gap-1.5 text-xs ${colors.textMuted}`}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold ${colors.text} ${colors.surface} ${colors.border} border rounded-lg hover:bg-black/5 transition-colors`}
                    >
                      <Github className="w-4 h-4" /> View Code <ExternalLink className="w-3 h-3" />
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} rounded-lg`}
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className={`hidden md:flex w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} items-center justify-center shrink-0`} aria-hidden="true">
                  <project.icon className="w-10 h-10 text-white/90" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-5 md:mt-6">
          <a
            href="https://github.com/priya-anshu"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colors.primary} rounded-xl ${colors.shadow} font-semibold text-white text-sm`}
          >
            <Github className="w-4 h-4" />
            <span>More projects on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
