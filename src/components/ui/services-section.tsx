import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Bot, 
  MessageSquare, 
  Zap, 
  Phone, 
  Settings,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technology and optimized for performance.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Mobile-First"],
      gradient: "bg-gradient-to-br from-secondary/20 to-secondary/5"
    },
    {
      icon: Zap,
      title: "AI Automation Services",
      description: "Streamline your business processes with intelligent automation solutions that save time and reduce costs.",
      features: ["Process Automation", "Workflow Optimization", "Data Processing", "Task Scheduling"],
      gradient: "bg-gradient-to-br from-accent/20 to-accent/5"
    },
    {
      icon: Bot,
      title: "AI Chatbots & Voice Agents",
      description: "Intelligent conversational AI that handles customer inquiries and provides 24/7 support.",
      features: ["Natural Language", "Multi-Platform", "Learning Capability", "Custom Training"],
      gradient: "bg-gradient-to-br from-primary/20 to-primary/5"
    },
    {
      icon: MessageSquare,
      title: "24/7 WhatsApp Customer Chatbots",
      description: "Automated WhatsApp assistants that provide instant customer support and lead qualification.",
      features: ["Instant Responses", "Lead Qualification", "Order Processing", "Support Tickets"],
      gradient: "bg-gradient-to-br from-secondary/30 to-secondary/10"
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Advanced voice AI that handles calls, appointments, and customer interactions naturally.",
      features: ["Natural Speech", "Appointment Booking", "Call Routing", "Voice Recognition"],
      gradient: "bg-gradient-to-br from-accent/30 to-accent/10"
    },
    {
      icon: Settings,
      title: "AI Automation Tools for Businesses",
      description: "Custom AI tools designed specifically for your business needs and industry requirements.",
      features: ["Custom Solutions", "Industry-Specific", "Scalable Architecture", "Integration Ready"],
      gradient: "bg-gradient-to-br from-primary/30 to-primary/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-navy-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our AI Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative AI Solutions for <span className="text-secondary">Your Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our core AI services and see how we transform businesses with cutting-edge 
            technology and intelligent automation solutions that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-secondary/50 ${service.gradient} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-secondary group-hover:text-foreground group-hover:border-secondary transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold"
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;