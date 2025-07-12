import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import TypingAnimation from "@/components/typing-animation";

export default function HeroSection() {
  const handleResumeDownload = () => {
    // For static deployment, the resume should be in the public folder
    // You can either:
    // 1. Place the resume in client/public/ and use a direct link
    // 2. Use a cloud storage service like AWS S3, Google Drive, etc.
    
    // Option 1: Direct link to resume in public folder
    const resumeUrl = "/Ajay_Waghmare_Resume.pdf";
    
    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ajay_Waghmare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ajay Dattatraya Waghmare
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Developer | MERN Stack | DevOps | AWS
          </motion.div>

          <motion.div
            className="text-lg md:text-xl mb-12 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypingAnimation
              texts={[
                "React | Node | DevOps | MERN | AWS",
                "Full Stack Development",
                "Cloud Computing & DevOps",
                "Modern Web Technologies",
              ]}
              className="text-blue-400 font-mono"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleViewProjects}
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-2xl text-blue-400" />
      </motion.div>
    </section>
  );
}
