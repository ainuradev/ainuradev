import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}