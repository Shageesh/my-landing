// components/FeaturesSection.tsx
'use client';
import { Rocket, BarChart3, Database } from 'lucide-react';

const featureData = [
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Launch your entire AI infrastructure pipeline in under 5 minutes with single-click Vercel integration."
  },
  {
    icon: BarChart3,
    title: "Unified Monitoring",
    description: "Track all your models and costs from a central, real-time dashboard. No more hidden fees."
  },
  {
    icon: Database,
    title: "Secure Data Layer",
    description: "Fully-managed Vector Database and model memory included, featuring SOC2 type 2 compliance out of the box."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-blue-600 font-semibold mb-2 block">POWERFUL FOUNDATION</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 mb-6">Built for scale, designed for speed.</h2>
          <p className="text-xl text-gray-600">The first comprehensive platform that empowers engineering teams to build and scale generative AI products faster than ever.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featureData.map((item, index) => (
            // Reusable component structure
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}