
import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Location from "@/components/location";
import Workshop from "@/components/workshop";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Workshop />
      <Location />
    </main>
  );
}
