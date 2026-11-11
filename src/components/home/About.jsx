"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Quality-driven pharmaceutical solutions",
    "Commitment to healthcare and patient wellbeing",
    "Innovation focused approach",
    "Reliable and responsible healthcare partner",
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FAE16]">
                About BioCurex
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
              Advancing Healthcare Through
              <span className="block text-[#5FAE16]">Quality & Innovation</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              BioCurex Pharma is committed to delivering quality pharmaceutical
              and healthcare solutions with a strong focus on innovation,
              reliability, and care.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Established in 2017, we believe that better healthcare begins with
              quality products, responsible practices, and a continuous
              commitment to improving the lives of the people we serve.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5FAE16]" />
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B2F5B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#09264A] hover:shadow-lg"
              >
                Discover More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-[#5FAE16]/10" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#0B2F5B]/10" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/home/about.png"
                alt="BioCurex Pharma healthcare and pharmaceutical solutions"
                width={800}
                height={650}
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062d57]/50 via-transparent to-transparent" />

              {/* Established Badge */}
              <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:rounded-2xl sm:px-5 sm:py-4">
                <p className="text-lg font-extrabold text-[#0B2F5B] sm:text-2xl">
                  2017
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#5FAE16] sm:text-xs sm:tracking-[0.15em]">
                  Established
                </p>
              </div>

              {/* Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/90 p-3.5 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5FAE16] sm:text-sm sm:tracking-[0.15em]">
                  BioCurex Pharma
                </p>

                <p className="mt-1 text-sm font-bold text-[#0B2F5B] sm:text-lg">
                  Innovating Care, Curing Fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
