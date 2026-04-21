'use client'

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/#home" },
    { label: "ABOUT", href: "/#about" },
    { label: "WORKSHOP", href: "/#workshop" },
    { label: "JOIN US", href: "/#location" },
    // { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-xl text-foreground shadow-lg' : 'bg-transparent backdrop-blur-3xl text-background'
      }`}>
      <div className="max-w-screen mx-auto px-6 lg:px-12">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          <div className="shrink-0">
            <Image src="/ctl-logo-full.jpeg" alt="ctl Logo" width={70} height={70} className="rounded-lg aspect-square" />
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold tracking-widest ${scrolled ? 'hover:text-foreground' : 'hover:text-background'
                  } transition-all duration-300 uppercase relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-foreground' : 'bg-background'
                  } transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className={`bg-transparent hover:bg-beige-dark/90 hover:text-black text-black ${scrolled ? 'bg-transparent backdrop-blur-xl text-foreground shadow-sm' : 'bg-transparent text-background'
              } px-8 py-6 rounded-none font-bold tracking-widest uppercase border-2 border-beige-dark transition-all duration-300`}>
              Secure your spot
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-border/20">
            <div className="py-8 px-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-lg font-bold tracking-widest text-foreground hover:text-primary transition-colors uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-transparent hover:bg-beige-dark/90 text-black h-auto py-4 rounded-none font-bold tracking-widest uppercase text-lg border-2 border-beige-dark transition-all duration-300 mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Secure your spot
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}