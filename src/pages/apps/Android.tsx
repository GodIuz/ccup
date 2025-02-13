
import { useEffect } from "react";

export const Android = () => {
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
          <h1 className="text-4xl font-bold mb-6">Android App</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Take control of your business finances on the go with our powerful Android application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Material Design</h3>
            <p className="text-muted-foreground">
              Beautiful Material You design that adapts to your device's theme, providing a familiar Android experience.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cross-device Sync</h3>
            <p className="text-muted-foreground">
              Instant sync across all your Android devices and tablets, with seamless data transfer.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Smart Widgets</h3>
            <p className="text-muted-foreground">
              Quick insights with customizable home screen widgets and dynamic color support.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-animate>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Android-Specific Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Material You theming</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Quick Settings tile support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Google Assistant integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Android Auto support</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Requirements</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Android 8.0 (Oreo) and above</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Supports tablets and foldables</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Chrome OS compatibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
