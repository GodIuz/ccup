
const Android = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-6">Android App</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Experience our feature-rich Android app built for maximum flexibility.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Material Design</h3>
          <p className="text-muted-foreground">
            Following Google's Material Design guidelines for a familiar experience.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Cross-device Sync</h3>
          <p className="text-muted-foreground">
            Seamlessly sync your data across all your Android devices.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Widgets</h3>
          <p className="text-muted-foreground">
            Quick access to important information with home screen widgets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Android;
