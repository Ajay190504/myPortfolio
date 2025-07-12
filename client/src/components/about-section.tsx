import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const educationTimeline = [
  {
    degree: "B.Tech CSE",
    institution: "N B Navale Sinhgad College of Engineering, Solapur",
    period: "2022–2026",
    grade: "CGPA: 9.11 (Till 4th Sem)",
    color: "blue",
  },
  {
    degree: "HSC",
    institution: "Maharashtra Secondary and Higher Secondary Vidyalaya, Barshi",
    period: "2022",
    grade: "66.33%",
    color: "purple",
  },
  {
    degree: "SSC",
    institution: "Sheth Agarchand Kunkulol Highschool, Barshi",
    period: "2020",
    grade: "92.60%",
    color: "amber",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue-purple">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Aspiring software developer with hands-on experience in fullstack development using
              React.js and Node.js. Skilled in Python, Java, and building interactive web apps.
              Passionate about real-world projects and collaborative work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-slate-700">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-400">9.11</div>
                  <div className="text-sm text-slate-400">Current CGPA</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-slate-700">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-emerald-400">5+</div>
                  <div className="text-sm text-slate-400">Projects Built</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Education Timeline</h3>
            <div className="space-y-6">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                      item.color === "blue"
                        ? "bg-blue-400"
                        : item.color === "purple"
                        ? "bg-purple-400"
                        : "bg-amber-400"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <Card className="bg-gradient-card border-slate-700 hover:border-blue-400 transition-colors duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg">{item.degree}</h4>
                        <p className="text-slate-400">{item.institution} ({item.period})</p>
                        <span
                          className={`inline-block px-2 py-1 rounded text-sm mt-2 ${
                            item.color === "blue"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : item.color === "purple"
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {item.grade}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
