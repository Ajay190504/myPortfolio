import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Ajay190504",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/ajay-waghmare-79a53933a",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:ajaywaghmare190504@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900/90 border-t border-slate-800 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Ajay Waghmare</h3>
            <p className="text-slate-400">
              Full Stack & DevOps Developer passionate about creating innovative solutions and
              learning new technologies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Ajay Waghmare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
