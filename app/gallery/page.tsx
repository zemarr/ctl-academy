"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

import p1 from "@/public/ctl-academy-2026-1.jpeg";
import p2 from "@/public/ctl-academy-2026-2.jpeg";
import p3 from "@/public/ctl-academy-2026-3.jpeg";
import p4 from "@/public/ctl-academy-2026-4.jpeg";
import { FadeIn } from "../../components/reveal-text";

type Cat = "All" | "2026" | "2025" | "2024";

const projects = [
  { id: 1, img: p1, title: "CTL Academy Workshop", place: "WEMBLEY, UK", category: "2026" as Cat, span: "row-span-2 md:row-span-3 col-span-4 md:col-span-2 lg:col-span-2" },
  { id: 2, img: p2, title: "Aurelia Hotel", place: "WEMBLEY, UK", category: "2026" as Cat, span: "row-span-2 md:row-span-3 col-span-4 md:col-span-2 lg:col-span-2" },
  { id: 3, img: p3, title: "Knightsbridge Pied-à-Terre", place: "WEMBLEY, UK", category: "2026" as Cat, span: "md:row-span-2 row-span-0 md:col-span-4 col-span-6" },
  { id: 4, img: p4, title: "Maison Lyon", place: "WEMBLEY, UK", category: "2026" as Cat, span: "md:row-span-2 row-span-0 md:col-span-4 col-span-6" },
];

const cats: Cat[] = ["All", "2026"];

// motion-enabled Next.js Link component
const MotionLink = motion.create(Link);

export default function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className='min-h-screen bg-foreground/95 py-32 md:pb-32 relative'>
      <div className="max-w-400 mx-auto">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-end lg:justify-between gap-8 md:mb-14 mb-8 text-background">
            <div>
              {/* <div className="flex items-baseline gap-6 mb-6">
                <span className="font-mono text-xs text-bronze">— 03</span>
                <p className="eyebrow">Shots</p>
              </div> */}
              <h2 className="font-black uppercase md:text-left text-center text-4xl md:text-7xl leading-11 md:leading-19 tracking-normal max-w-2xl">
                Gallery
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={
                    "relative md:px-5 px-3 md:py-2 py-1 text-xs uppercase tracking-[0.2em] font-sans transition-colors " +
                    (active === c ? "text-background bg-foreground/40" : "text-background/70 hover:bg-beige-dark/20 hover:text-foreground")
                  }
                >
                  {active === c && (
                    <motion.span
                      layoutId="cat-bg"
                      className="absolute inset-0 bg-bronze"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] md:auto-rows-[300px] gap-x-0 gap-y-4 md:gap-6 rounded-4xl overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <MotionLink
                  layout
                  key={p.id}
                  href="#"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={"group relative overflow-hidden bg-graphite block " + p.span}
                >
                  {/* Next.js Image component handles lazy loading & optimization out of the box */}
                  <Image
                    src={p.img}
                    alt={p.title}
                    placeholder="blur"
                    fill
                    sizes="(max-w-768px) 100vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="eyebrow font-mono text-beige-dark">{p.category}</p>
                    {/* <p className="text-white font-heading font-bold! text-2xl md:text-3xl mt-1">{p.title}</p> */}
                    <p className="text-white text-xs tracking-widest uppercase opacity-70 mt-1">{p.place}</p>
                  </div>
                </MotionLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* View gallery */}
      </div>
    </div>
  );
}