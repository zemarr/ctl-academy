'use client'

import { useRef } from "react";
import { Coffee, Users, Award, Clock, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useScrollVariable } from "./hooks/useScrollVariable";
import Link from "next/link";
import Image from "next/image";
import suzan from '@/public/suzan-img.jpeg'

export default function About() {
  const containerRef = useScrollVariable();

  // 1. Track scroll progress relative to THIS section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. Smooth out the scroll value to prevent "shaking" on mobile touch
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.0001,
    mass: 0.5
  });

  // 3. Create specific parallax offsets with enhanced depth
  // Negative values move up, positive move down relative to scroll
  const headerY = useTransform(smoothProgress, [0, 1], [80, -80]);
  const contentY = useTransform(smoothProgress, [0, 1], [120, -120]);
  const footerY = useTransform(smoothProgress, [0, 1], [60, -60]);

  const values = [
    { icon: <Coffee className="h-12 w-12 text-primary" />, title: "FILM & VOICEOVER", description: "From the physical command of the stage and the subtle authenticity required for film to the vocal precision and tonal control used in professional voiceover." },
    { icon: <Users className="h-12 w-12 text-primary" />, title: "PROFESSIONAL COACHING", description: "Help individuals identify and dismantle personal communication barriers, transforming their internal clarity into a confident, commanding external presence through one-on-one sessions." },
    { icon: <Award className="h-12 w-12 text-primary" />, title: "WORKSHOP FACILITATION", description: "Applied Theatre techniques and empathetic leadership to create interactive, high-energy environments where participants can safely rehearse real-world communication challenges and build lasting confidence." },
    { icon: <Clock className="h-12 w-12 text-primary" />, title: "GUIDANCE", description: "My approach provides a structured roadmap for self-expression, offering the strategic support and creative tools necessary for people to navigate the fear of being seen and step fully into their own light." }
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-screen mx-auto px-6 lg:px-12 relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.3em] text-beige-dark uppercase mb-4 block">
            MY STORY
          </span>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
            ABOUT SUZAN
          </h2>

          <motion.div style={{ y: contentY }} className="max-w-screen mx-auto grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed font-normal text-left mb-6">
                Hi, I'm Suzan.
                <br /><br />
                I wasn't always confident.
                <br />
                Growing up, I was heavily bullied, which led me to shrink myself and struggle to express who I truly was. I often found myself holding back, overthinking, and feeling misunderstood.
                <br /><br />
                Everything changed when I found acting.
                <br />
                Through acting, I developed the confidence, clarity, and presence I once lacked. It gave me the tools to understand myself, communicate effectively, and show up more fully in every area of my life.
                <br /><br />
                I went on to study Applied Theatre at a leading drama school, where I deepened my understanding of communication, performance, and human connection.
                <br />
                Now, with over 13 years of experience across stage, film, voiceover, coaching, and workshop facilitation, I help others find their voice and express themselves with confidence.
                <br /><br />
                I work with people who know they have more to say, but struggle to articulate it. Whether that’s due to confidence, introversion, accent, or the fear of being seen.
                <br /><br />
                Through Cue the Light Academy, I create spaces where people can
                <br /><br />
              </p>
              <Link href={"/about"} className="py-3 w-max text-black transition-all font-medium text-sm uppercase tracking-wider flex items-center gap-4 hover:underline">
                <ArrowRight className="animate animate-pulse" />
                Discover more
              </Link>
            </div>
            <div>
              <Image src={suzan} alt="Suzan's image" className="w-full h-full object-contain aspect-square" />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <ParallaxCard key={index} value={value} index={index} progress={smoothProgress} />
          ))}
        </div>

        <motion.div
          style={{ y: footerY }}
          className="md:bg-linear-to-r bg-linear-to-b from-white/40 to-beige-dark/30 p-4 lg:p-20 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="h-full">
              <motion.h3
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl lg:text-5xl font-black text-foreground mb-8 tracking-tight uppercase leading-tight">
                CUE THE LIGHT<br />
                ACADEMY <span className="text-primary">IS A SPACE</span>
              </motion.h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It was created from my belief that everyone deserves to be heard. <br /> I created it as a transformative sanctuary designed to help those holding back their true potential move from the shadows of hesitation into the warmth of confident, purposeful expression.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Find your authentic voice</h4>
                <p className="text-muted-foreground">Discover the power of your natural tone to speak with genuine, unshakeable authority.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-primary">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Break through internal barriers</h4>
                <p className="text-muted-foreground">Overcome the weight of introversion or the fear of judgment that keeps you silent.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Master the art of presence</h4>
                <p className="text-muted-foreground">Learn to command attention and show up fully in both professional boardrooms and personal circles.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Communicate with clarity</h4>
                <p className="text-muted-foreground">Refine your delivery to ensure your message is not just heard, but deeply understood.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, }}   // Starting state (invisible and shifted)
                whileInView={{ opacity: 1, x: 0 }}  // Target state when in view
                viewport={{ once: false, amount: 0.5 }} // Animation triggers once when 50% visible
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Bridge the gap</h4>
                <p className="text-muted-foreground">Align who you truly are with how the world perceives you, closing the distance between your inner self and your outer impact.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component to handle individual card parallax logic
function ParallaxCard({ value, index, progress }: any) {
  // Each card moves at a slightly different speed based on its index for layered depth effect
  const y = useTransform(progress, [0, 1], [30 * (index + 1), -30 * (index + 1)]);
  const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div style={{ y, opacity }} className="group">
      <div className="bg-beige-dark/20 p-12 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
        <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
          {value.icon}
        </div>
        <h3 className="text-2xl font-black tracking-wide text-foreground mb-6 uppercase">
          {value.title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
}
