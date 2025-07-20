'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <div
        className={`hidden md:block backdrop-blur-[2px] backdrop-filter relative rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.11)] transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-r from-[#000000cc] to-[#333333cc]'
            : 'bg-gradient-to-r from-[#18181844] to-[#99999980]'
        }`}
      >
        <div className="relative flex items-center justify-center w-full px-6 py-5">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 mt-1">
            <Link href="/">
              <div className="bg-center bg-cover bg-no-repeat h-[39px] w-24 cursor-pointer">
                <Image
                  src="/assets/logo_white.svg"
                  alt="Instalily Logo"
                  width={96}
                  height={39}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-8 font-semibold text-gray-300 text-[15px]">
            <Link href="/" className="cursor-pointer hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <Link href="/about" className="cursor-pointer hover:text-white transition-colors duration-200">
              ABOUT
            </Link>
            <Link href="/news" className="cursor-pointer hover:text-white transition-colors duration-200">
              NEWS
            </Link>
            <Link href="/ai-dispatch" className="cursor-pointer hover:text-white transition-colors duration-200">
              AI DISPATCH
            </Link>
            <Link href="/careers" className="cursor-pointer hover:text-white transition-colors duration-200">
              CAREERS
            </Link>
          </div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Link href="/book-a-demo">
              <div className="box-border flex items-center justify-center h-[50px] w-auto px-5 rounded-2xl border border-white hover:bg-white transition-colors group">
                <div className="font-semibold text-[#fdfff7] group-hover:text-black text-[16px] whitespace-nowrap transition-colors">
                  Book a Demo
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Flush with edges */}
      <div className={`md:hidden w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#000000cc] to-[#333333cc]'
          : 'bg-gradient-to-r from-[#18181844] to-[#99999980]'
      } backdrop-blur-[2px] backdrop-filter`}>
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" onClick={closeMobileMenu}>
            <div className="h-[32px] w-20">
              <Image
                src="/assets/logo_white.svg"
                alt="Instalily Logo"
                width={80}
                height={32}
                className="object-contain"
              />
            </div>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        />
        
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#000000] to-[#333333] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <Image
                src="/assets/logo_white.svg"
                alt="Instalily Logo"
                width={80}
                height={32}
                className="object-contain"
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                >
                  HOME
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMobileMenu}
                  className="block text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                >
                  ABOUT
                </Link>
                <Link 
                  href="/news" 
                  onClick={closeMobileMenu}
                  className="block text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                >
                  NEWS
                </Link>
                <Link 
                  href="/ai-dispatch" 
                  onClick={closeMobileMenu}
                  className="block text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                >
                  AI DISPATCH
                </Link>
                <Link 
                  href="/careers" 
                  onClick={closeMobileMenu}
                  className="block text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                >
                  CAREERS
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="p-6 border-t border-gray-700">
              <Link href="/book-a-demo" onClick={closeMobileMenu}>
                <div className="w-full flex items-center justify-center h-12 rounded-xl border-2 border-white hover:bg-white transition-colors group">
                  <span className="font-semibold text-white group-hover:text-black text-lg transition-colors">
                    Book a Demo
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 