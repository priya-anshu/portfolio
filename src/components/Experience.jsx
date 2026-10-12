// src/components/Experience.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Code, Users, TrendingUp, Sparkles, Building } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const experiences = [
  {
    id: 1,
    company: "Edunosis Education",
    role: "Software Development Engineer - I",
    duration: "Jan 2026 - Present",
    location: "Delhi, India - Remote",
    type: "Full-time",
    description: "Own full-stack development across Build-O-Bot, a learning management system for STEM and robotics education, and Vedavan, an e-commerce platform for supplements. Build both products with Next.js, React, and Supabase, prioritizing work across them based on business needs.",
    skills: ["Next.js", "React", "Supabase", "PostgreSQL", "Authentication", "SEO"],
    achievements: ["Architected scalable application structures for performance and SEO across both products.", "Implemented authentication, role-based access control, and PostgreSQL row-level data isolation.", "Built an internal admin dashboard to monitor API performance and user activity."],
    icon: Code,
    gradient: "from-blue-400 to-indigo-500",
    bgGradient: "from-blue-400/20 to-indigo-500/20"
  },
  {
    id: 2,
    company: "Handshake AI",
    role: "AI Trainer (Freelance)",
    duration: "Aug 2026 - Present",
    location: "Remote",
    type: "Freelance",
    description: "Evaluate and improve large language model performance through contract-based benchmarking work. Write tasks for Project Dynamo to test model performance against Terminal Bench; previously created image-based STEM reasoning questions for Project Lumiere and reviewed professional work-experience documents for Project Parchment.",
    skills: ["LLM Evaluation", "Prompt Engineering", "Benchmarking", "Technical Writing"],
    achievements: ["Create benchmark tasks for evaluating LLM performance against Terminal Bench.", "Developed image-based STEM reasoning questions for Project Lumiere.", "Reviewed professional work-experience documents for Project Parchment."],
    icon: Sparkles,
    gradient: "from-lime-400 to-green-500",
    bgGradient: "from-lime-400/20 to-green-500/20"
  },
  {
    id: 3,
    company: "The Developers Arena",
    role: "Data Science Intern",
    duration: "Dec 2025 - Jun 2026",
    location: "Remote",
    type: "Internship",
    description: "Worked on data engineering and analysis alongside a full-time SDE role. Built an end-to-end Python ETL pipeline using the OpenWeatherMap API and SQLite, and explored five retail, healthcare, and finance datasets for business insights.",
    skills: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn", "Data Engineering"],
    achievements: ["Built an ETL pipeline integrating OpenWeatherMap data and storing processed records in SQLite.", "Analyzed five datasets across retail, healthcare, and finance using Pandas and Matplotlib/Seaborn.", "Created a CLI personal finance tracker in Python using OOP and robust file handling."],
    icon: TrendingUp,
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-400/20 to-blue-500/20"
  },
  {
    id: 4,
    company: "Windlas Biotech Limited",
    role: "Apprentice - CRM & Order Management",
    duration: "Oct 2025 - Nov 2025",
    location: "Dehradun, Uttarakhand, India - On-site",
    type: "Apprenticeship",
    description: "Managed the sales and purchase order pipeline in the CRM system for a nutraceutical product line covering supplements and multivitamins. Maintained inventory and batch records, checking stock against production needs to support accurate planning.",
    skills: ["Customer Relationship Management (CRM)", "Inventory Management", "Order Management"],
    achievements: ["Managed sales and purchase orders in the CRM system.", "Maintained inventory and batch records for supplements and multivitamins.", "Cross-checked stock against production requirements to keep planning accurate."],
    icon: Briefcase,
    gradient: "from-green-400 to-lime-500",
    bgGradient: "from-green-400/20 to-lime-500/20"
  },
  {
    id: 5,
    company: "Pledgent Technologies Pvt. Ltd.",
    role: "React Developer Intern",
    duration: "Jun 2025 - Aug 2025",
    location: "Remote",
    type: "Internship",
    description: "Built component-based interfaces and managed application state with React, hooks, React Router, and Redux Toolkit. Integrated Firebase authentication, Firestore, and Realtime Database, then tested and deployed projects.",
    skills: ["React.js", "Tailwind CSS", "Redux Toolkit", "Firebase", "Jest", "React Testing Library"],
    achievements: ["Built reusable UI components and managed global state with Redux Toolkit.", "Integrated Firebase authentication, Firestore, and Realtime Database.", "Tested with Jest and React Testing Library and deployed projects on Netlify and Vercel."],
    icon: Code,
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-400/20 to-pink-500/20"
  },
  {
    id: 6,
    company: "Graphic Era Deemed to be University",
    role: "SDE Intern",
    duration: "Apr 2024 - Jul 2024",
    location: "Dehradun, India",
    type: "Internship",
    description: "Collaborated with the development team to analyze software requirements and streamline internal workflows. Maintained technical documentation and organized project data, and took part in code reviews and debugging sessions to improve application stability.",
    skills: ["HTML", "CSS", "Documentation", "Code Review", "Debugging"],
    achievements: ["Supported software requirements analysis and improvements to internal workflows.", "Maintained technical documentation and organized project data.", "Participated in code reviews and debugging to improve application stability."],
    icon: Users,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-400/20 to-red-500/20"
  },
  {
    id: 7,
    company: "Graphic Era Hill University",
    role: "Volunteer",
    duration: "Jan 2024 - May 2025",
    location: "Dehradun, India",
    type: "Volunteer",
    description: "Coordinated university-level hackathons and cultural festivals, managing logistics for 200+ participants. Served as a liaison between student committees and faculty, and mentored junior students on campus resources and peer-to-peer technical learning.",
    skills: ["Public Speaking", "Team Leadership", "Event Coordination", "Mentoring"],
    achievements: ["Managed event logistics for university hackathons and cultural festivals with 200+ participants.", "Connected student committees and faculty to coordinate events.", "Mentored junior students on campus resources and technical learning."],
    icon: Users,
    gradient: "from-rose-400 to-orange-500",
    bgGradient: "from-rose-400/20 to-orange-500/20"
  }
];

export default function Experience() {
  const { colors } = useTheme();
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const selectedExperience = experiences.find((experience) => experience.id === selectedId);

  return (
    <section className="py-8 md:py-10 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-9"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Building className="w-5 h-5 text-green-400" />
            <span className={`text-sm ${colors.textSecondary} font-medium`}>My Journey</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent leading-tight mb-3`}>
            Experience
          </h2>
          <p className={`text-base ${colors.textSecondary} max-w-2xl mx-auto`}>
            Select a role to see what I worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-4 md:gap-6 items-start">
          <div className={`rounded-2xl ${colors.surface} ${colors.border} border overflow-hidden`} role="group" aria-label="Choose an experience role">
            {experiences.map((experience, index) => {
              const isSelected = selectedId === experience.id;
              return (
                <motion.button
                  key={experience.id}
                  type="button"
                  onClick={() => setSelectedId(experience.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${index ? `border-t ${colors.border}` : ""} ${isSelected ? "bg-blue-500/10" : "hover:bg-white/5"}`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className={`shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center`}>
                    <experience.icon className="w-4 h-4 text-white" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold ${colors.text} truncate`}>{experience.role}</span>
                    <span className={`block text-xs ${colors.textMuted} truncate`}>{experience.company} - {experience.duration}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "text-blue-400 translate-x-0.5" : colors.textMuted}`} />
                </motion.button>
              );
            })}
          </div>

          <motion.article
            key={selectedExperience.id}
            className={`rounded-2xl p-5 md:p-6 ${colors.surface} ${colors.border} border relative overflow-hidden`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            aria-live="polite"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${selectedExperience.gradient}`} />
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${colors.textMuted} mb-2`}>
                  <Calendar className="w-3.5 h-3.5" /> {selectedExperience.duration}
                </span>
                <h3 className={`text-xl md:text-2xl font-bold ${colors.text}`}>{selectedExperience.role}</h3>
                <p className={`text-sm ${colors.textSecondary} mt-1`}>{selectedExperience.company}</p>
              </div>
              <span className={`px-2.5 py-1 text-xs font-semibold bg-gradient-to-r ${selectedExperience.gradient} text-white rounded-full`}>
                {selectedExperience.type}
              </span>
            </div>
            <p className={`flex items-center gap-1.5 text-xs ${colors.textMuted} mb-4`}>
              <MapPin className="w-3.5 h-3.5 shrink-0" /> {selectedExperience.location}
            </p>
            <p className={`text-sm ${colors.textSecondary} leading-relaxed mb-5`}>
              {selectedExperience.description}
            </p>
            <div className="mb-5">
              <h4 className={`text-xs uppercase tracking-wider font-bold ${colors.textMuted} mb-2`}>Focus areas</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedExperience.skills.map((skill) => (
                  <span key={skill} className={`px-2.5 py-1 text-xs ${colors.surface} ${colors.textSecondary} rounded-lg ${colors.border} border`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`text-xs uppercase tracking-wider font-bold ${colors.textMuted} mb-2`}>Highlights</h4>
              <ul className="space-y-2">
                {selectedExperience.achievements.map((achievement) => (
                  <li key={achievement} className={`flex items-start gap-2 text-sm ${colors.textSecondary}`}>
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
