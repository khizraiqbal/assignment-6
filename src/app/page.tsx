
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/team";
import React from "react";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
  <Navbar/>
    <Hero/>
    <Team/>
   <Testimonials/>
   <Footer/>

   </div>
  );
}
