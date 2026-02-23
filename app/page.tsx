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
          boxShadow: "0 10px 30px rgba(37, 211, 102, 0.45)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.38c-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.14-.17.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.59 1.1 2.77.13.18 1.88 2.86 4.55 4.01.64.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.06-.11-.24-.18-.51-.31zM16 5.5A10.5 10.5 0 0 0 6.9 21.2L5.5 26.5l5.43-1.35A10.5 10.5 0 1 0 16 5.5zm0 19.1c-1.67 0-3.3-.44-4.73-1.29l-.34-.2-3.23.8.86-3.15-.22-.36a8.6 8.6 0 1 1 7.66 4.2z" />
        </svg>
      </a>
    </main>
  );
}
