
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white">
      <div className="container px-4 py-32 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Financial Intelligence for Modern Business
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Monitor Your Company's Financial Health with Precision
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time insights, track performance metrics, and make data-driven decisions to keep your business thriving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
