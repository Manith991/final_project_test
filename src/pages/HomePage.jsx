import React from "react";
import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";
import { CarouselComponent } from "../components/HeaderFooter/CarouselComponent";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <NavbarComponent />
        <div className="pt-16">
          {" "}
          {/* Add padding to prevent carousel from being hidden under navbar */}
          <CarouselComponent />
        </div>
      </div>
      
    </>
  );
}
