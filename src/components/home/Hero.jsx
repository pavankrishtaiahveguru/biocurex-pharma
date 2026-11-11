"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#062d57]/30" />

      {/* Green Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062d57]/70 via-[#062d57]/45 to-[#062d57]/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Small Label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#72c51b]/40 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#72c51b]" />
            <span className="text-sm font-semibold tracking-wide text-white">
              BIOCUREX PHARMA
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Innovating Care,
            <br />
            <span className="text-[#72c51b]">Curing Fast.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Committed to delivering high-quality pharmaceutical and healthcare
            solutions that improve lives through innovation, quality, and care.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817] hover:shadow-xl hover:shadow-[#72c51b]/20"
            >
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#062d57]"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-2xl font-bold text-[#72c51b]">Quality</p>
              <p className="mt-1 text-xs text-white/60">Focused Healthcare</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#72c51b]">Care</p>
              <p className="mt-1 text-xs text-white/60">Patient First</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#72c51b]">Innovation</p>
              <p className="mt-1 text-xs text-white/60">Better Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};

export default Hero;
