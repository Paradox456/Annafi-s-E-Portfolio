import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Brain, Database, Cpu, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-cyan-500 to-teal-500",
      skills: ["React", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "UI/UX Implementation"]
    },
    {
      title: "Backend Development",
      icon: Code,
      color: "from-emerald-500 to-green-500",
      skills: ["Python", "Flask", "Node.js", "RESTful API Design", "Database Design"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      skills: ["Vulnerability Assessment", "Security Event Logging", "Anomaly Detection", "Encryption & Cryptography", "NIST/CIS Compliance"]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      color: "from-sky-500 to-blue-500",
      skills: ["TensorFlow", "Scikit-learn", "Data Visualization", "Time-series Forecasting", "Anomaly Detection"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-teal-600 to-emerald-600",
      skills: ["PostgreSQL", "SQLite", "Database Optimization", "Data Modeling"]
    },
    {
      title: "Tools & Platforms",
      icon: Cpu,
      color: "from-cyan-600 to-blue-600",
      skills: ["Git & GitHub", "Docker", "AWS", "Linux/Unix"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg">Expertise across multiple domains</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="h-full bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-teal-500/50 transition-all duration-300 shadow-xl hover:shadow-teal-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}