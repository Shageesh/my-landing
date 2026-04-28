// components/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Need lucide-react (npm install lucide-react)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Company', href: '#company' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Aether<span className="text-gray-900">Dynamics</span>
        }
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 text-center text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}