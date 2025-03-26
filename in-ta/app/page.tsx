import ScrollSection from "@/components/ui/ScrollSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import Cursor from "@/components/Coursor";
import { Card } from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import { MArquee } from "@/components/MArquee";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/collisionbg";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="scroll-smooth h-screen w-full overflow-y-auto snap-y snap-mandatory">
      <Cursor />
      <Navbar />

      <section className="snap-start h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section className="snap-start h-screen flex items-center justify-center relative z-20">
  <div className="w-full max-w-7xl p-10">
    <About />
  </div>
</section>

<section className="snap-start h-screen flex items-center justify-center relative z-20">
  <div className="w-full max-w-7xl p-5 px-[150px]">
    <Grid />
  </div>
</section>


      <section className="snap-start h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl relative z-10 p-5 mb-6">
          <Services />
        </div>
      </section>

      <section className="snap-start h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-7xl text-center px-10 flex flex-col items-center z-10">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <CardGrid />
        </div>
      </section>

      <section className="snap-start h-screen flex items-center justify-center">
        <BackgroundBeams />
      </section>
      <section className="snap-start  relative z-20">
  <Footer />
</section>

    </main>
  );
}


