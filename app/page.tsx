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

      <a
        href="https://wa.me/6288293427818"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{
          background: "#25D366",
          boxShadow: "0 10px 28px rgba(37, 211, 102, 0.45)",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.787-1.48-1.76-1.653-2.058-.174-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.1-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.148.198 2.097 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.174-1.413-.075-.124-.272-.198-.57-.347M12.004 2.003a9.94 9.94 0 0 0-8.5 15.117L2 22l5.098-1.337a9.95 9.95 0 0 0 4.904 1.263h.004c5.514 0 9.995-4.48 9.998-9.994a9.94 9.94 0 0 0-2.93-7.072 9.94 9.94 0 0 0-7.07-2.93m-.002 18.13h-.003a8.3 8.3 0 0 1-4.22-1.152l-.303-.18-3.026.794.807-2.95-.197-.304a8.3 8.3 0 0 1-1.277-4.437c.003-4.593 3.743-8.33 8.34-8.33a8.27 8.27 0 0 1 5.93 2.458 8.27 8.27 0 0 1 2.437 5.934c-.002 4.593-3.744 8.33-8.34 8.33" />
        </svg>
      </a>
    </main>
  );
}
