
import About from "@/components/about";
import { GallerySection } from "@/components/gallery-section";
import Hero from "@/components/hero";
import Workshop from "@/components/workshop";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Workshop />
      <GallerySection />
      {/* <Location /> */}
    </main>
  );
}
