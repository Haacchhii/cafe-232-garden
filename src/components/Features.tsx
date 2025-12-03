import { Wifi, Car, TreePine, Armchair } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet for work or browsing",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Spacious parking area available",
  },
  {
    icon: TreePine,
    title: "Outdoor Seating",
    description: "Enjoy the garden atmosphere",
  },
  {
    icon: Armchair,
    title: "Indoor Seating",
    description: "Air-conditioned comfort inside",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-sage-light">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage font-medium tracking-widest uppercase text-sm">
            Amenities
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg">
            We've thought of everything to make your visit comfortable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <amenity.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-primary mb-1">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-xs">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
