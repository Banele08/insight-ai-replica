import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ServiceDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: {
    title: string;
    headline: string;
    problem: string;
    benefits: string[];
    expertise?: string[];
    package?: string[];
    whyChoose?: string;
    outcome?: string;
    features?: string[];
    cta: string;
  };
}

const ServiceDetailDialog = ({ open, onOpenChange, service }: ServiceDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-2">{service.headline}</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {service.problem}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expertise */}
          {service.expertise && service.expertise.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Expertise:</h3>
              <div className="space-y-2">
                {service.expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package */}
          {service.package && service.package.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Full-Service Package Includes:</h3>
              <div className="space-y-3">
                {service.package.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          {service.outcome && (
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-semibold mb-3">The Outcome:</h3>
              <p className="text-muted-foreground">{service.outcome}</p>
            </div>
          )}

          {/* Why Choose */}
          {service.whyChoose && (
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
              <p className="text-muted-foreground">{service.whyChoose}</p>
            </div>
          )}

          {/* CTA */}
          <div className="pt-6 border-t">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 w-full text-lg font-semibold group"
            >
              {service.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
