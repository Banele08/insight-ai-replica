import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceDetailDialog from "@/components/ui/service-detail-dialog";
import { 
  Globe, 
  Bot, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Professional Website Development",
      description: "Build a website that works as hard as you do. Get a stunning, fast, and professional website in as little as a week.",
      features: ["Custom Design", "WordPress/Shopify/Odoo", "SEO Optimized", "Fast Delivery"],
      gradient: "bg-gradient-to-br from-secondary/20 to-secondary/5",
      details: {
        title: "Professional Website Development",
        headline: "Build a Website That Works as Hard as You Do",
        problem: "In today's world, not having a website means missing out on customers. We give startups and growing businesses a powerful digital home that makes you look professional and helps you grow.",
        benefits: [
          "A Professional Online Presence: Impress visitors from the moment they arrive.",
          "Generate More Leads: Easy-to-use contact forms and clear calls-to-action turn visitors into customers.",
          "Built for Success: Your site will be fast, secure, and optimized for Google from day one."
        ],
        expertise: [
          "Brochure Websites: Perfect for telling your story and showcasing your services.",
          "E-commerce Stores: Ready to sell products and accept payments online."
        ],
        package: [
          "Custom Design & Development: We don't use generic templates. Your site is built to represent your brand uniquely.",
          "Your Choice of Technology: We use the right tool for the job, whether it's WordPress, Shopify, Odoo, or custom code.",
          "Flexible Launch & Hosting: Prefer to manage it yourself? No problem. Want us to handle everything? We've got you covered.",
          "Ongoing Peace of Mind: Optional monthly maintenance keeps your site updated, secure, and running smoothly."
        ],
        whyChoose: "Speed & Quality. We deliver a professional-grade website in a fraction of the time—often within a week.",
        cta: "Get Your Free Consultation"
      }
    },
    {
      icon: Zap,
      title: "AI Automation Services",
      description: "Automate the repetitive. Focus on the remarkable. Stop wasting hours on manual tasks with intelligent automation solutions.",
      features: ["Lead Management", "Internal Support", "Customer Support", "Tool Integration"],
      gradient: "bg-gradient-to-br from-accent/20 to-accent/5",
      details: {
        title: "AI Automation Services",
        headline: "Automate the Repetitive. Focus on the Remarkable.",
        problem: "Stop wasting precious hours on manual, repetitive tasks. Our AI solutions handle the busywork so you and your team can focus on strategy, creativity, and growth.",
        benefits: [
          "Lead Management: Automatically qualify leads from your website and add them directly to your CRM (like Salesforce).",
          "Internal Support: Build smart chatbots that help your team instantly find company documents and answers in tools like Slack.",
          "Customer Support: Automate first-line support inquiries, freeing up your team for complex issues."
        ],
        features: [
          "Connect the tools you already use: Google Sheets, Slack, Zapier, Salesforce, Trello, WhatsApp, and more.",
          "Seamless integration with your existing workflow",
          "Custom automation tailored to your business needs"
        ],
        outcome: "Increased productivity, fewer errors, and a team that can focus on high-impact work.",
        cta: "Discover What You Can Automate"
      }
    },
    {
      icon: MessageSquare,
      title: "24/7 WhatsApp Personal Assistant",
      description: "Your business, always open. Always helping. Never miss a lead with an AI assistant that works while you sleep.",
      features: ["Answer FAQs", "Order Status", "Admin Tasks", "Smart Escalation"],
      gradient: "bg-gradient-to-br from-primary/20 to-primary/5",
      details: {
        title: "24/7 WhatsApp Personal Assistant Chatbot",
        headline: "Your Business, Always Open. Always Helping.",
        problem: "Customers expect instant answers, even after hours. Never miss a lead or leave a query unanswered with an AI assistant that works while you sleep.",
        benefits: [
          "Answer FAQs: Instantly respond to common questions about pricing, services, or business hours.",
          "Provide Order Status: Let customers check their order delivery status without human intervention.",
          "Perform Admin Tasks: Help employees find files like business profiles or terms & conditions."
        ],
        features: [
          "We train your chatbot on your specific business data—your website content, PDFs, and company documents—so it provides accurate, relevant answers.",
          "Seamless Handoff: If a question is too complex, the conversation is instantly escalated to a human via email, Slack, or WhatsApp, ensuring your customer always gets the help they need."
        ],
        cta: "Learn About Our WhatsApp Solutions"
      }
    },
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Sound professional on every call. Automatically. Provide a professional, human-like first point of contact for every caller.",
      features: ["Customer Support", "Appointment Booking", "Human-Like Voices", "Smart Transfer"],
      gradient: "bg-gradient-to-br from-secondary/30 to-secondary/10",
      details: {
        title: "AI Voice Agents",
        headline: "Sound Professional on Every Call. Automatically.",
        problem: "Missed calls and busy signals cost you business. Our AI Voice Agents provide a professional, human-like first point of contact, ensuring every call is answered and handled efficiently.",
        benefits: [
          "Customer Support Calls: Handle common support inquiries.",
          "Booking Appointments: Let customers book meetings directly by integrating with your Google Calendar."
        ],
        features: [
          "Human-Like Voices: Choose between natural-sounding male or female voices (English).",
          "Smart Escalation: If the AI can't understand a request, it will smoothly transfer the call to a live person (you or your team).",
          "Customizable: Need other languages? We can build that as a custom solution."
        ],
        outcome: "Never miss a lead from a phone call again, and provide a consistently excellent customer experience.",
        cta: "Schedule a Voice Demo"
      }
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
            Our <span className="text-secondary">Core Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From websites to AI automation, we provide everything you need to establish your digital presence 
            and engage customers 24/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  onClick={() => {
                    setSelectedService(service.details);
                    setDialogOpen(true);
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Detail Dialog */}
        {selectedService && (
          <ServiceDetailDialog 
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            service={selectedService}
          />
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;