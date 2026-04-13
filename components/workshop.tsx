'use client'

import { useRef } from "react";
// import { Star, Clock, Flame } from "lucide-react";
import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
import shakshukaImage from '../public/06244c169a95043f093144c89f2786568ab2c9a9.png';
import teaImage from '../public/cf5fcb9eafa834916a1baf266d52ce74225cd860.png';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Workshop() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smooth parallax transforms with easing
  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const signatureY = useTransform(scrollYProgress, [0, 0.5], [60, -60]);
  // const drinksY = useTransform(scrollYProgress, [0.3, 1], [80, -80]);
  // const menuY = useTransform(scrollYProgress, [0.5, 1], [40, -40]);
  const ctaY = useTransform(scrollYProgress, [0.7, 1], [60, -40]);

  const signature = [
    {
      name: "Public Speaking",
      description: "Mastering the art of delivery and learn to command any stage or boardroom with poise and purpose.",
      image: shakshukaImage,
      suzansNote: "Speaking is less about perfection and more about the connection you create with your audience.",
    },
    {
      name: "Storytelling",
      description: "Transforming your ideas into compelling narratives that resonate with your audience and leave a lasting impact.",
      image: shakshukaImage,
      suzansNote: "Your story is your superpower. I will help you find the emotional threads that make your message stick.",
    },
    {
      name: "Vocal Clarity",
      description: "Unlocking the full potential of your voice, mastering tone and diction to ensure you are always heard and understood.",
      image: shakshukaImage,
      suzansNote: "Your voice is an instrument—once you learn to tune it, you will never have to worry about being lost in the noise.",
    },
    {
      name: "Body Language",
      description: "Aligning your physical presence with your message to project natural authority and connect authentically with others.",
      image: shakshukaImage,
      suzansNote: "We speak with our whole selves; when your body matches your words, your confidence becomes undeniable.",
    },
    {
      name: "Confidence-Building Exercises",
      description: "Engaging in practical, action-based techniques to quiet the inner critic and step boldly into your own light.",
      image: shakshukaImage,
      suzansNote: "Please in comfortable clothing. The session is interactive and movement-based. Confidence is a muscle we build through doing, moving you from overthinking into authentic, deliberate action.",
    },
  ];

  // const drinks = [
  //   {
  //     name: "TRADITIONAL TEA SERVICE",
  //     description: "Authentic Middle Eastern tea ceremony with premium loose leaf tea, served in traditional glassware",
  //     price: "$8",
  //     image: teaImage,
  //     signature: false,
  //     time: "5 min"
  //   }
  // ];

  // const menuItems = [
  //   {
  //     category: "BREAKFAST POWER",
  //     items: [
  //       { name: "ISRAELI BREAKFAST BOARD", price: "$22", description: "Artisan cheeses, olives, fresh vegetables, boiled egg, tahini, house-made bread" },
  //       { name: "HALLOUMI SMASH", price: "$16", description: "Grilled halloumi, avocado, za'atar, pomegranate on sourdough" },
  //       { name: "MIDDLE EASTERN BOWL", price: "$19", description: "Quinoa, roasted vegetables, hummus, falafel, tahini dressing" },
  //       { name: "BREAKFAST WRAP", price: "$14", description: "Scrambled eggs, spinach, feta, sun-dried tomatoes" }
  //     ]
  //   },
  //   {
  //     category: "COFFEE & BEVERAGES",
  //     items: [
  //       { name: "CARDAMOM LATTE", price: "$5.50", description: "House blend with aromatic cardamom and steamed milk" },
  //       { name: "TURKISH COFFEE", price: "$5", description: "Traditional preparation with Turkish delight" },
  //       { name: "ICED COFFEE", price: "$6", description: "Cold brew with choice of milk and house-made syrup" },
  //       { name: "FRESH JUICES", price: "$7", description: "Daily selection of cold-pressed juices" }
  //     ]
  //   },
  //   {
  //     category: "SHARE PLATES",
  //     items: [
  //       { name: "MEZZE PLATTER", price: "$24", description: "Hummus, baba ganoush, tabbouleh, olives, warm pita" },
  //       { name: "FALAFEL PLATE", price: "$18", description: "House-made falafel with tahini, pickles, fresh herbs" },
  //       { name: "GRILLED HALLOUMI", price: "$16", description: "With honey, za'atar, and warm bread" },
  //       { name: "LABNEH BOWL", price: "$12", description: "Thick yogurt with olive oil, herbs, and za'atar" }
  //     ]
  //   }
  // ];

  return (
    <section ref={containerRef} id="workshop" className="py-32 bg-linear-to-br from-muted/20 to-white relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            style={{ y: headerY }}
          >
            <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
              WORKSHOP
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
              WORKSHOP
              {/* <span className="text-primary">FLAVORS</span> */}
            </h2>
            <p className="md:text-2xl text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our workshops are interactive, practical, and designed to get you out of your head and into expression. <span className="font-semibold">No pressure. No judgement.
                Just a safe space to grow.</span>
              <br /><br />
              From our pool of knowledge, you will gain essential skills such as
            </p>
          </motion.div>
        </div>

        {/* Signature Dish */}
        <motion.div
          style={{ y: signatureY }}
          className="mb-32"
        >
          {/* Signature Dish */}
          <motion.div
            style={{ y: signatureY }}
            className="mb-32 flex flex-col gap-10"
          >
            {
              signature.map((sig, sigId) => (
                <div
                  key={`${sigId}-${sig.name}`}
                  className="grid lg:grid-cols-2 gap-16 items-center lg:even:[direction:rtl]"
                >
                  {/* 1. Image Block - Reset to LTR */}
                  <div className="md:relative hidden group w-full h-96 lg:[direction:ltr]">
                    {/* <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={sig.image.src}
                        alt={sig.name}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div> */}
                  </div>

                  {/* 2. Content Block - Reset to LTR */}
                  <div className="space-y-8 lg:[direction:ltr]">
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight leading-tight">
                        {sig.name}
                      </h3>
                      <p className="md:text-xl text-lg text-muted-foreground leading-relaxed mb-8">
                        {sig.description}
                      </p>
                    </div>

                    <div className="bg-linear-to-r from-primary/5 to-accent/5 p-8 border-l-4 border-primary">
                      <h4 className="font-black text-foreground mb-3 uppercase tracking-wide">SUZAN'S NOTES</h4>
                      <p className="text-muted-foreground">
                        {sig.suzansNote}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </motion.div>

          {/* Tea Service */}
          {/* <motion.div
            style={{ y: drinksY }}
            className="mb-32"
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

                <div className="bg-linear-to-r from-accent/10 to-secondary/10 p-8 border-l-4 border-accent">
                  <h4 className="font-black text-foreground mb-3 uppercase tracking-wide">EXPERIENCE</h4>
                  <p className="text-muted-foreground">
                    More than just tea – it's a moment of mindfulness. Our traditional service includes
                    the ceremonial pouring technique and premium loose leaf blends imported directly from the Middle East.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={drinks[0].image.src}
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
          </motion.div> */}

          {/* Full Menu */}
          {/* <motion.div
            style={{ y: menuY }}
            className="grid lg:grid-cols-3 gap-12 mb-20"
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
                      <div className="h-px bg-linear-to-r from-border to-transparent mt-4 group-hover:from-primary transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div> */}

          {/* CTA */}
          <motion.div
            style={{ y: ctaY }}
            className="text-center bg-linear-to-r from-beige/15 to-beige-dark/20 p-16 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
                READY TO TRANSOFRM<br />
                <span className="text-primary">YOUR LIFE?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Step out of the shadows and into your most confident self. Master the art of presence and learn to communicate with clarity, authority, and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-beige-dark hover:bg-beige-dark/90 text-black hover:shadow-sm px-12 py-6 rounded-none font-semibold tracking-wide uppercase text-base border-2 border-beige-dark transition-all duration-300">
                  SECURE YOUR SPOT
                </Button>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}