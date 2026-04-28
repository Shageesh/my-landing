'use client';

import Button from './ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Your Project
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Build something amazing with Next.js and Tailwind CSS
          </p>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
