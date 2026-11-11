"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", dropdown: true },
    { name: "Quality", href: "/quality" },
    { name: "Contact Us", href: "/contact" },
  ];

  const productCategories = [
    { name: "Pharmaceuticals", href: "/products/pharmaceuticals" },
    { name: "Nutraceuticals", href: "/products/nutraceuticals" },
    { name: "All Products", href: "/products" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
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
            <div key={link.name} className="relative">
              {link.dropdown ? (
                <button
                  type="button"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0B2F5B]"
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#0B2F5B]"
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && isProductsOpen && (
                <div className="absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      onClick={() => setIsProductsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F1F8E9] hover:text-[#0B2F5B]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-[#0B2F5B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#09264A] hover:shadow-lg"
          >
            <Phone size={17} />
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#0B2F5B] transition-colors hover:bg-slate-100 lg:hidden"
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
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="flex w-full items-center justify-between border-b border-slate-100 px-2 py-4 text-left text-sm font-semibold text-slate-700"
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            isProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isProductsOpen && (
                        <div className="ml-4 border-l-2 border-[#5FAE16] pl-4">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              onClick={closeMenu}
                              className="block py-3 text-sm text-slate-600"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block border-b border-slate-100 px-2 py-4 text-sm font-semibold text-slate-700"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0B2F5B] px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone size={17} />
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
