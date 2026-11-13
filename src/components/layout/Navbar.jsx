"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import contactInfo from "@/data/contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Contact Us", href: "/contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex h-20 w-auto items-center gap-3"
        >
          <Image
            src="/logo/logo.png"
            alt="Biocurex Pharma"
            width={220}
            height={220}
            priority
            className="h-[70px] w-auto object-contain"
          />

          <div className="flex flex-col items-center leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-[#0B2F5B]">
              BIO<span className="text-[#5FAE16]">CUREX</span>
            </span>

            <span className="mt-1 text-[11px] font-semibold tracking-[0.4em] text-[#0B2F5B]">
              PHARMA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="cursor-pointer text-sm font-semibold text-slate-700 transition-colors hover:text-[#0B2F5B]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex">
          <a
            href={contactInfo.phones[0].href}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B2F5B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#09264A] hover:shadow-lg"
          >
            <Phone size={17} />
            {contactInfo.phones[0].display}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer rounded-lg p-2 text-[#0B2F5B] transition-colors hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block cursor-pointer border-b border-slate-100 px-2 py-4 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0B2F5B]"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={contactInfo.phones[0].href}
                onClick={closeMenu}
                className="mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0B2F5B] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#09264A]"
              >
                <Phone size={17} />
                {contactInfo.phones[0].display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
