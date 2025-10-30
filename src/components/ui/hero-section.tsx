import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, MessageSquare, Globe, Server, Code } from "lucide-react";
import logoImage from "@/assets/insightful-ai-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with logo */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${logoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Solutions</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empower Your Business with
              <span className="text-secondary block">Digital Excellence</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              We provide cutting-edge solutions to establish your online presence, automate operations, and engage customers 24/7.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-card text-lg px-8 py-4 h-auto font-medium"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </Button>
            </div>

            {/* Features highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Globe className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Website Development</h3>
                  <p className="text-sm">Get a stunning, fast, and professional website in as little as a week. Go from zero to online, fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI Automation</h3>
                  <p className="text-sm">Reclaim your time. We automate repetitive tasks in your sales, support, and operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MessageSquare className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp Assistant</h3>
                  <p className="text-sm">Offer instant support, day or night. Let a smart chatbot answer queries and book appointments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Bot className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI Voice Agents</h3>
                  <p className="text-sm">Sound professional always. Use a human-like voice agent to handle customer calls and scheduling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;