
import { useState, useEffect } from "react";
import { 
  ChartBar, 
  TrendingUp, 
  Users, 
  Search, 
  PackagePlus, 
  ArrowUpRight,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Stats } from "@/components/Stats";

// Sample analytical data
const analyticsData = [
  { metric: "User Growth", value: 127, previousValue: 98, unit: "%", trend: "up" },
  { metric: "Data Processed", value: 3.4, previousValue: 2.1, unit: "TB", trend: "up" },
  { metric: "Average Session", value: 8.2, previousValue: 5.4, unit: "min", trend: "up" },
  { metric: "ROI Improvement", value: 43, previousValue: 31, unit: "%", trend: "up" },
];

// Feature comparison data
const comparisonFeatures = [
  { feature: "Data Sources", competitors: 5, us: 15 },
  { feature: "Analytical Models", competitors: 8, us: 22 },
  { feature: "Reporting Options", competitors: 12, us: 30 },
  { feature: "Update Frequency", competitors: 4, us: 12 },
  { feature: "Integration APIs", competitors: 10, us: 25 },
];

const FeaturePage = () => {
  const [progress, setProgress] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState(
    analyticsData.map(item => ({ ...item, value: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateMetrics();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const animateMetrics = () => {
    analyticsData.forEach((item, index) => {
      let startValue = 0;
      const endValue = item.value;
      const duration = 1500;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const currentValue = startValue + progress * (endValue - startValue);
        
        setAnimatedMetrics(prev => {
          const updated = [...prev];
          updated[index] = { ...item, value: Number(currentValue.toFixed(1)) };
          return updated;
        });

        if (progress === 1) clearInterval(timer);
      }, 20);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0FA0CE] to-[#1EAEDB] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data-Driven Intelligence for Your Business
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Advanced analytics and insights that propel your business forward with actionable intelligence.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#0FA0CE] hover:bg-white/90 hover:text-[#0FA0CE] font-semibold"
          >
            Start Free Trial
          </Button>
          <div className="mt-10">
            <Progress value={progress} className="w-full max-w-md mx-auto h-2 bg-white/20" />
            <p className="mt-2 text-white/80 text-sm">Powering {progress}% of Fortune 500 analytics</p>
          </div>
        </div>
      </section>

      {/* Analytics Feature Cards */}
      <section className="py-20 bg-white" id="metrics-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0FA0CE]">
              Supercharge Your Analytics
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform delivers powerful insights that drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {animatedMetrics.map((item, index) => (
              <Card key={index} className="border-2 border-[#0FA0CE]/10 hover:border-[#0FA0CE]/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[#0FA0CE] flex items-center gap-2">
                    {index === 0 ? <TrendingUp className="h-5 w-5" /> : 
                     index === 1 ? <ChartBar className="h-5 w-5" /> :
                     index === 2 ? <Users className="h-5 w-5" /> :
                     <Search className="h-5 w-5" />}
                    {item.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{item.value}</span>
                    <span className="text-xl">{item.unit}</span>
                    <span className="text-green-500 flex items-center ml-auto">
                      +{((item.value - item.previousValue) / item.previousValue * 100).toFixed(0)}%
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">How We Compare</h3>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="grid grid-cols-3 gap-4 mb-4 font-semibold text-[#0FA0CE]">
                <div>Feature</div>
                <div className="text-center">Competition</div>
                <div className="text-center">Company Check-Up</div>
              </div>
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-3 border-t border-gray-200">
                  <div className="font-medium">{item.feature}</div>
                  <div className="text-center">{item.competitors}</div>
                  <div className="text-center font-semibold text-[#0FA0CE] flex items-center justify-center">
                    {item.us}
                    <CheckCircle className="h-4 w-4 ml-2 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0FA0CE]">
              Enterprise-Grade Analytics
            </h2>
            <p className="text-muted-foreground text-lg">
              Designed for businesses of all sizes with powerful features that scale with you.
            </p>
          </div>

          <Tabs defaultValue="collect" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="collect">Data Collection</TabsTrigger>
              <TabsTrigger value="analyze">Analysis Tools</TabsTrigger>
              <TabsTrigger value="visualize">Visualization</TabsTrigger>
            </TabsList>
            <TabsContent value="collect" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Data Collection</CardTitle>
                  <CardDescription>
                    Connect to over 100+ data sources with just a few clicks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Automatic data synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom API integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>CSV and Excel import/export</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Scheduled data refreshes</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="analyze" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Analysis</CardTitle>
                  <CardDescription>
                    Powerful tools to process and understand your data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>AI-powered trend detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Predictive analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom statistical models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Anomaly detection</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="visualize" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Beautiful Visualizations</CardTitle>
                  <CardDescription>
                    Turn complex data into clear, actionable insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Interactive dashboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom reports and charts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Real-time data updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Shareable insights</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0FA0CE]">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
            Join thousands of companies using our platform to make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#0FA0CE] hover:bg-[#1EAEDB]"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#0FA0CE] text-[#0FA0CE] hover:bg-[#0FA0CE]/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;
