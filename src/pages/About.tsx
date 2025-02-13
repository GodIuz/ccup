
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
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

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
            <h1 className="text-4xl md:text-6xl font-bold">Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              We're revolutionizing how businesses understand and manage their finances through AI-powered insights.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of financial technology with cutting-edge AI solutions.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                Building trust through clear, honest, and open communication.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p className="text-muted-foreground">
                Protecting your financial data with enterprise-grade security measures.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="space-y-6 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2024, Company Check-Up emerged from a simple observation: businesses needed a better way to understand and manage their finances. Our team of financial experts and AI specialists came together to create a solution that makes financial management accessible and actionable for businesses of all sizes.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we serve thousands of businesses worldwide, helping them make data-driven decisions and achieve their financial goals through our innovative platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
