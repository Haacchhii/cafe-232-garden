import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-6 h-6 text-accent" />
            <span className="font-display text-2xl font-bold text-primary-foreground">
              232 Cafe
            </span>
          </div>
          <p className="text-primary-foreground/70 text-sm max-w-md mb-6">
            Your cozy escape in the heart of Batangas City, inside South Peak Garden.
          </p>
          <div className="flex gap-6 text-primary-foreground/60 text-sm">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#features" className="hover:text-accent transition-colors">Amenities</a>
            <a href="#location" className="hover:text-accent transition-colors">Location</a>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 w-full">
            <p className="text-primary-foreground/50 text-xs">
              © {new Date().getFullYear()} 232 Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
