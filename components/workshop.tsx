'use client'

import { useRef } from "react";
// import { Star, Clock, Flame } from "lucide-react";
import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
import shakshukaImage from '../public/06244c169a95043f093144c89f2786568ab2c9a9.png';
import teaImage from '../public/cf5fcb9eafa834916a1baf266d52ce74225cd860.png';
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useScrollVariable } from "./hooks/useScrollVariable";
import WorkshopTicket from "./workshop-ticket";

export default function Workshop() {
  const containerRef = useScrollVariable();

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

  const containerVariants: Variants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 100 : -100,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={containerRef} id="workshop" className="relative py-32 bg-linear-to-br from-beige-dark/20 to-white overflow-hidden">
      <div className="max-w-screen mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            style={{ y: headerY }}
          >
            <span className="text-sm font-bold tracking-[0.3em] text-beige-dark uppercase mb-4 block">
              WORKSHOP
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
              WORKSHOP
              {/* <span className="text-primary">FLAVORS</span> */}
            </h2>
            <p className="md:text-2xl text-lg text-muted-foreground max-w-6xl mx-auto leading-relaxed">
              Our workshops are interactive, practical, and designed to get you out of your head and into expression. <span className="font-semibold">No pressure. No judgement.
                Just a safe space to grow.</span>
              <br /><br />
              From our pool of knowledge, you will gain essential skills such as
            </p>
          </motion.div>
        </div>

        <div
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
                <motion.div
                  custom={sigId % 2 === 0} // Pass the parity to the variants
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={containerVariants}
                  className="space-y-8 lg:[direction:ltr]">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight leading-tight">
                      {sig.name}
                    </h3>
                    <p className="md:text-xl text-lg text-muted-foreground leading-relaxed mb-8">
                      {sig.description}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-linear-to-r from-primary/5 to-accent/5 p-8 border-l-4 border-primary">
                    <h4 className="font-black text-foreground mb-3 uppercase tracking-wide">SUZAN'S NOTES</h4>
                    <p className="text-muted-foreground">
                      {sig.suzansNote}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            ))
          }
        </div>


        {/* CTA */}
        <div>
          <WorkshopTicket eventId="1987602907802" />
        </div>
        <motion.div
          style={{ y: ctaY }}
          className="text-center bg-linear-to-r from-beige/15 to-beige-dark/20 md:p-16 p-8 py-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="max-w-prose text-3xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
              ARE YOU READY TO TRANSFORM<br />
              <span className="text-primary">YOUR LIFE?</span>
            </h3>
            <p className="md:text-xl text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}