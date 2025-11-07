import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-foreground">
              Insightful <span className="text-secondary">AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through intelligent AI automation and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-secondary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-secondary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-secondary">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Website Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">AI Chatbots</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Voice Agents</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">WhatsApp AI</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:InsightfulAI01@outlook.com" className="hover:text-secondary transition-colors">
                  InsightfulAI01@outlook.com
                </a>
              </div>
            </div>
            <Button 
              className="mt-4 bg-gradient-accent hover:shadow-glow transition-all duration-300"
              onClick={() => window.open('https://tally.so/r/YOUR_FORM_ID', '_blank')}
            >
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Insightful AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;