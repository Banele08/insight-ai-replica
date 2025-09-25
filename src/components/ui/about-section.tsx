import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Users, 
  Trophy,
  ArrowRight,
  Star
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "5680+", label: "AI Automation Tools Available", icon: Brain },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "AI Support Available", icon: Target },
    { number: "7+", label: "Industries Served", icon: Users }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We leverage the latest AI technologies to create solutions that push the boundaries of what's possible."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every AI solution we build is designed with measurable outcomes and business growth in mind."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: Trophy,
      title: "Quality Excellence",
      description: "We maintain the highest standards in AI development, ensuring robust and reliable solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy-light to-background">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">About Insightful AI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Business Through
              <span className="text-secondary block">Intelligent AI</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We are a team of AI specialists, developers, and innovators dedicated to helping businesses 
              harness the power of artificial intelligence. From custom chatbots to comprehensive automation 
              solutions, we build AI that works for you.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make advanced AI technology accessible to businesses of all sizes, 
              enabling them to automate processes, enhance customer experiences, and drive growth 
              through intelligent solutions.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-secondary/20">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-secondary">Core Values</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Insightful AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-secondary/50 bg-gradient-to-br from-card/80 to-card/40 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <value.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;