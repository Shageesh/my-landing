// app/page.tsx
'use client'; // This can be a Server Component, but Client is easier for dynamic UI interaction with hooks

import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}