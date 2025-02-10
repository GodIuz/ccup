
const HarmonyOS = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="relative">
        <span className="absolute -top-2 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </span>
        <h1 className="text-4xl font-bold mb-6">HarmonyOS App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Experience seamless integration across your Huawei ecosystem with our native HarmonyOS app.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Super Device</h3>
            <p className="text-muted-foreground">
              Seamless collaboration between all your HarmonyOS devices.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Service Widgets</h3>
            <p className="text-muted-foreground">
              Quick access to key features through native Service Cards.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Multi-device Flow</h3>
            <p className="text-muted-foreground">
              Continuous experience across your entire device ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarmonyOS;
