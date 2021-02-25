import React, { useState, useEffect } from "react";
import NavBar from "../components/home/navBar";
import ZillowTestimonials from "../components/zillowTestimonials";
import Footer from "../components/home/footer";

export default function Testimonials() {
  return (
    <div>
      <div>
        <NavBar />
        <ZillowTestimonials />
      </div>
    </div>
  );
}
