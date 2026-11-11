"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality",
      description:
        "We place quality at the center of our products, processes, and commitment to healthcare.",
    },
    {
      icon: FlaskConical,
      title: "Innovation",
      description:
        "We continuously seek better approaches and solutions to support evolving healthcare needs.",
    },
    {
      icon: HeartPulse,
      title: "Patient Focus",
      description:
        "Our work is guided by the importance of patient wellbeing, safety, and dependable healthcare.",
    },
    {
      icon: Users,
      title: "Trust",
      description:
        "We aim to build lasting relationships through reliability, responsibility, and consistent performance.",
    },
  ];

  const highlights = [
    "Quality-driven pharmaceutical solutions",
    "Commitment to healthcare and patient wellbeing",
    "Innovation-focused approach",
    "Reliable and responsible healthcare partner",
    "Focus on consistent product quality",
    "Continuous improvement across our operations",
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B2F5B]">
        {/* Decorative Background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5FAE16]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#72C51B]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#72C51B]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#72C51B]">
                About BioCurex
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Advancing healthcare through
              <span className="block text-[#72C51B]">
                quality & innovation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              BioCurex Pharma is committed to delivering quality pharmaceutical
              and healthcare solutions with a strong focus on innovation,
              reliability, and care.
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
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-[#5FAE16]/10" />

              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#0B2F5B]/10" />

              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/home/about.png"
                  alt="BioCurex Pharma healthcare and pharmaceutical solutions"
                  width={900}
                  height={700}
                  className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5B]/55 via-transparent to-transparent" />

                {/* Established Badge */}
                <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:px-5 sm:py-4">
                  <p className="text-xl font-extrabold text-[#0B2F5B] sm:text-2xl">
                    2017
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5FAE16] sm:text-xs">
                    Established
                  </p>
                </div>

                {/* Image Badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5FAE16] sm:text-sm">
                    BioCurex Pharma
                  </p>

                  <p className="mt-1 text-base font-bold text-[#0B2F5B] sm:text-lg">
                    Innovating Care, Curing Fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
                Committed to better
                <span className="block text-[#5FAE16]">
                  healthcare outcomes.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                BioCurex Pharma is a pharmaceutical and healthcare company
                focused on delivering quality-driven solutions that contribute
                to better health and wellbeing.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Since our establishment in 2017, we have focused on building a
                responsible and reliable approach to pharmaceutical products,
                with quality, innovation, and care guiding our work.
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F1F8E9] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl bg-[#0B2F5B] p-8 sm:p-10 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72C51B] text-white">
                <Target className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#72C51B]">
                Our Mission
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Delivering quality with purpose.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                To provide dependable pharmaceutical and healthcare solutions
                through a strong commitment to quality, responsible practices,
                innovation, and customer care.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-[#D7E6C8] bg-white p-8 sm:p-10 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1F8E9] text-[#5FAE16]">
                <HeartPulse className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                Our Vision
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#0B2F5B] sm:text-4xl">
                Building a healthier tomorrow.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                To grow as a trusted healthcare partner by continuously
                improving our products, processes, and capabilities while
                contributing to better healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                Our Values
              </span>

              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
              What guides
              <span className="text-[#5FAE16]"> our work.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our values shape the way we develop products, work with partners,
              and serve the healthcare community.
            </p>
          </div>

          {/* Value Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F8E9] text-[#5FAE16] transition-all duration-300 group-hover:bg-[#5FAE16] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0B2F5B]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BioCurex */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5FAE16]">
                  Why BioCurex
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">
                A partner built around
                <span className="block text-[#5FAE16]">quality and trust.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                We combine a quality-focused mindset with a commitment to
                innovation and responsible healthcare practices.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Quality-focused approach",
                  "Reliable pharmaceutical solutions",
                  "Patient and customer-centric mindset",
                  "Continuous improvement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#5FAE16]" />

                    <span className="text-sm font-semibold text-[#0B2F5B]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-[#0B2F5B] p-8 sm:p-10 lg:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72C51B] text-white">
                  <FlaskConical className="h-8 w-8" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#72C51B]">
                  BioCurex Pharma
                </p>

                <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  Innovating Care,
                  <span className="block text-[#72C51B]">Curing Fast.</span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  Our commitment is simple — to work toward better healthcare
                  through quality products, responsible practices, and
                  continuous innovation.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-extrabold text-[#72C51B]">
                      2017
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                      Established
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-extrabold text-[#72C51B]">
                      Quality
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                      Driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
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
                  Let&apos;s build a healthier tomorrow.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Explore our pharmaceutical products or get in touch with
                  BioCurex Pharma to learn more about our solutions.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
