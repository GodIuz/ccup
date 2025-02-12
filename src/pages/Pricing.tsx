
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PricingTier = ({ title, price, features, isPopular = false, isPro = false }) => (
  <div 
    className={`p-8 rounded-2xl opacity-0 translate-y-8 transition-all duration-700 ease-out ${
      isPopular ? 'border-2 border-primary shadow-lg' : 'border'
    } bg-background`}
    data-pricing-tier
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-muted-foreground">/month</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-primary" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={isPro ? "default" : "outline"}>
      Get Started
    </Button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "0",
      features: [
        "Basic financial tracking",
        "Simple analytics dashboard",
        "Up to 3 team members",
        "Monthly reports",
        "Email support"
      ]
    },
    {
      title: "Basic",
      price: "29",
      features: [
        "Advanced financial tracking",
        "Custom analytics dashboard",
        "Up to 10 team members",
        "Weekly reports",
        "Priority email support",
        "API access"
      ],
      isPopular: true
    },
    {
      title: "Pro",
      price: "99",
      features: [
        "Everything in Basic",
        "AI-powered financial forecasting",
        "Unlimited team members",
        "Daily reports & insights",
        "24/7 priority support",
        "Custom AI recommendations",
        "Advanced API access"
      ],
      isPro: true
    }
  ];

  useEffect(() => {
    // Add smooth scrolling behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';

    // Create an intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    // Observe all pricing tiers
    document.querySelectorAll('[data-pricing-tier]').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-pricing-tier>
          <h1 className="text-4xl font-bold mb-6">Choose Your Growth Path</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan that aligns with your business goals. Upgrade or downgrade anytime as your needs evolve.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
