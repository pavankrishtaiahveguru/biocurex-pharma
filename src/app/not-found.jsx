"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#F8F7F3] px-6 py-20">
      {/* Decorative Background */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#5FAE16]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#0B2F5B]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* 404 */}
        <div className="relative">
          <span className="text-[9rem] font-black leading-none tracking-[-0.08em] text-[#0B2F5B]/10 sm:text-[12rem]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-[#5FAE16]/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5FAE16]">
                Page Not Found
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl">
          Oops! This page doesn’t exist.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          The page you’re looking for may have been moved, removed, or the
          address may be incorrect. Let’s get you back to BioCurex Pharma.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817] hover:shadow-xl hover:shadow-[#72c51b]/20"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#0B2F5B] bg-transparent px-7 py-3.5 text-sm font-bold text-[#0B2F5B] transition-all duration-300 hover:bg-[#0B2F5B] hover:text-white"
          >
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link
              href="/about"
              className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#5FAE16]"
            >
              About Us
            </Link>

            <Link
              href="/products"
              className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#5FAE16]"
            >
              Products
            </Link>

            <Link
              href="/quality"
              className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#5FAE16]"
            >
              Quality
            </Link>

            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#5FAE16]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-8">
          <p className="text-sm font-extrabold tracking-tight text-[#0B2F5B]">
            BIO<span className="text-[#5FAE16]">CUREX</span>
          </p>

          <p className="mt-1 text-[9px] font-semibold tracking-[0.4em] text-[#0B2F5B]">
            PHARMA
          </p>

          <p className="mt-3 text-xs font-medium text-slate-400">
            Innovating Care, Curing Fast.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
