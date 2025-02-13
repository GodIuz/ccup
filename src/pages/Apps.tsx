
const Apps = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Our Applications</h1>
            <p className="text-xl text-muted-foreground">
              Access your financial insights anywhere, anytime with our suite of mobile applications.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">iOS App</h3>
              <p className="text-muted-foreground mb-4">
                Optimized for iPhone and iPad, with native iOS features and intuitive gestures.
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Coming Soon
              </span>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Android App</h3>
              <p className="text-muted-foreground mb-4">
                Material You design with powerful features for Android devices.
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Coming Soon
              </span>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">HarmonyOS App</h3>
              <p className="text-muted-foreground mb-4">
                Native HarmonyOS experience with seamless ecosystem integration.
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Common Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Real-time Sync</h3>
                <p className="text-muted-foreground">
                  Your data stays synchronized across all your devices automatically.
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Offline Support</h3>
                <p className="text-muted-foreground">
                  Continue working even without an internet connection.
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Secure Authentication</h3>
                <p className="text-muted-foreground">
                  Biometric authentication and encrypted data storage.
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Push Notifications</h3>
                <p className="text-muted-foreground">
                  Stay updated with important financial alerts and reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
