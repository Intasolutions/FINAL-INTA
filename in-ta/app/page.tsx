import ScrollSection from "@/components/ui/ScrollSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import Cursor from "@/components/Coursor";


export default function Home() {
  return (
    <main className="scroll-smooth">
      <Cursor />

      <Navbar />
      <ScrollSection >
        <Hero />
      </ScrollSection>

      <ScrollSection > 

       <div className="p-10">
       <About />
       </div>
      </ScrollSection>

      <ScrollSection >
      <div className="p-5 px-[150px]">
      <Grid />
      </div>
      </ScrollSection>
      <ScrollSection>
      
          {/* Services content */}
          <div className="relative z-10 p-5 mb-6">
            <Services />
          </div>
       
      </ScrollSection>
    </main>
  );
}
