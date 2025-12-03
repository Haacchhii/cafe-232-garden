import { Coffee, Leaf, Laptop, Dog } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    description: "Handcrafted drinks made with premium beans",
  },
  {
    icon: Leaf,
    title: "Garden Setting",
    description: "Nestled inside South Peak Garden",
  },
  {
    icon: Laptop,
    title: "Work-Friendly",
    description: "Fast WiFi & comfortable seating",
  },
  {
    icon: Dog,
    title: "Pet-Friendly",
    description: "Bring your furry friends along",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage font-medium tracking-widest uppercase text-sm">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            A Cozy Escape
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            232 Cafe is your peaceful retreat inside South Peak Garden and Events Place.
            Whether you're looking for a quiet spot to work, catch up with friends,
            or simply enjoy a great cup of coffee with your pet by your side —
            we've got you covered.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-sage-light rounded-xl mb-4 group-hover:bg-sage group-hover:text-secondary-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-sage group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
