import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Vote, Film, Target } from "lucide-react";

const projects = [
  {
    title: "SecureVote",
    description: "Blockchain-based voting system for college elections using React.js, Node.js, and Ethereum smart contracts with Truffle and MetaMask integration.",
    icon: Vote,
    color: "blue",
    technologies: ["React", "Node.js", "Blockchain"],
    githubUrl: "https://github.com/Ajay190504/SecureVote",
    liveUrl: "#",
  },
  {
    title: "Movie Search App",
    description: "Movie search application with streaming metadata and real-time information fetched from OMDb API. Built with modern web technologies.",
    icon: Film,
    color: "emerald",
    technologies: ["React", "API", "JavaScript"],
    githubUrl: "https://github.com/Ajay190504/Movie-Search-App",
    liveUrl: "#",
  },
  {
    title: "FocusFlow",
    description: "Chrome extension for improving focus and productivity with daily goal setting and motivational features to enhance user engagement.",
    icon: Target,
    color: "purple",
    technologies: ["Chrome Extension", "JavaScript", "Productivity"],
    githubUrl: "https://github.com/Ajay190504/FocusFlow",
    liveUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative z-10 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue-purple">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-card border-slate-700 hover:border-${project.color}-400 transition-all duration-300 transform hover:scale-105 group overflow-hidden`}
              >
                <div
                  className={`h-48 bg-gradient-to-br from-${project.color}-500/20 to-${project.color}-600/20 flex items-center justify-center`}
                >
                  <project.icon
                    className={`text-6xl text-${project.color}-400 group-hover:scale-110 transition-transform duration-300 h-16 w-16`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-2 text-${project.color}-400`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={`bg-${
                          techIndex === 0
                            ? "blue"
                            : techIndex === 1
                            ? "emerald"
                            : "purple"
                        }-500/20 text-${
                          techIndex === 0
                            ? "blue"
                            : techIndex === 1
                            ? "emerald"
                            : "purple"
                        }-400 text-xs`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="link"
                      className="text-blue-400 hover:text-blue-300 p-0"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-1 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="link"
                      className="text-emerald-400 hover:text-emerald-300 p-0"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </Button>
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
