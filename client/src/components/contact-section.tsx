import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ajaywaghmare190504@gmail.com",
    href: "mailto:ajaywaghmare190504@gmail.com",
    color: "blue",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/Ajay190504",
    href: "https://github.com/Ajay190504",
    color: "purple",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/ajay-waghmare-79a53933a",
    href: "https://linkedin.com/in/ajay-waghmare-79a53933a",
    color: "emerald",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For static deployment, you can use Formspree, Netlify Forms, or similar
      // This is a placeholder - replace with your actual form service
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-emerald-blue">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-500 mx-auto"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-${info.color}-500/20 p-3 rounded-full`}>
                    <info.icon className={`text-${info.color}-400 text-xl h-6 w-6`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-${info.color}-400 hover:text-${info.color}-300 transition-colors`}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border-slate-700 focus:border-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border-slate-700 focus:border-blue-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800/50 border-slate-700 focus:border-blue-400 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-emerald-500/20 border border-emerald-400 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2 h-5 w-5" />
                  <span className="text-emerald-300">Message sent successfully!</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
