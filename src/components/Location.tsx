import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Facebook } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-cream">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage font-medium tracking-widest uppercase text-sm">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Find Us Here
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d121.0567!3d13.7567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzI0LjEiTiAxMjHCsDAzJzI0LjEiRQ!5e0!3m2!1sen!2sph!4v1699999999999!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="232 Cafe Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-background rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    232 Caltex Road, Banaba South<br />
                    Batangas City 4200<br />
                    <span className="text-sage font-medium">Inside South Peak Garden and Events Place</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-warm-orange" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Opening Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Mon - Fri:</span> 9:00 AM - 9:00 PM</p>
                    <p><span className="font-medium text-foreground">Saturday:</span> 9:00 AM - 10:00 PM</p>
                    <p><span className="font-medium text-foreground">Sunday:</span> 9:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" className="flex-1" asChild>
                <a
                  href="https://maps.google.com/?q=232+Caltex+Road+Banaba+South+Batangas+City"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Get Directions
                </a>
              </Button>
              <Button variant="default" className="flex-1" asChild>
                <a href="tel:09292617407">
                  <Phone className="w-4 h-4 mr-1" />
                  0929-261-7407
                </a>
              </Button>
              <Button variant="sage" className="flex-1" asChild>
                <a
                  href="https://facebook.com/232cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 mr-1" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
