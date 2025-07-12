import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Layers, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "blue",
    skills: [
      { name: "Java", level: 90, color: "blue" },
      { name: "Python", level: 85, color: "emerald" },
      { name: "JavaScript", level: 88, color: "amber" },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "emerald",
    skills: [
      { name: "React.js", level: 92, color: "blue" },
      { name: "Node.js", level: 87, color: "emerald" },
      { name: "Express.js", level: 85, color: "purple" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    color: "purple",
    skills: [
      { name: "Git & GitHub", level: 80, color: "amber" },
      { name: "AWS", level: 75, color: "orange" },
      { name: "Jenkins", level: 78, color: "red" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-emerald-blue">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-card border-slate-700 hover:border-${category.color}-400 transition-all duration-300 transform hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon
                      className={`text-2xl text-${category.color}-400 mr-3 h-6 w-6`}
                    />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill.name}</span>
                          <span className={`text-sm text-${skill.color}-400`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-slate-700"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
