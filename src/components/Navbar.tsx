
import { Link, useLocation } from "react-router-dom";
import { House, AppWindow, DollarSign, Info, LogIn, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const location = useLocation();

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
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Company Check-Up</span>
          </Link>
          
          <div className="flex-1 flex justify-center">
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

              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith("/apps") ? "text-primary" : "text-muted-foreground"
                )}>
                  <AppWindow className="h-4 w-4" />
                  <span>Apps</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {appPages.map(({ path, label, icon: Icon }) => (
                    <DropdownMenuItem key={path} asChild>
                      <Link to={path} className="flex items-center space-x-2">
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

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
      </div>
    </nav>
  );
};
