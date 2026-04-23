'use client'

import { useRef } from "react";
import { MapPin, Clock, Phone, Mail, Train, Car, Navigation, Wifi, Coffee, BirdIcon, BriefcaseBusinessIcon } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax values for different sections
  const headerY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contactY = useTransform(scrollYProgress, [0, 0.6], [100, -60]);
  const mapY = useTransform(scrollYProgress, [0.2, 1], [40, -40]);

  const openingHours = [
    { day: "30TH MAY 2026", hours: "11:00 AM - 2:00 PM", isToday: false },
    // { day: "SATURDAY", hours: "7:00 AM - 5:00 PM", isToday: true },
    // { day: "SUNDAY", hours: "7:00 AM - 4:00 PM", isToday: false },
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6" />, text: "FREE WIFI" },
    { icon: <Coffee className="h-6 w-6" />, text: "SPECIALTY COFFEE" },
    { icon: <Train className="h-6 w-6" />, text: "NEAR TRANSPORT" },
    { icon: <Car className="h-6 w-6" />, text: "STREET PARKING" },
  ];

  return (
    <section ref={containerRef} id="location" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-24"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-beige-dark uppercase mb-4 block">
            JOIN US AT
          </span>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            WEMBLEY PARK<br />
            <span className="text-beige/30">UNITED KINGDOM</span>
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Located steps away from the iconic stadium in London
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact & Hours */}
          <motion.div
            style={{ y: contactY }}
            className="space-y-12"
          >
            {/* Address */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 md:p-10 p-4 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-none border-1 border-background">
                  <MapPin className="h-8 w-8 text-background" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">
                    OUR ADDRESS
                  </h3>
                  <div className="text-white/80 md:text-lg leading-relaxed uppercase space-y-1">
                    <p className="font-bold uppercase">1 Humphrey Repton Lane,</p>
                    <p> Wembley Park, HA9 0GL</p>
                    <p>LONDON, UNITED KINGDOM</p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-transparent hover:bg-beige-dark/90 hover:text-black text-white hover:shadow-sm px-12 py-6 rounded-none font-semibold tracking-wide uppercase md:text-lg text-base border border-beige-dark transition-all duration-300"
              >
                <a
                  href="https://www.google.com/maps/place/1+Humphry+Repton+Ln,+Wembley+Park,+Wembley+HA9+0GL,+UK/@51.5599661,-0.2850543,17z/data=!3m1!4b1!4m6!3m5!1s0x4876117e28ba7623:0x60059f5f65d73784!8m2!3d51.5599661!4d-0.2824794!16s%2Fg%2F11hhpjl82t?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  GET DIRECTIONS
                </a>
              </Button>
            </div>

            {/* Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 md:p-10 p-4">
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-none border-1 border-accent">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-wide">
                  WORKSHOP DETAILS
                </h3>
              </div>
              <div className="space-y-6">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 border-l-4 transition-all duration-300 ${schedule.isToday
                      ? 'bg-primary/20 border-primary'
                      : 'bg-white/5 border-white/20 hover:border-white/40'
                      }`}
                  >
                    <span className={`font-bold md:text-lg text-base uppercase tracking-wide whitespace-nowrap ${schedule.isToday ? 'text-primary' : 'text-white/80'
                      }`}>
                      {schedule.day}
                    </span>
                    <span className={`font-medium md:text-xl text-base whitespace-nowrap ${schedule.isToday ? 'text-primary' : 'text-white'
                      }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500">
                    <BriefcaseBusinessIcon className="h-8 w-8 text-accent mb-4" />
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white uppercase tracking-wide">STANDARD</h4>
                      <p className="text-white font-bold text-xl">£30</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div style={{ y: contactY }} className="space-y-12">
            {/* Contact */}

          </motion.div>

          {/* Map & Directions */}
          <motion.div
            style={{ y: mapY }}
            className="space-y-12"
          >
            {/* Map Placeholder */}
            {/* <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-white/20 p-16 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-white/20 rounded-none border-4 border-white flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">
                  WE'RE HERE!
                </h4>
                <p className="text-white/80 text-lg uppercase tracking-wide">
                  HEART OF LONDON
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            </div> */}

            {/* Getting Here */}
            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-wide">
                GETTING HERE
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Train className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2 uppercase text-sm tracking-wide">TRAIN</h4>
                  <p className="text-white/70 text-sm">NEWTOWN STATION</p>
                  <p className="text-white/70 text-sm">5 MIN WALK</p>
                </div>
                <div className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Car className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2 uppercase text-sm tracking-wide">CAR</h4>
                  <p className="text-white/70 text-sm">STREET PARKING</p>
                  <p className="text-white/70 text-sm">AVAILABLE</p>
                </div>
              </div>
            </div> */}

            {/* Amenities */}
            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-wide">
                AMENITIES
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-primary">
                      {amenity.icon}
                    </div>
                    <span className="font-bold text-white text-sm uppercase tracking-wide">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}