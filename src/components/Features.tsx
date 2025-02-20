
import { ChartBar, DollarSign, Building, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const features = [
  {
    icon: ChartBar,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your company's performance with our comprehensive analytics tools.",
    tooltip: "Real-time data visualization and analysis tools",
    category: "Analysis",
  },
  {
    icon: DollarSign,
    title: "Financial Tracking",
    description:
      "Monitor cash flow, revenue, and expenses in real-time with automated tracking.",
    tooltip: "Automated financial monitoring and reporting",
    category: "Finance",
  },
  {
    icon: Building,
    title: "Business Intelligence",
    description:
      "Make informed decisions with AI-powered business intelligence and forecasting.",
    tooltip: "AI-powered business insights and predictions",
    category: "Intelligence",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white" role="region" aria-label="Features">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0FA0CE]">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools to help you monitor, analyze, and improve your company's financial health.
          </p>
        </div>

        {/* Excel-like grid header */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-4">
          {["Analysis Tools", "Financial Solutions", "Business Tools"].map((header) => (
            <div key={header} className="text-sm font-medium text-[#0FA0CE] border-b border-[#0FA0CE]/20 pb-2">
              {header}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="p-6 rounded-xl bg-[#F3F6FC] hover:shadow-lg transition-all duration-300 
                             animate-fadeIn hover:scale-105 border border-[#0FA0CE]/10 
                             focus:outline-none focus:ring-2 focus:ring-[#0FA0CE] focus:ring-offset-2
                             cursor-pointer relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Excel-like selection overlay */}
                    <div className="absolute inset-0 border-2 border-[#0FA0CE] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    
                    <feature.icon className="h-12 w-12 text-[#0FA0CE] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[#0FA0CE]">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    <Button
                      variant="link"
                      className="text-[#0FA0CE] p-0 hover:text-[#1EAEDB] group/button flex items-center"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{feature.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};
