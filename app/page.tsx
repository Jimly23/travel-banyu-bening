import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Unit from "./components/Unit";
import Rute from "./components/Rute";
import Testimonials from "./components/Testimonials";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Unit />
      <Rute />
      <Testimonials />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}
