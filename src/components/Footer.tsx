
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="flex items-center justify-between">
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="flex items-center justify-between">
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="flex items-center justify-between">
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </a>
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </a>
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
              <a href="#" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-4 w-4 mr-2" />
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Company Check-Up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
