
import { FeatureCard } from "./FeatureCard";
import { FeatureType } from "./types";

interface AdditionalFeaturesProps {
  features: FeatureType[];
}

export const AdditionalFeatures = ({ features }: AdditionalFeaturesProps) => (
  <div className="mt-16">
    <h3 className="text-2xl font-bold text-center mb-8 text-[#0FA0CE]">
      Additional Premium Features
    </h3>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={`additional-${index}`} feature={feature} />
      ))}
    </div>
  </div>
);
