
export const Android = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </span>
        <h1 className="text-4xl font-bold mb-6">Android App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Take control of your business finances on the go with our powerful Android application.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Material Design</h3>
            <p className="text-muted-foreground">
              Beautiful Material You design for a familiar Android experience.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cross-device Sync</h3>
            <p className="text-muted-foreground">
              Instant sync across all your Android devices and tablets.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Smart Widgets</h3>
            <p className="text-muted-foreground">
              Quick insights with customizable home screen widgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
