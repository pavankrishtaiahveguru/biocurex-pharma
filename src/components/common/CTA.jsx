"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import contactInfo from "@/data/contact";

const CTA = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B2F5B] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5FAE16]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#72C51B]/10 blur-3xl" />

          {/* Green Accent */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-[#72C51B]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#72C51B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#72C51B] sm:text-xs">
                  Let&apos;s Connect
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for reliable
                <span className="block text-[#72C51B]">
                  pharmaceutical solutions?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Connect with BioCurex Pharma to learn more about our products,
                healthcare solutions, and partnership opportunities.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B2F5B]"
                >
                  <Phone className="h-4 w-4" />
                  Explore Products
                </Link>
              </div>

              <a
                href={contactInfo.phones[0].href}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-[#72C51B]"
              >
                <Phone className="h-4 w-4" />
                Call {contactInfo.phones[0].display}
              </a>
            </div>

            {/* Right Side */}
            <div className="hidden lg:block">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#72C51B]/30 bg-white/5">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#72C51B]">
                  <ArrowRight className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
