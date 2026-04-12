import { useEffect, useState } from "react";
import { Star, Clock, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import shakshukaImage from 'figma:asset/06244c169a95043f093144c89f2786568ab2c9a9.png';
import teaImage from 'figma:asset/cf5fcb9eafa834916a1baf266d52ce74225cd860.png';

export function Menu() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signature = [
    {
      name: "SIGNATURE SHAKSHUKA",
      description: "Our famous shakshuka with perfectly poached eggs, spiced tomato base, crispy halloumi, and warm pita bread",
      price: "$18",
      image: shakshukaImage,
      signature: true,
      spicy: true,
      time: "15 min"
    }
  ];

  const drinks = [
    {
      name: "TRADITIONAL TEA SERVICE",
      description: "Authentic Middle Eastern tea ceremony with premium loose leaf tea, served in traditional glassware",
      price: "$8",
      image: teaImage,
      signature: false,
      time: "5 min"
    }
  ];

  const menuItems = [
    {
      category: "BREAKFAST POWER",
      items: [
        { name: "ISRAELI BREAKFAST BOARD", price: "$22", description: "Artisan cheeses, olives, fresh vegetables, boiled egg, tahini, house-made bread" },
        { name: "HALLOUMI SMASH", price: "$16", description: "Grilled halloumi, avocado, za'atar, pomegranate on sourdough" },
        { name: "MIDDLE EASTERN BOWL", price: "$19", description: "Quinoa, roasted vegetables, hummus, falafel, tahini dressing" },
        { name: "BREAKFAST WRAP", price: "$14", description: "Scrambled eggs, spinach, feta, sun-dried tomatoes" }
      ]
    },
    {
      category: "COFFEE & BEVERAGES",
      items: [
        { name: "CARDAMOM LATTE", price: "$5.50", description: "House blend with aromatic cardamom and steamed milk" },
        { name: "TURKISH COFFEE", price: "$5", description: "Traditional preparation with Turkish delight" },
        { name: "ICED COFFEE", price: "$6", description: "Cold brew with choice of milk and house-made syrup" },
        { name: "FRESH JUICES", price: "$7", description: "Daily selection of cold-pressed juices" }
      ]
    },
    {
      category: "SHARE PLATES",
      items: [
        { name: "MEZZE PLATTER", price: "$24", description: "Hummus, baba ganoush, tabbouleh, olives, warm pita" },
        { name: "FALAFEL PLATE", price: "$18", description: "House-made falafel with tahini, pickles, fresh herbs" },
        { name: "GRILLED HALLOUMI", price: "$16", description: "With honey, za'atar, and warm bread" },
        { name: "LABNEH BOWL", price: "$12", description: "Thick yogurt with olive oil, herbs, and za'atar" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-32 bg-gradient-to-br from-muted/20 to-white relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div
            style={{
              transform: `translateY(${(scrollY - 1800) * 0.1}px)`,
            }}
          >
            <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
              FOOD & DRINK
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
              BOLD<br />
              <span className="text-primary">FLAVORS</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our signature dishes that define Sydney's Middle Eastern dining scene
            </p>
          </div>
        </div>

        {/* Signature Dish */}
        <div
          className="mb-32"
          style={{
            transform: `translateY(${(scrollY - 2200) * 0.15}px)`,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={signature[0].image}
                  alt={signature[0].name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <Badge className="bg-primary text-white font-bold uppercase tracking-wide">
                    <Star className="h-3 w-3 mr-1" />
                    SIGNATURE
                  </Badge>
                  {signature[0].spicy && (
                    <Badge className="bg-red-500 text-white font-bold uppercase tracking-wide">
                      <Flame className="h-3 w-3 mr-1" />
                      SPICY
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-bold">{signature[0].time}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight leading-tight">
                  {signature[0].name}
                </h3>
                <div className="text-3xl font-black text-primary mb-6">{signature[0].price}</div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {signature[0].description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 border-l-4 border-primary">
                <h4 className="font-black text-foreground mb-3 uppercase tracking-wide">CHEF'S NOTES</h4>
                <p className="text-muted-foreground">
                  Our signature shakshuka uses a secret blend of spices and locally-sourced tomatoes,
                  slow-cooked to perfection and finished with farm-fresh eggs. A true Sydney-Middle Eastern fusion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tea Service */}
        <div
          className="mb-32"
          style={{
            transform: `translateY(${(scrollY - 2800) * 0.12}px)`,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight leading-tight">
                  {drinks[0].name}
                </h3>
                <div className="text-3xl font-black text-primary mb-6">{drinks[0].price}</div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {drinks[0].description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-3 uppercase tracking-wide">EXPERIENCE</h4>
                <p className="text-muted-foreground">
                  More than just tea – it's a moment of mindfulness. Our traditional service includes
                  the ceremonial pouring technique and premium loose leaf blends imported directly from the Middle East.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={drinks[0].image}
                  alt={drinks[0].name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-bold">{drinks[0].time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Menu */}
        <div
          className="grid lg:grid-cols-3 gap-12 mb-20"
          style={{
            transform: `translateY(${(scrollY - 3400) * 0.1}px)`,
          }}
        >
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-black text-primary uppercase tracking-wide border-b-4 border-primary pb-4">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wide text-lg">
                        {item.name}
                      </h4>
                      <span className="font-black text-primary text-xl ml-4">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    <div className="h-px bg-gradient-to-r from-border to-transparent mt-4 group-hover:from-primary transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-16 relative overflow-hidden"
          style={{
            transform: `translateY(${(scrollY - 3800) * 0.1}px)`,
          }}
        >
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
              READY TO TASTE<br />
              <span className="text-primary">THE DIFFERENCE?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Experience Sydney's most authentic Middle Eastern flavors. Every dish tells a story of tradition and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-none font-bold tracking-widest uppercase text-lg"
              >
                ORDER NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 rounded-none font-bold tracking-widest uppercase text-lg"
              >
                BOOK TABLE
              </Button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}