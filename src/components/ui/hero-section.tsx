import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, MessageSquare } from "lucide-react";
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
              Insightful
              <span className="text-secondary block">AI Solutions</span>
              <span className="text-muted-foreground text-3xl md:text-4xl font-normal block mt-2">
                & Growth Automation
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              We build intelligent AI experiences and drive business growth through cutting-edge automation. 
              From AI chatbots and voice agents to custom automation tools, we transform your ideas into 
              results that elevate your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold group"
              >
                Start Your AI Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-card text-lg px-8 py-4 h-auto font-medium"
              >
                View Our AI Services
              </Button>
            </div>

            {/* Features highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Bot className="w-5 h-5 text-secondary" />
                <span>AI Chatbots</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <span>Voice Agents</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Zap className="w-5 h-5 text-secondary" />
                <span>Automation Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;