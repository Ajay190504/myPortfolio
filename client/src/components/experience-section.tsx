import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "DevOps Intern",
    company: "MSSQUARE GLOBAL",
    period: "Jun 2025 - Jul 2025",
    type: "Virtual",
    color: "purple",
    highlights: [
      "Implemented CI/CD concepts and version control using Git and Jenkins on AWS Cloud Services",
      "Collaborated with the team to understand deployment workflows and system monitoring",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "CodTech IT Solutions",
    period: "May 2025 - Jun 2025",
    type: "Virtual",
    color: "emerald",
    highlights: [
      "Completed a 4-week intensive internship focused on full-stack development using React.js",
      "Developed and deployed real-world web applications using the MERN stack",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple-emerald">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-card border-slate-700 hover:border-${experience.color}-400 transition-all duration-300 transform hover:scale-105`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold text-${experience.color}-400`}>
                        {experience.title}
                      </h3>
                      <p className="text-xl text-slate-300">{experience.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <Badge
                        variant="secondary"
                        className={`bg-${experience.color}-500/20 text-${experience.color}-400 mb-1`}
                      >
                        {experience.period}
                      </Badge>
                      <p className="text-slate-400 text-sm">{experience.type}</p>
                    </div>
                  </div>
                  <ul className="text-slate-300 space-y-2">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <ChevronRight
                          className={`text-${experience.color}-400 mr-2 mt-1 h-4 w-4 flex-shrink-0`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
