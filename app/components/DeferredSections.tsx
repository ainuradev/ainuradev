"use client";

import dynamic from "next/dynamic";

const TechStack = dynamic(() => import("./TechStack"), { ssr: false });
const Services = dynamic(() => import("./Services"), { ssr: false });
const Work = dynamic(() => import("./Work"), { ssr: false });
const Pricing = dynamic(() => import("./Pricing"), { ssr: false });
const FAQ = dynamic(() => import("./FAQ"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function DeferredSections() {
  return (
    <>
      <TechStack />
      <Services />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
