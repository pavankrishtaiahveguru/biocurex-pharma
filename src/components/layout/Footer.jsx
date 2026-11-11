"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Nutraceuticals", href: "/products" },
    { name: "Tablets", href: "/products" },
    { name: "Capsules", href: "/products" },
    { name: "Softgel Capsules", href: "/products" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#062d57] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/bio-curex-logo.png"
                alt="Biocurex Pharma"
                width={220}
                height={220}
                className="h-[85px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Innovating care, curing fast. Committed to delivering quality
              pharmaceutical and healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/70 transition hover:text-[#72c51b]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold">Our Products</h3>

            <div className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/70 transition hover:text-[#72c51b]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#72c51b]" />

                <p className="text-sm leading-6 text-white/70">
                  Biocurex Pharma
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#72c51b]" />

                <a
                  href="tel:+919999999999"
                  className="text-sm text-white/70 transition hover:text-[#72c51b]"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#72c51b]" />

                <a
                  href="mailto:info@biocurexpharma.com"
                  className="text-sm text-white/70 transition hover:text-[#72c51b]"
                >
                  info@biocurexpharma.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {currentYear} Biocurex Pharma. All rights reserved.
          </p>

          <DevelopedByStaffArc />

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5ca817] transition hover:bg-[#47820f]"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
