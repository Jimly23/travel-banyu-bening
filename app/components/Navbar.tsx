"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Armada", href: "#unit" },
    { label: "Rute", href: "#rute" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Tarif", href: "#tarif" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 glass-nav border-b border-outline-variant shadow-sm h-20 transition-all duration-300">
      <div className="flex justify-between items-center h-full md:px-margin-desktop px-margin-mobile max-w-max mx-auto">
        <span className="font-bold text-secondary text-2xl">Banyu Bening.</span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 cursor-pointer">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-secondary font-body-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Desktop CTA */}
        <a 
          href="https://wa.me/6282329322353?text=Halo%BanyuBeningTrans!%20Saya%20ingin%20memesan%20layanan%20travel.%20Bisa%20tolong%20dibantu%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-secondary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 hover:shadow-md transition-all text-center"
        >
          Pesan Sekarang
        </a>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 text-on-surface hover:text-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface shadow-xl border-b border-outline-variant flex flex-col">
          <div className="flex flex-col px-margin-desktop py-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-secondary font-body-md text-lg block border-b border-outline-variant pb-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://wa.me/6282329322353?text=Halo%BanyuBeningTrans!%20Saya%20ingin%20memesan%20layanan%20travel.%20Bisa%20tolong%20dibantu%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-secondary text-white text-base font-semibold px-6 py-3.5 rounded-xl hover:scale-105 hover:shadow-md active:scale-95 transition-all text-center"
            >
              Pesan Sekarang via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}