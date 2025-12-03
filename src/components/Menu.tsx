import { Coffee, UtensilsCrossed } from "lucide-react";

const drinks = [
  {
    name: "Jeju Oat Matcha Latte",
    description: "Premium matcha with creamy oat milk",
    price: 180,
  },
  {
    name: "Kori Kohi",
    description: "Japanese-style iced coffee",
    price: 180,
  },
  {
    name: "SeaSalt Latte",
    description: "Espresso topped with sea salt cream",
    price: 180,
  },
];

const food = [
  {
    name: "Nachos Overload",
    description: "Loaded nachos with all the toppings",
    price: 180,
  },
  {
    name: "Chicken Sandwich",
    description: "Tender chicken with fresh greens",
    price: 180,
  },
  {
    name: "Tuna Sandwich",
    description: "Classic tuna salad on toasted bread",
    price: 180,
  },
];

const MenuItem = ({ name, description, price }: { name: string; description: string; price: number }) => (
  <div className="group flex items-start justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300">
    <div className="flex-1">
      <h4 className="font-display text-lg font-semibold text-primary group-hover:text-warm-orange transition-colors">
        {name}
      </h4>
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    </div>
    <span className="font-display text-xl font-bold text-sage ml-4">
      ₱{price}
    </span>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage font-medium tracking-widest uppercase text-sm">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            What We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            Handcrafted drinks and delicious bites to fuel your day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Drinks */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center">
                <Coffee className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Drinks</h3>
            </div>
            <div className="space-y-2">
              {drinks.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          {/* Food */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-warm-orange" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Food</h3>
            </div>
            <div className="space-y-2">
              {food.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
