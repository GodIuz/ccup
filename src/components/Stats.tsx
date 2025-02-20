
import { useCallback } from "react";
import { useToast } from "./ui/use-toast";

export const Stats = () => {
  const { toast } = useToast();

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "The value has been copied to your clipboard.",
      duration: 2000,
    });
  }, [toast]);

  const stats = [
    ["2M+", "Active Users", "Over two million active users worldwide"],
    ["$500M+", "Transactions Analyzed", "More than $500 million in transactions processed"],
    ["98%", "Customer Satisfaction", "Industry-leading satisfaction rate"],
    ["24/7", "Expert Support", "Round-the-clock expert assistance"],
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0FA0CE] to-[#1EAEDB]" role="region" aria-label="Statistics">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {stats.map(([number, label, tooltip], index) => (
            <div
              key={index}
              onClick={() => handleCopy(number)}
              className="animate-fadeIn transform hover:scale-105 transition-all duration-300 
                       bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer
                       border border-white/20 hover:border-white/40
                       focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ animationDelay: `${index * 100}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`${label}: ${number}. Click to copy.`}
              title={tooltip}
            >
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  {number}
                </div>
                <div className="text-white/90 text-sm md:text-base">{label}</div>
                
                {/* Pulse animation for emphasis */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
