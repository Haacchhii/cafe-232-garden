import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrinksImg from "@/assets/Drinks.jpg";
import Drinks2Img from "@/assets/Drinks2.jpg";
import AppetizersImg from "@/assets/Appetizers.jpg";
import DessertImg from "@/assets/Dessert.jpg";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("drinks");

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-2">
            <TabsTrigger value="drinks" className="text-base py-3">Signature Drinks & Refreshments</TabsTrigger>
            <TabsTrigger value="signatures" className="text-base py-3">Coffee & Non-Coffee Drinks</TabsTrigger>
            <TabsTrigger value="food" className="text-base py-3">Pasta & Sandwiches</TabsTrigger>
            <TabsTrigger value="desserts" className="text-base py-3">Cookies & Cakes</TabsTrigger>
          </TabsList>

          {/* Drinks Tab */}
          <TabsContent value="drinks" className="mt-0">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
              <div className="relative">
                <img 
                  src={DrinksImg} 
                  alt="Coffee and Non-Coffee Menu" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Click or tap on the image to view full size
              </p>
            </div>
          </TabsContent>

          {/* Signatures & Refreshments Tab */}
          <TabsContent value="signatures" className="mt-0">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
              <div className="relative">
                <img 
                  src={Drinks2Img} 
                  alt="Signature Drinks and Refreshments Menu" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Click or tap on the image to view full size
              </p>
            </div>
          </TabsContent>

          {/* Food Tab */}
          <TabsContent value="food" className="mt-0">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
              <div className="relative">
                <img 
                  src={AppetizersImg} 
                  alt="Pasta and Sandwich Menu" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Click or tap on the image to view full size
              </p>
            </div>
          </TabsContent>

          {/* Desserts Tab */}
          <TabsContent value="desserts" className="mt-0">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
              <div className="relative">
                <img 
                  src={DessertImg} 
                  alt="Cookies, Cakes, and Breakfast Menu" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Click or tap on the image to view full size
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Info */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-sage-light/30 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-primary mb-3">
              Special Breakfast Promo
            </h3>
            <p className="text-primary/80 text-lg">
              Enjoy a <span className="font-bold text-sage">FREE Cafe Americano</span> (Iced or Hot) 
              with every All-Day Breakfast order from <span className="font-bold">8 AM - 1 PM</span>!
            </p>
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            <h3 className="font-display text-2xl font-bold text-primary mb-4 text-center">Add-Ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <span className="font-medium text-primary">Oat Milk</span>
                <span className="font-display text-lg font-bold text-sage">₱30</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <span className="font-medium text-primary">Extra Shot</span>
                <span className="font-display text-lg font-bold text-sage">₱30</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <span className="font-medium text-primary">Whipped Cream</span>
                <span className="font-display text-lg font-bold text-sage">₱30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
