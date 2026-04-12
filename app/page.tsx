import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
