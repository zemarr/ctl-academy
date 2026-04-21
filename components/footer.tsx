'use client'

import { Mail, Phone, MapPin, Coffee } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "WORKSHOP", href: "#workshop" },
    { label: "JOIN US", href: "#location" },
  ];

  // const socialLinks = [
  //   { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/shenkincafe/", label: "Facebook" },
  //   { icon: <Instagram className="h-6 w-6" />, href: "#", label: "Instagram" },
  // ];

  return (
    <footer id="contact" className="bg-linear-to-br from-muted/40 to-secondary/30 py-20 relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            {/* <div>
              <div className="shrink-0">
                <Image src="/ctl-logo-full.jpeg" alt="ctl Logo" width={70} height={70} className="rounded-lg aspect-square mb-6" />
              </div>
              <h3 className="text-5xl font-black text-foreground tracking-wider mb-6">SHENKIN</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                <strong className="text-foreground font-bold">CUE THE LIGHT. </strong>
                Let your voice be heard.
              </p>
            </div> */}

            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-primary/10 hover:bg-primary hover:text-white rounded-none border-1 border-primary transition-all duration-300 text-primary group"
                  aria-label={social.label}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-foreground mb-8 text-2xl uppercase tracking-wide border-b-2 border-primary pb-4">
              QUICK LINKS
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-bold text-lg uppercase tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-foreground mb-8 text-2xl uppercase tracking-wide border-b-2 border-accent pb-4">
              CONTACT
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-bold text-foreground uppercase">1 Humphrey Repton Lane,</p>
                  <p className="uppercase">Wembley Park, HA9 0GL</p>
                  <p className="uppercase">LONDON, UNITED KINGDOM</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <span className="text-muted-foreground font-bold">(02) 8765 4321</span>
              </div> */}

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <span className="text-muted-foreground font-bold">suzaanibrahim@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Banner */}
        {/* <div className="bg-primary/10 border-1 border-primary p-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Coffee className="h-8 w-8 text-primary" />
            <h4 className="text-2xl font-black text-foreground uppercase tracking-wide">
              OPENING HOURS
            </h4>
            <Coffee className="h-8 w-8 text-primary" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-black text-primary text-lg uppercase">MON - FRI</p>
              <p className="text-muted-foreground font-bold">6:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-black text-primary text-lg uppercase">SATURDAY</p>
              <p className="text-muted-foreground font-bold">7:00 AM - 5:00 PM</p>
            </div>
            <div>
              <p className="font-black text-primary text-lg uppercase">SUNDAY</p>
              <p className="text-muted-foreground font-bold">7:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t-2 border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground font-bold uppercase tracking-wide">
              &copy; {new Date().getFullYear()} CUE THE LIGHT ACADEMY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8 text-muted-foreground font-bold uppercase tracking-wide">
              <a href="https://instagram.com/tekksavi" target="_blank">Built by 👨🏾‍💻</a>
              {/* <span className="hidden md:inline text-primary">•</span>
              <span>AUTHENTIC FLAVORS</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}