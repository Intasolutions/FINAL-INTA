import React from "react";
import { Card } from "./Card"; // adjust the path if needed

export default function CardGrid() {
  return (
    <div className="min-h-screenflex justify-center items-center p-10">
      {/* Grid container for cards */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title="Make things float in air"
          description="Hover over this card to unleash the power of CSS perspective."
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="https://twitter.com/mannupaaji"
        />
        <Card
          title="Another Floating Card"
          description="CSS + Perspective = WOW effects on hover."
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80"
          link="https://twitter.com/mannupaaji"
        />
        <Card
          title="Elevate Your UI"
          description="Engage your users with 3D interactions!"
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80"
          link="https://twitter.com/mannupaaji"
        />
      </div>
    </div>
  );
}
