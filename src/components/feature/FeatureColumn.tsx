
import { FeatureCard } from "./FeatureCard";
import { FeatureType } from "./types";

interface FeatureColumnProps {
  features: FeatureType[];
  title: string;
}

export const FeatureColumn = ({ features, title }: FeatureColumnProps) => (
  <div className="space-y-6">
    <div className="text-sm font-medium text-[#0FA0CE] pb-2">{title}</div>
    {features.map((feature, index) => (
      <FeatureCard key={`${title.toLowerCase()}-${index}`} feature={feature} />
    ))}
  </div>
);
