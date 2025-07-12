import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Tag, Award, Users, Code, Zap } from "lucide-react";
import { SiPython, SiJavascript, SiAmazonwebservices } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const achievements = [
  {
    title: "Technical Excellence",
    description: "Participated in various hackathons and coding contests, attended national level workshops",
    icon: Code,
    color: "amber",
  },
  {
    title: "Sports Achievement",
    description: "Runner-up in Kabaddi at Umang 2K22, Active participant in interdepartmental sports events",
    icon: Trophy,
    color: "emerald",
  },
  {
    title: "Project Development",
    description: "Worked in multiple internship programs, Developed real-time applications using versatile technologies",
    icon: Zap,
    color: "blue",
  },
];

const certifications = [
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    date: "Dec 2023",
    icon: SiPython,
    color: "blue",
  },
  {
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    date: "May 2024",
    icon: FaJava,
    color: "orange",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Infosys Springboard",
    date: "April 2025",
    icon: SiJavascript,
    color: "amber",
  },
  {
    title: "Developing Soft Skills and Personality",
    issuer: "NPTEL",
    date: "Aug - Oct 2024",
    icon: Users,
    color: "purple",
  },
  {
    title: "DevOps and AWS training program",
    issuer: "MSSQUARED GLOBAL",
    date: "July 2025",
    icon: SiAmazonwebservices,
    color: "emerald",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-amber-emerald">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-400 flex items-center">
              <Trophy className="mr-2 h-6 w-6" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`bg-gradient-card border-slate-700 hover:border-${achievement.color}-400 transition-all duration-300`}
                  >
                    <CardContent className="p-4 flex items-start space-x-4">
                      <achievement.icon
                        className={`text-2xl text-${achievement.color}-400 mt-1 h-6 w-6 flex-shrink-0`}
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <p className="text-slate-300 text-sm">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-emerald-400 flex items-center">
              <Tag className="mr-2 h-6 w-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`bg-gradient-card border-slate-700 hover:border-${cert.color}-400 transition-all duration-300`}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <cert.icon
                        className={`text-2xl text-${cert.color}-400 h-8 w-8 flex-shrink-0`}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-slate-400 text-sm">{cert.issuer} ({cert.date})</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
