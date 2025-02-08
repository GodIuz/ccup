
const iOS = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-6">iOS App</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover our powerful iOS app designed specifically for Apple devices.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Native Experience</h3>
          <p className="text-muted-foreground">
            Optimized for iOS devices with native UI components and smooth animations.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Secure</h3>
          <p className="text-muted-foreground">
            Built with Apple's latest security features and privacy guidelines.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Offline Support</h3>
          <p className="text-muted-foreground">
            Access your data even without an internet connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default iOS;
