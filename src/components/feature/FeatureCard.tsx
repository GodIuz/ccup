
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FeatureType } from "./types";

interface FeatureCardProps {
  feature: FeatureType;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="p-6 rounded-xl bg-white hover:shadow-md transition-all duration-300 
                   border border-gray-100
                   focus:outline-none focus:ring-1 focus:ring-[#0FA0CE] 
                   cursor-pointer"
          role="button"
          tabIndex={0}
        >
          <feature.icon className="h-10 w-10 text-[#0FA0CE] mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
          
          <Button
            variant="link"
            className="text-[#0FA0CE] p-0 hover:text-[#1EAEDB] text-sm flex items-center"
          >
            Learn more
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{feature.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
