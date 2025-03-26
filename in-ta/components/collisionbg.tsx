import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/collision";
import { InfiniteMoving } from "./NewsUpdates";


export function BackgroundBeams() {
  return (
    <BackgroundBeamsWithCollision>
      {/* Testimonial Section */}
      <div className="relative z-20 w-full max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-black dark:text-white font-sans tracking-tight p-10">
        News Updates 
        </h2>
        <p className=" text-lg text-gray-600 dark:text-gray-300">
          See what our customers have to say about our services.
        </p>

        {/* Aceternity UI Testimonials */}
        <div className="mt-8">
   <InfiniteMoving />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
