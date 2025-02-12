
import { Link, useLocation } from "react-router-dom";
import { House, AppWindow, DollarSign, Info, LogIn, Smartphone, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: House },
    { path: "/pricing", label: "Pricing", icon: DollarSign },
    { path: "/about", label: "About", icon: Info },
  ];

  const appPages = [
    { path: "/apps/ios", label: "iOS", icon: Smartphone },
    { path: "/apps/android", label: "Android", icon: Smartphone },
    { path: "/apps/harmonyos", label: "HarmonyOS", icon: Smartphone },
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Company Check-Up</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}

              <DropdownMenu open={isAppsOpen} onOpenChange={setIsAppsOpen}>
                <DropdownMenuTrigger 
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location.pathname.startsWith("/apps") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <AppWindow className="h-4 w-4" />
                  <span className="mx-1">Apps</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isAppsOpen ? "rotate-180" : ""
                  )} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-background border rounded-md shadow-md w-48">
                  {appPages.map(({ path, label, icon: Icon }) => (
                    <DropdownMenuItem key={path} asChild>
                      <Link 
                        to={path} 
                        className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-secondary"
                        onClick={() => setIsAppsOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <a 
              href="https://my.ccup.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
              <div className="container px-4 py-4 space-y-4">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary",
                      location.pathname === path ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                ))}
                <div className="pt-2 border-t">
                  <button
                    onClick={() => setIsAppsOpen(!isAppsOpen)}
                    className="flex items-center justify-between w-full p-2 text-sm font-medium text-muted-foreground"
                  >
                    <div className="flex items-center space-x-2">
                      <AppWindow className="h-4 w-4" />
                      <span>Apps</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isAppsOpen ? "rotate-180" : ""
                    )} />
                  </button>
                  {isAppsOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {appPages.map(({ path, label, icon: Icon }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsAppsOpen(false);
                          }}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary text-muted-foreground"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-2 border-t">
                  <a 
                    href="https://my.ccup.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="default" size="sm" className="w-full flex items-center justify-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
