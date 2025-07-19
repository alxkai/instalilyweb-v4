'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`backdrop-blur-[2px] backdrop-filter relative rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.11)] transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#000000cc] to-[#333333cc]'
          : 'bg-gradient-to-r from-[#18181844] to-[#99999980]'
      }`}
    >
      <div className="relative flex items-center justify-center w-full px-6 py-5">
        {/* Logo on the left */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 mt-1">
          <div className="bg-center bg-cover bg-no-repeat h-[39px] w-24">
            <Image
              src="/assets/logo_white.svg"
              alt="Instalily Logo"
              width={96}
              height={39}
              className="object-contain"
            />
          </div>
        </div>

        {/* Centered Nav Links */}
        <div className="flex items-center gap-8 font-semibold text-[#fdfff7] text-[15px]">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">NEWS</p>
          <p className="cursor-pointer">AI DISPATCH</p>
          <p className="cursor-pointer">CAREERS</p>
        </div>

        {/* Button on the right */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Link href="/book-a-demo">
            <div className="box-border flex items-center justify-center h-[50px] w-auto px-5 rounded-2xl border border-white">
              <div className="font-semibold text-[#fdfff7] text-[16px] whitespace-nowrap">
                Book a Demo
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 