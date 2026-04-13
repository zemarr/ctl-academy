'use client'

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import storefrontImage from '../public/c0127af0ae2b7073d31b017cec0c79cc96f33bbe.png';
import HeroVideo from "./hero-video";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    let requestRef: number;
    let isScheduled = false;

    const updateParallax = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        // Only update if scroll position actually changed to reduce re-renders
        if (scrollY !== lastScrollRef.current) {
          containerRef.current.style.setProperty('--scroll-y', `${scrollY}px`);
          lastScrollRef.current = scrollY;
        }
      }
      isScheduled = false;
    };

    const handleScroll = () => {
      if (!isScheduled) {
        isScheduled = true;
        requestRef = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial update
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-black [--scroll-y:0px]"
    >
      {/* Parallax Background - Uses translate3d for GPU acceleration */}
      <div
        className="absolute inset-0 w-full h-[120vh] will-change-transform"
        style={{
          transform: `translate3d(0, calc(var(--scroll-y) * 0.4), 0)`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-black/70 z-10" />
        {/* <img
          src={storefrontImage.src}
          alt="Shenkin Cafe Storefront"
          className="w-full h-full object-cover"
        /> */}
        <HeroVideo />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-4xl w-full">

            {/* Location Badge - Reduced multiplier for mobile comfort */}
            <div
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20 w-max mx-auto will-change-transform"
              style={{ transform: `translate3d(0, calc(var(--scroll-y) * 0.05), 0)` }}
            >
              <MapPin className="h-4 w-4 text-white" />
              <span className="md:text-sm text-xs font-bold tracking-widest text-white uppercase">
                WEMBLEY, UNITED KINGDOM
              </span>
            </div>

            {/* Main Title */}
            <div
              className="space-y-6 mb-12 will-change-transform"
              style={{ transform: `translate3d(0, calc(var(--scroll-y) * 0.08), 0)` }}
            >
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-center text-white leading-none uppercase">
                CUE THE LIGHT<br /><span className="text-beige-dark">ACADEMY</span>
              </h1>
            </div>

            {/* Description - Static or very subtle on mobile */}
            <div className="mb-12 flex justify-center">
              <p className="text-lg lg:text-2xl text-white/80 text-center max-w-2xl leading-relaxed">
                You don't need to become someone else to be confident.
                You just need the space to become more of who you already are.
                <br />
                Cue the Light — <i>Let your voice be heard.</i>
              </p>
            </div>

            {/* CTA Buttons - Kept static for better tap-accuracy */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-transparent hover:bg-beige-dark/90 hover:text-black text-white hover:shadow-sm px-12 py-6 rounded-none font-semibold tracking-wide uppercase md:text-lg text-base border-2 border-beige-dark transition-all duration-300">
                SECURE YOUR SPOT
              </Button>
              {/* <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 rounded-none font-bold tracking-widest uppercase text-lg transition-all duration-300">
                VISIT US
              </Button> */}
            </div>

            {/* Stats - Subtly offset */}
            <div
              className="grid grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/20 will-change-transform"
              style={{ transform: `translate3d(0, calc(var(--scroll-y) * 0.12), 0)` }}
            >
              <DayCounter targetDate="2026-05-19" label="Days Left" />
              <StatBlock value="11AM" label="Start time" />
              <StatBlock value="YES" label="In-Person & Virtual" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/80" />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl lg:text-5xl font-black text-white mb-2 text-center">{value}</div>
      <div className="md:text-sm text-xs font-bold tracking-widest text-white/70 uppercase text-center">{label}</div>
    </div>
  );
}

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DD" or ISO string
  label?: string;
}

export function DayCounter({ targetDate, label = "Days To Go" }: CountdownProps) {
  const [daysLeft, setDaysLeft] = useState<number | string>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        // Convert milliseconds to days
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
        setDaysLeft(days);
      } else {
        setDaysLeft("Expired");
      }
    };

    // Run once on mount
    calculateTimeLeft();

    // Optional: Update every hour to stay accurate if the tab stays open
    const timer = setInterval(calculateTimeLeft, 3600000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl lg:text-5xl font-black text-white mb-2 text-center">
        {daysLeft}
      </span>
      <span className="md:text-sm text-xs font-bold tracking-widest text-white/70 uppercase text-center">
        {label}
      </span>
    </div>
  );
}