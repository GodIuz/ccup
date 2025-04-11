
import { ChartBar, DollarSign, Building, LineChart, ShieldCheck, Database, Layers, Briefcase, Zap, Cloud, Users, Lock, Bell, FileText, Clock, Award, CreditCard } from "lucide-react";
import { FeatureType } from "./types";

export const features: FeatureType[] = [
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
