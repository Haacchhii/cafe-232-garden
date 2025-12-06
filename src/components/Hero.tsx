import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook } from "lucide-react";
import heroImage from "@/assets/landing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="232 Cafe cozy interior with warm lighting and garden views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="animate-fade-in">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Welcome to
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6">
            232 Cafe
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
            Your cozy escape in the heart of Batangas City. <br className="hidden md:block" />
            Where great coffee meets a garden sanctuary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://maps.google.com/?q=232+Caltex+Road+Banaba+South+Batangas+City"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-1" />
                Get Directions
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-cream/50 text-cream hover:bg-cream/10 hover:text-cream" asChild>
              <a href="tel:09292617407">
                <Phone className="mr-1" />
                Call Us
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-cream hover:bg-cream/10" asChild>
              <a
                href="https://facebook.com/232cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="mr-1" />
                Facebook
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cream/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
