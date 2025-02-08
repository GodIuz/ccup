
const HarmonyOS = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-6">HarmonyOS App</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Our HarmonyOS app delivers a seamless experience across all Huawei devices.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Super Device</h3>
          <p className="text-muted-foreground">
            Take advantage of HarmonyOS Super Device features for seamless device collaboration.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Atomic Services</h3>
          <p className="text-muted-foreground">
            Quick access to features through HarmonyOS Service Widgets.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Cross-device Flow</h3>
          <p className="text-muted-foreground">
            Smooth experience across phones, tablets, and other HarmonyOS devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarmonyOS;
