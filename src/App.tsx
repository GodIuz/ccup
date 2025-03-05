
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import Index from "./pages/Index";
import { IosApp } from "./pages/apps/IosApp";
import { Android } from "./pages/apps/Android";
import { HarmonyOS } from "./pages/apps/HarmonyOS";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import PrivacyTerms from "./pages/PrivacyTerms";
import FeaturePage from "./pages/Features";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/apps/ios" element={<IosApp />} />
              <Route path="/apps/android" element={<Android />} />
              <Route path="/apps/harmonyos" element={<HarmonyOS />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-terms" element={<PrivacyTerms />} />
              <Route path="/features" element={<FeaturePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
