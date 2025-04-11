
import { features } from "./feature/featureData";
import { FeatureColumn } from "./feature/FeatureColumn";
import { AdditionalFeatures } from "./feature/AdditionalFeatures";

export const Features = () => {
  // Group features by category
  const analysisTooLs = features.filter(f => f.category === "Analysis");
  const financialSolutions = features.filter(f => f.category === "Finance");
  const businessTools = features.filter(f => f.category === "Intelligence");
  const additionalFeatures = features.filter(f => f.category === "Additional");

  return (
    <section className="py-24 bg-[#f5f9fc]" role="region" aria-label="Features">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0FA0CE]">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tools to help you monitor, analyze, and transform your company's financial health and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <FeatureColumn 
            title="Analysis Tools" 
            features={analysisTooLs} 
          />
          
          <FeatureColumn 
            title="Financial Solutions" 
            features={financialSolutions} 
          />
          
          <FeatureColumn 
            title="Business Tools" 
            features={businessTools} 
          />
        </div>

        <AdditionalFeatures features={additionalFeatures} />
      </div>
    </section>
  );
};
