"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
  Microscope,
  BadgeCheck,
  ClipboardCheck,
  Factory,
} from "lucide-react";

const QualityPage = () => {
  const qualityPrinciples = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "Quality is at the core of every product and process, from development and manufacturing to final delivery.",
    },
    {
      icon: Microscope,
      title: "Scientific Approach",
      description:
        "We follow systematic and science-driven practices to maintain consistency, reliability, and product performance.",
    },
    {
      icon: BadgeCheck,
      title: "Consistent Standards",
      description:
        "Our processes are designed to maintain consistent standards across our pharmaceutical product portfolio.",
    },
    {
      icon: ClipboardCheck,
      title: "Controlled Processes",
      description:
        "Careful monitoring and documented procedures help ensure quality throughout the product lifecycle.",
    },
  ];

  const qualityPoints = [
    "Quality-focused pharmaceutical manufacturing",
    "Controlled and documented processes",
    "Consistent product quality and performance",
    "Focus on safety, reliability, and compliance",
    "Continuous improvement across operations",
    "Commitment to customer and patient wellbeing",
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B2F5B]">
        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5FAE16]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#72C51B]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#72C51B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#72C51B]">
                Quality
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Quality at the heart of
              <span className="block text-[#72C51B]">everything we do.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              At BioCurex Pharma, our commitment to quality guides every stage
              of our pharmaceutical journey — from product development and
              manufacturing to delivery.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
              >
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B2F5B]"
              >
                Talk to Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Introduction */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-[#5FAE16]/10" />

              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#0B2F5B]/10" />

              <div className="relative overflow-hidden rounded-3xl bg-[#F1F8E9]">
                <Image
                  src="/images/quality/quality.png"
                  alt="BioCurex Pharma quality and pharmaceutical manufacturing"
                  width={900}
                  height={700}
                  className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5B]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5FAE16]">
                    BioCurex Pharma
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#0B2F5B] sm:text-xl">
                    Quality. Reliability. Care.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                  Our Commitment
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
                Built on a foundation of
                <span className="block text-[#5FAE16]">quality and trust.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Quality is not simply a final inspection at BioCurex Pharma. It
                is an integral part of how we approach our products, processes,
                and responsibilities.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We strive to maintain a disciplined approach to pharmaceutical
                quality while continuously improving our processes and standards
                to deliver dependable healthcare solutions.
              </p>

              {/* Points */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualityPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5FAE16]" />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="bg-[#F1F8E9] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                Quality Principles
              </span>

              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
              Our approach to
              <span className="block text-[#5FAE16]">
                pharmaceutical quality.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Every aspect of our operations is guided by a commitment to
              dependable quality, responsible practices, and continuous
              improvement.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#D7E6C8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F8E9] text-[#5FAE16] transition-colors duration-300 group-hover:bg-[#5FAE16] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0B2F5B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                  Quality Process
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
                Quality through
                <span className="block text-[#5FAE16]">every stage.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Our quality-focused approach extends across the complete
                pharmaceutical product lifecycle. We emphasize controlled
                processes, documentation, monitoring, and continuous
                improvement.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    number: "01",
                    title: "Product Development",
                    text: "A structured approach to developing reliable pharmaceutical formulations.",
                  },
                  {
                    number: "02",
                    title: "Manufacturing",
                    text: "Controlled processes designed to support consistency and product quality.",
                  },
                  {
                    number: "03",
                    title: "Quality Control",
                    text: "Careful testing, monitoring, and documentation throughout production.",
                  },
                  {
                    number: "04",
                    title: "Continuous Improvement",
                    text: "Ongoing efforts to strengthen processes, performance, and quality standards.",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2F5B] text-xs font-bold text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#0B2F5B]">{item.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-[#0B2F5B] p-8 sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72C51B] text-white">
                  <FlaskConical className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-extrabold text-white sm:text-3xl">
                  Quality-driven
                  <span className="block text-[#72C51B]">
                    healthcare solutions.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  Our focus remains on delivering dependable pharmaceutical
                  solutions while maintaining a culture of responsibility,
                  consistency, and continuous improvement.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Factory className="h-6 w-6 text-[#72C51B]" />
                    <p className="mt-3 text-sm font-bold text-white">
                      Controlled
                    </p>
                    <p className="mt-1 text-xs text-white/50">Processes</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <BadgeCheck className="h-6 w-6 text-[#72C51B]" />
                    <p className="mt-3 text-sm font-bold text-white">
                      Consistent
                    </p>
                    <p className="mt-1 text-xs text-white/50">Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F1F8E9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0B2F5B] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5FAE16]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#72C51B]/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#72C51B]">
                  BioCurex Pharma
                </p>

                <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  Quality you can trust.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Discover our pharmaceutical product portfolio and learn more
                  about our commitment to quality and healthcare.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
              >
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityPage;
