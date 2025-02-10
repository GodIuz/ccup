
export const IosApp = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </span>
        <h1 className="text-4xl font-bold mb-6">iOS App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Experience seamless financial management on your iPhone and iPad with our native iOS application.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Native Experience</h3>
            <p className="text-muted-foreground">
              Perfectly optimized for iOS with smooth animations and intuitive gestures.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Secure</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with Face ID/Touch ID integration.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Offline Support</h3>
            <p className="text-muted-foreground">
              Full functionality even without internet connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
