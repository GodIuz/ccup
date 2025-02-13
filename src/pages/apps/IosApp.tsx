import { useEffect } from "react";

export const IosApp = () => {
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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
          <span className="absolute -top-2 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Coming Soon
          </span>
          <h1 className="text-4xl font-bold mb-6">iOS App</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience seamless financial management on your iPhone and iPad with our native iOS application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Native Experience</h3>
            <p className="text-muted-foreground">
              Perfectly optimized for iOS with smooth animations and intuitive gestures. Designed following Apple's Human Interface Guidelines.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Secure</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with Face ID/Touch ID integration, ensuring your financial data stays protected.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Offline Support</h3>
            <p className="text-muted-foreground">
              Full functionality even without internet connection, with automatic sync when you're back online.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">iOS-Specific Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Widget support for quick insights</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>iCloud sync across devices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Handoff support between iPhone and iPad</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Siri shortcuts integration</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Device Support</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>iPhone (iOS 15.0+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>iPad (iPadOS 15.0+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Mac (Apple Silicon)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
