'use client'

import { useRef } from "react";
import { Coffee, Users, Award, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

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

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
            MY STORY
          </span>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
            ABOUT SUZAN
          </h2>

          <motion.div style={{ y: contentY }} className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed font-normal">
              Growing up, I wasn't always the confident person I am today. After years of being bullied, I learned to shrink myself, holding back and overthinking every word. I felt misunderstood and struggled to express my true self.
              <br /><br />
              Everything changed when I found acting. It provided me with the tools to develop the <strong>clarity, presence, and communication skills</strong> I once lacked. This passion led me to study <strong>Applied Theatre at a leading drama school</strong>, deepening my understanding of human connection.
              <br /><br />
              13 years ago I began this journey, travelled across multiple disciplines and I bring a wealth of knowledge with me which consists of Film and Voiceover, Professional Coaching and Workshop Facilitation and Helping introverts, those with accent anxiety, or anyone struggling with the fear of being seen to my clients.
              <br />

              {/* <strong className="text-foreground font-bold"> SHENKIN is Sydney's destination for authentic Middle Eastern cuisine</strong>,
              where traditional flavors meet contemporary Australian dining culture. */}
            </p>
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
            <div>
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-8 tracking-tight uppercase leading-tight">
                CUE THE LIGHT<br />
                ACADEMY <span className="text-primary">IS A SPACE</span>
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It was created from my belief that everyone deserves to be heard. <br /> I created it as a transformative sanctuary designed to help those holding back their true potential move from the shadows of hesitation into the warmth of confident, purposeful expression.
                </p>
                {/* <p>
                  <strong className="text-foreground font-bold">This is more than Middle Eastern food – this is Sydney food.</strong>
                </p> */}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Find your authentic voice</h4>
                <p className="text-muted-foreground">Discover the power of your natural tone to speak with genuine, unshakeable authority.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-primary">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Break through internal barriers</h4>
                <p className="text-muted-foreground">Overcome the weight of introversion or the fear of judgment that keeps you silent.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Master the art of presence</h4>
                <p className="text-muted-foreground">Learn to command attention and show up fully in both professional boardrooms and personal circles.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Communicate with clarity</h4>
                <p className="text-muted-foreground">Refine your delivery to ensure your message is not just heard, but deeply understood.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
                <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">Bridge the gap</h4>
                <p className="text-muted-foreground">Align who you truly are with how the world perceives you, closing the distance between your inner self and your outer impact.</p>
              </div>
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
      <div className="bg-linear-to-br from-muted/30 to-white p-12 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
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

// 'use client'

// import { useEffect, useState } from "react";
// import { Coffee, Users, Award, Clock } from "lucide-react";

// export default function About() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const values = [
//     {
//       icon: <Coffee className="h-12 w-12 text-primary" />,
//       title: "SPECIALTY COFFEE",
//       description: "Expertly crafted brews using premium beans sourced from around the world"
//     },
//     {
//       icon: <Users className="h-12 w-12 text-primary" />,
//       title: "COMMUNITY HUB",
//       description: "A meeting place for Sydney's diverse community to connect over exceptional food"
//     },
//     {
//       icon: <Award className="h-12 w-12 text-primary" />,
//       title: "AUTHENTIC RECIPES",
//       description: "Traditional Middle Eastern dishes prepared with modern techniques and local ingredients"
//     },
//     {
//       icon: <Clock className="h-12 w-12 text-primary" />,
//       title: "FRESH DAILY",
//       description: "Everything made fresh each morning in our Newtown kitchen"
//     }
//   ];

//   return (
//     <section id="about" className="py-32 bg-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent rounded-full blur-2xl"></div>
//       </div>

//       <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-24">
//           <div
//             className="mb-8"
//             style={{
//               transform: `translateY(${(scrollY - 800) * 0.1}px)`,
//             }}
//           >
//             <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
//               OUR STORY
//             </span>
//             <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 uppercase leading-none">
//               SYDNEY'S<br />
//               <span className="text-primary">FLAVOR HUB</span>
//             </h2>
//           </div>

//           <div
//             className="max-w-4xl mx-auto"
//             style={{
//               transform: `translateY(${(scrollY - 900) * 0.15}px)`,
//             }}
//           >
//             <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light">
//               In the heart of Newtown, we've created more than just a cafe.
//               <strong className="text-foreground font-bold"> SHENKIN is Sydney's destination for authentic Middle Eastern cuisine</strong>,
//               where traditional flavors meet contemporary Australian dining culture.
//             </p>
//           </div>
//         </div>

//         {/* Values Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 mb-24">
//           {values.map((value, index) => (
//             <div
//               key={index}
//               className="group"
//               style={{
//                 transform: `translateY(${(scrollY - 1200) * (0.1 + index * 0.02)}px)`,
//               }}
//             >
//               <div className="bg-linear-to-br from-muted/30 to-white p-12 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
//                 <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-2xl font-black tracking-wide text-foreground mb-6 uppercase">
//                   {value.title}
//                 </h3>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Story Section */}
//         <div
//           className="bg-linear-to-r from-muted/40 to-secondary/30 p-12 lg:p-20 relative overflow-hidden"
//           style={{
//             transform: `translateY(${(scrollY - 1600) * 0.1}px)`,
//           }}
//         >
//           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
//             <div>
//               <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-8 tracking-tight uppercase leading-tight">
//                 WHERE TRADITION<br />
//                 MEETS <span className="text-primary">INNOVATION</span>
//               </h3>
//               <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
//                 <p>
//                   <strong className="text-foreground font-bold">SHENKIN represents the evolution of cafe culture in Sydney.</strong>
//                   We're not just serving food – we're creating experiences that bridge cultures and bring communities together.
//                 </p>
//                 <p>
//                   Every dish tells a story of tradition reimagined for modern Sydney. From our signature shakshuka to our carefully curated coffee blends,
//                   we celebrate both heritage and innovation.
//                 </p>
//                 <p>
//                   <strong className="text-foreground font-bold">This is more than Middle Eastern food – this is Sydney food.</strong>
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
//                 <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">LOCAL COMMITMENT</h4>
//                 <p className="text-muted-foreground">Sourcing from Sydney's best suppliers while honoring authentic Middle Eastern traditions.</p>
//               </div>

//               <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-primary">
//                 <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">COMMUNITY FIRST</h4>
//                 <p className="text-muted-foreground">Creating a space where Newtown's diverse community gathers, connects, and celebrates good food.</p>
//               </div>

//               <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-accent">
//                 <h4 className="font-black text-foreground mb-4 tracking-wide uppercase">INNOVATION DRIVEN</h4>
//                 <p className="text-muted-foreground">Constantly evolving our menu with seasonal ingredients and contemporary techniques.</p>
//               </div>
//             </div>
//           </div>

//           <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
//         </div>
//       </div>
//     </section>
//   );
// }