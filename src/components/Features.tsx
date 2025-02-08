
import { ChartBar, DollarSign, Building } from "lucide-react";

const features = [
  {
    icon: ChartBar,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your company's performance with our comprehensive analytics tools.",
  },
  {
    icon: DollarSign,
    title: "Financial Tracking",
    description:
      "Monitor cash flow, revenue, and expenses in real-time with automated tracking.",
  },
  {
    icon: Building,
    title: "Business Intelligence",
    description:
      "Make informed decisions with AI-powered business intelligence and forecasting.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools to help you monitor, analyze, and improve your company's financial health.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
