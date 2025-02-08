
export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Company Check-Up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
