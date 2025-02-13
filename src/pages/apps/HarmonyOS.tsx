
import { useEffect } from "react";

export const HarmonyOS = () => {
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
        <div className="relative" data-animate className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <span className="absolute -top-2 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Coming Soon
          </span>
          <h1 className="text-4xl font-bold mb-6">HarmonyOS App</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience seamless integration across your Huawei ecosystem with our native HarmonyOS app.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-animate className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Super Device</h3>
            <p className="text-muted-foreground">
              Seamless collaboration between all your HarmonyOS devices, from phones to tablets and watches.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Service Widgets</h3>
            <p className="text-muted-foreground">
              Quick access to key features through native Service Cards and Atomic Services integration.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Multi-device Flow</h3>
            <p className="text-muted-foreground">
              Continuous experience across your entire device ecosystem with Task Center support.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-12" data-animate className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">HarmonyOS Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Multi-device collaboration</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Atomic Services support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Task Center integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>System-level optimization</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Device Compatibility</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>HarmonyOS 2.0 and above</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Huawei phones and tablets</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Smart watches and IoT devices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
