
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-accent/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDExMCw5MywxNjUsMC4yKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
      
      <div className="container relative px-4 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span 
            className="inline-block px-4 py-2 bg-accent/80 text-accent-foreground rounded-full text-sm font-medium mb-4 transform hover:scale-105 transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: '200ms' }}
          >
            ✨ Transform Your Business Financial Future
          </span>
          
          <h1 
            className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-primary/90 to-accent-foreground bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform duration-500 animate-fadeIn"
            style={{ animationDelay: '400ms' }}
          >
            Turn Financial Data into Business Success
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeIn"
            style={{ animationDelay: '600ms' }}
          >
            Experience the future of financial management with AI-powered insights, real-time analytics, and predictive forecasting. Join thousands of businesses making smarter financial decisions.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn"
            style={{ animationDelay: '800ms' }}
          >
            <Button 
              asChild 
              size="lg" 
              className="group w-full sm:w-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="group w-full sm:w-auto hover:bg-accent/5 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">
                <PlayCircle className="mr-2 h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                Watch Demo
              </Link>
            </Button>
          </div>
          
          <div 
            className="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fadeIn"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="hover:text-primary transition-colors duration-300">4.9/5 Rating</span>
            </div>
            
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="hover:text-primary transition-colors duration-300">24/7 Support</span>
            </div>
            
            <div className="hidden md:flex items-center transform hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="hover:text-primary transition-colors duration-300">Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
