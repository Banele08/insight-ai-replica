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
      title: "Unmatched Speed",
      description: "We deliver professional websites in as little as 7 days. Speed without compromising quality."
    },
    {
      icon: Target,
      title: "No-Lock-In Flexibility",
      description: "You have the freedom to manage your own hosting, or we can do it for you. Your choice, always."
    },
    {
      icon: Users,
      title: "Ongoing Partnership",
      description: "Our monthly support and maintenance plans ensure your digital tools are always up-to-date and secure."
    },
    {
      icon: Trophy,
      title: "Clear Process",
      description: "From Consultation to Launch & Support, you're guided every step of the way with transparency."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy-light to-background">
      <div className="container mx-auto px-4">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Unique Value
            <span className="text-secondary block">Proposition</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another digital agency. Here's what makes us different.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-secondary/50 bg-gradient-to-br from-card/80 to-card/40 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-secondary">Clear Process</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            From consultation to launch and support, you're guided every step of the way
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in">
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
    </section>
  );
};

export default AboutSection;