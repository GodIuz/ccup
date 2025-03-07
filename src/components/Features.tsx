import { ChartBar, DollarSign, Building, ArrowRight, LineChart, ShieldCheck, Database, Layers, Briefcase, Zap, Cloud, Users, Lock, Bell, FileText, Clock, Award, CreditCard } from "lucide-react";
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
    icon: LineChart,
    title: "Predictive Forecasting",
    description:
      "AI-powered forecasting to predict future trends based on historical data patterns.",
    tooltip: "Machine learning algorithms for accurate business predictions",
    category: "Analysis",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Receive timely notifications for unusual patterns or critical business thresholds.",
    tooltip: "Customizable alert system for business metrics",
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
    icon: Database,
    title: "Secure Data Storage",
    description:
      "Enterprise-grade security for all your sensitive business data with automated backups.",
    tooltip: "End-to-end encryption and automatic data backups",
    category: "Finance",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Seamlessly connect with payment processors and banking systems for financial automation.",
    tooltip: "Multiple payment gateway integrations",
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
  {
    icon: ShieldCheck,
    title: "Compliance Management",
    description:
      "Stay compliant with regulations and industry standards with automated checks and alerts.",
    tooltip: "Automated compliance monitoring and reporting",
    category: "Intelligence",
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description:
      "Track and analyze your competitors' performance to stay ahead in the market.",
    tooltip: "Comprehensive market and competitor intelligence tools",
    category: "Intelligence",
  },
  {
    icon: Layers,
    title: "Multi-Platform Support",
    description:
      "Access your data and insights across all devices with our cloud-based platform.",
    tooltip: "Seamless experience across desktop, mobile, and tablet",
    category: "Additional",
  },
  {
    icon: Briefcase,
    title: "Team Collaboration",
    description:
      "Collaborate with your team in real-time with shared dashboards and reports.",
    tooltip: "Real-time collaboration tools for teams of all sizes",
    category: "Additional",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description:
      "Automate repetitive tasks and processes to save time and reduce errors.",
    tooltip: "Custom automation rules for business processes",
    category: "Additional",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade cloud hosting with 99.9% uptime guarantee for your business data.",
    tooltip: "Reliable and scalable cloud infrastructure",
    category: "Additional",
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description:
      "Multi-factor authentication and enterprise-grade security protocols to protect your data.",
    tooltip: "Best-in-class security measures for business applications",
    category: "Additional",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description:
      "Generate detailed, customizable reports on any aspect of your business performance.",
    tooltip: "Flexible reporting engine with export capabilities",
    category: "Additional",
  },
  {
    icon: Clock,
    title: "Time-Saving Tools",
    description:
      "Streamline workflows and reduce manual tasks with intelligent automation.",
    tooltip: "Efficiency-focused tools designed for busy professionals",
    category: "Additional",
  },
  {
    icon: Award,
    title: "Industry Benchmarks",
    description:
      "Compare your performance against industry standards and top performers.",
    tooltip: "Comprehensive industry benchmarking database",
    category: "Additional",
  },
];

export const Features = () => {
  // Group features by category
  const analysisTooLs = features.filter(f => f.category === "Analysis");
  const financialSolutions = features.filter(f => f.category === "Finance");
  const businessTools = features.filter(f => f.category === "Intelligence");
  const additionalFeatures = features.filter(f => f.category === "Additional");

  return (
    <section className="py-24 bg-[#f5f9fc]" role="region" aria-label="Features">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0FA0CE]">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tools to help you monitor, analyze, and transform your company's financial health and performance.
          </p>
        </div>

        {/* Feature Categories Header */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-4">
          {["Analysis Tools", "Financial Solutions", "Business Tools"].map((header) => (
            <div key={header} className="text-sm font-medium text-[#0FA0CE] pb-2">
              {header}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Analysis Tools Column */}
          <div className="space-y-6">
            {analysisTooLs.map((feature, index) => (
              <FeatureCard key={`analysis-${index}`} feature={feature} />
            ))}
          </div>
          
          {/* Financial Solutions Column */}
          <div className="space-y-6">
            {financialSolutions.map((feature, index) => (
              <FeatureCard key={`finance-${index}`} feature={feature} />
            ))}
          </div>
          
          {/* Business Tools Column */}
          <div className="space-y-6">
            {businessTools.map((feature, index) => (
              <FeatureCard key={`intelligence-${index}`} feature={feature} />
            ))}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#0FA0CE]">
            Additional Premium Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <FeatureCard key={`additional-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ feature }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="p-6 rounded-xl bg-white hover:shadow-md transition-all duration-300 
                   border border-gray-100
                   focus:outline-none focus:ring-1 focus:ring-[#0FA0CE] 
                   cursor-pointer"
          role="button"
          tabIndex={0}
        >
          <feature.icon className="h-10 w-10 text-[#0FA0CE] mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
          
          <Button
            variant="link"
            className="text-[#0FA0CE] p-0 hover:text-[#1EAEDB] text-sm flex items-center"
          >
            Learn more
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{feature.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
