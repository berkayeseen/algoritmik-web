"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // "Deneyimler" linki eklendi
  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Neden Kodlama Eğitimi?', path: '/neden-yazilim' }, 
    { name: 'Eğitimlerimiz', path: '/egitimlerimiz' },
    { name: 'Deneyimler', path: '/deneyimler' }, // Yeni eklenen menü
    { name: 'Biz Kimiz', path: '/biz-kimiz' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Alanı */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-blue tracking-tight">
              Algoritmik<span className="text-brand-gold">.</span>
            </Link>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-brand-blue border-b-2 border-brand-blue py-2' 
                      : 'text-brand-dark hover:text-brand-blue py-2'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobil Hamburger Butonu */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-blue focus:outline-none"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:text-brand-blue hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}