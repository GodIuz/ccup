
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#217346]/10 via-white to-[#00B4FF]/10">
      {/* Grid Background Animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIgc3Ryb2tlPSJyZ2JhKDMzLDExNSw3MCwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20 animate-[pulse_4s_ease-in-out_infinite]" />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/90 to-[#00B4FF]/5" />
      
      <div className="container relative px-4 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Innovation Badge */}
          <span className="inline-block px-4 py-2 bg-[#FFD700]/10 text-[#2D2D2D] border border-[#FFD700]/20 rounded-full text-sm font-medium mb-4 transform hover:scale-105 transition-all duration-300 animate-fadeIn cursor-pointer" style={{ animationDelay: '200ms' }}>
            ✨ Excel Just Met Its Smarter Successor
          </span>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#217346] via-[#00B4FF] to-[#FFD700] bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform duration-500 animate-fadeIn font-manrope" style={{ animationDelay: '400ms' }}>
            Spreadsheets Are So 1995
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#2D2D2D]/80 max-w-2xl mx-auto leading-relaxed animate-fadeIn font-inter" style={{ animationDelay: '600ms' }}>
            Automate workflows, collaborate in real time, and scale from startup to Fortune 500—all with AI-powered insights that make Excel feel like ancient history.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '800ms' }}>
            <Button asChild size="lg" className="group w-full sm:w-auto bg-[#00B4FF] hover:bg-[#00B4FF]/90 transform hover:scale-105 transition-all duration-300">
              <Link to="/pricing">
                Try Free for 14 Days
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto hover:bg-[#217346]/5 transform hover:scale-105 transition-all duration-300 border-[#217346]/20">
              <Link to="/demo">
                <PlayCircle className="mr-2 h-4 w-4 group-hover:text-[#217346] transition-colors duration-300" />
                Watch Demo
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-[#2D2D2D]/70 animate-fadeIn" style={{ animationDelay: '1000ms' }}>
            {/* Enterprise Ready */}
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <svg className="w-5 h-5 text-[#217346] mr-2 group-hover:text-[#00B4FF] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="group-hover:text-[#00B4FF] transition-colors duration-300">Enterprise Ready</span>
            </div>
            
            {/* AI-Powered */}
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <svg className="w-5 h-5 text-[#217346] mr-2 group-hover:text-[#00B4FF] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="group-hover:text-[#00B4FF] transition-colors duration-300">AI-Powered Insights</span>
            </div>
            
            {/* Real-Time Collaboration */}
            <div className="hidden md:flex items-center transform hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <svg className="w-5 h-5 text-[#217346] mr-2 group-hover:text-[#00B4FF] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="group-hover:text-[#00B4FF] transition-colors duration-300">Real-Time Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
