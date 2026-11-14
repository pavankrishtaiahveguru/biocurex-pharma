"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";
import contactInfo from "@/data/contact";
import HomeLink from "@/components/common/HomeLink";

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
            <HomeLink className="inline-flex cursor-pointer items-center">
              <Image
                src="/bio-curex-logo.png"
                alt="Biocurex Pharma"
                width={220}
                height={220}
                className="h-[85px] w-auto object-contain"
              />
            </HomeLink>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Innovating care, curing fast. Committed to delivering quality
              pharmaceutical and healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) =>
                link.href === "/" ? (
                  <HomeLink
                    key={link.name}
                    className="block cursor-pointer text-sm text-white/70 transition hover:text-[#72c51b]"
                  >
                    {link.name}
                  </HomeLink>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block cursor-pointer text-sm text-white/70 transition hover:text-[#72c51b]"
                  >
                    {link.name}
                  </Link>
                ),
              )}
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
                  className="block cursor-pointer text-sm text-white/70 transition hover:text-[#72c51b]"
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
              {contactInfo.offices.map((office) => (
                <div key={office.name} className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#72c51b]" />
                  <div className="text-sm leading-6 text-white/70">
                    <h4 className="font-semibold text-white">{office.name}</h4>
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer transition hover:text-[#72c51b]"
                    >
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                  </div>
                </div>
              ))}

              {contactInfo.phones.map((phone) => (
                <div key={phone.label} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#72c51b]" />

                  <a
                    href={phone.href}
                    className="cursor-pointer text-sm text-white/70 transition hover:text-[#72c51b]"
                  >
                    {phone.display}
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#72c51b]" />

                <a
                  href={contactInfo.emailHref}
                  className="cursor-pointer break-all text-sm text-white/70 transition hover:text-[#72c51b]"
                >
                  {contactInfo.email}
                </a>
              </div>
              <a
                href="https://www.instagram.com/biocurexpharma?cplk=ZjFmd2ZicDU1azR2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioCurex Pharma Instagram"
                className="inline-flex cursor-pointer items-center gap-3 text-sm text-white/70 transition hover:text-[#72c51b]"
              >
                <FaInstagram className="h-5 w-5 text-[#72c51b]" />
                <span>Instagram</span>
              </a>
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
