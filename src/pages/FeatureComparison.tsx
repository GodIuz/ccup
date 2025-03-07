
import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";

const FeatureComparison = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "Basic plan for individuals and small teams just getting started",
      features: {
        basic: ["Basic financial tracking", "Simple analytics dashboard", "Up to 3 team members", "Monthly reports"],
        advanced: ["Email support", "Community access"],
        enterprise: [],
      },
      cta: "Get Started",
      popular: false,
      color: "bg-slate-100",
    },
    {
      title: "Basic",
      price: "$29",
      monthlyPrice: "$29",
      yearlyPrice: "$290",
      description: "Perfect for growing businesses with advanced needs",
      features: {
        basic: ["Advanced financial tracking", "Custom analytics dashboard", "Up to 10 team members", "Weekly reports"],
        advanced: ["Priority email support", "API access", "Data export", "Custom reports"],
        enterprise: [],
      },
      cta: "Upgrade Now",
      popular: true,
      color: "bg-[#E5DEFF]",
    },
    {
      title: "Pro",
      price: "$99",
      monthlyPrice: "$99",
      yearlyPrice: "$990",
      description: "Enterprise-grade solutions for established organizations",
      features: {
        basic: ["Everything in Basic", "AI-powered financial forecasting", "Unlimited team members", "Daily reports & insights"],
        advanced: ["24/7 priority support", "Advanced API access", "Custom integrations", "Dedicated account manager"],
        enterprise: ["Custom AI recommendations", "White-labeling", "Enterprise SLA", "Compliance reporting"],
      },
      cta: "Contact Sales",
      popular: false,
      color: "bg-[#F1F0FB]",
    },
  ];

  const featureCategories = [
    {
      name: "Core Features",
      id: "basic",
    },
    {
      name: "Advanced Features",
      id: "advanced",
    },
    {
      name: "Enterprise Features",
      id: "enterprise",
    },
  ];

  useEffect(() => {
    // Add fade-in animation for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out feature-card">
          <h1 className="text-4xl font-bold mb-6 text-[#0FA0CE]">Compare Features</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect plan with the features that match your business needs.
            All plans include our core platform with varying levels of advanced functionality.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="max-w-5xl mx-auto mb-12">
          <Tabs defaultValue="monthly" className="flex flex-col items-center">
            <TabsList className="mb-8">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="yearly">Yearly Billing (Save 15%)</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="w-full">
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <PlanCard 
                    key={`monthly-${index}`} 
                    plan={plan} 
                    price={plan.monthlyPrice}
                    featureCategories={featureCategories}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="w-full">
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <PlanCard 
                    key={`yearly-${index}`} 
                    plan={plan} 
                    price={plan.yearlyPrice}
                    featureCategories={featureCategories}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto mt-16 opacity-0 translate-y-8 transition-all duration-700 ease-out feature-card">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#0FA0CE]">
            Detailed Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-medium w-1/3">Feature</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="px-4 py-3 text-center font-medium">
                      {plan.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((category) => (
                  <React.Fragment key={category.id}>
                    <tr className="bg-muted border-b">
                      <td colSpan={4} className="px-4 py-3 font-semibold text-[#0FA0CE]">
                        {category.name}
                      </td>
                    </tr>
                    {/* Generate rows for each feature in this category */}
                    {getUniqueFeatures(plans, category.id).map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b">
                        <td className="px-4 py-3 text-left">{feature}</td>
                        {plans.map((plan, planIndex) => (
                          <td key={planIndex} className="px-4 py-3 text-center">
                            {plan.features[category.id].includes(feature as string) ? (
                              <Check className="h-5 w-5 text-[#0FA0CE] mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-16 p-8 bg-[#F1F0FB] rounded-xl opacity-0 translate-y-8 transition-all duration-700 ease-out feature-card">
          <h2 className="text-2xl font-bold mb-4 text-[#0FA0CE]">Need Help Choosing?</h2>
          <p className="mb-6 text-muted-foreground">
            Our team is ready to help you find the perfect plan for your business needs.
            Book a free consultation with our product specialists.
          </p>
          <Button onClick={() => window.open('https://calendly.com', '_blank')} className="bg-[#0FA0CE] hover:bg-[#1EAEDB]">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get unique features across all plans for a category
const getUniqueFeatures = (plans: any[], categoryId: string): string[] => {
  const allFeatures = plans.flatMap(plan => plan.features[categoryId]);
  return [...new Set(allFeatures)];
};

// Plan Card Component
interface PlanCardProps {
  plan: {
    title: string;
    description: string;
    popular: boolean;
    color: string;
    features: {
      [key: string]: string[];
    };
    cta: string;
  };
  price: string;
  featureCategories: {
    name: string;
    id: string;
  }[];
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, price, featureCategories }) => (
  <Card className={`feature-card opacity-0 translate-y-8 transition-all duration-700 ease-out 
                   ${plan.popular ? 'border-2 border-[#0FA0CE] shadow-lg' : 'border'} 
                   ${plan.color}`}>
    {plan.popular && (
      <div className="absolute top-0 right-0 bg-[#0FA0CE] text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium">
        Popular
      </div>
    )}
    <CardHeader>
      <CardTitle className="flex justify-between items-baseline">
        <span>{plan.title}</span>
        <span className="text-3xl font-bold">{price}</span>
      </CardTitle>
      <p className="text-muted-foreground">{plan.description}</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        {featureCategories.map((category) => (
          plan.features[category.id].length > 0 ? (
            <div key={category.id} className="space-y-2">
              <h4 className="font-semibold text-sm text-[#0FA0CE]">{category.name}</h4>
              <ul className="space-y-2">
                {plan.features[category.id].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#0FA0CE] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        ))}
      </div>
      <Button 
        className="w-full mt-8 bg-[#0FA0CE] hover:bg-[#1EAEDB]"
        onClick={() => window.open('https://google.com', '_blank')}
      >
        {plan.cta}
      </Button>
    </CardContent>
  </Card>
);

export default FeatureComparison;
