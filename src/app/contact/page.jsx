"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Send, Clock } from "lucide-react";

const ContactPage = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      text: "Andhra Pradesh, India",
      href: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+91 99999 99999",
      href: "tel:+919999999999",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "info@biocurexpharma.com",
      href: "mailto:info@biocurexpharma.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: "Monday – Saturday, 9:00 AM – 6:00 PM",
      href: "#",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#062d57]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,174,22,0.22),transparent_40%)]" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#5FAE16]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#72c51b]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#72c51b]">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let’s Start a
              <span className="block text-[#72c51b]">Conversation</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Have a question about our products, services, or business
              opportunities? Get in touch with BioCurex Pharma. Our team is
              ready to assist you.
            </p>

            <div className="mt-8">
              <Link
                href="#contact-form"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817] hover:shadow-xl hover:shadow-[#72c51b]/20"
              >
                Send an Enquiry
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F8E9] text-[#5FAE16] transition-colors duration-300 group-hover:bg-[#5FAE16] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0B2F5B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Company Message */}
      <section id="contact-form" className="bg-[#F1F8E9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Left Content */}
            <div className="lg:pt-6">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FAE16]">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl">
                We’re Here to
                <span className="block text-[#5FAE16]">Help You</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Whether you are looking for product information, business
                enquiries, or partnership opportunities, we would be happy to
                hear from you.
              </p>

              <div className="mt-8 rounded-2xl border border-[#5FAE16]/20 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#5FAE16]">
                  BioCurex Pharma
                </p>

                <p className="mt-2 text-xl font-bold text-[#0B2F5B]">
                  Innovating Care, Curing Fast.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Established in 2017, BioCurex Pharma is committed to quality,
                  innovation, and responsible healthcare solutions.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0B2F5B]">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and our team will get back to you.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#0B2F5B]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#5FAE16] focus:bg-white focus:ring-4 focus:ring-[#5FAE16]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#0B2F5B]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#5FAE16] focus:bg-white focus:ring-4 focus:ring-[#5FAE16]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#0B2F5B]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#5FAE16] focus:bg-white focus:ring-4 focus:ring-[#5FAE16]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#0B2F5B]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      placeholder="Enter subject"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#5FAE16] focus:bg-white focus:ring-4 focus:ring-[#5FAE16]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#0B2F5B]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#5FAE16] focus:bg-white focus:ring-4 focus:ring-[#5FAE16]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0B2F5B] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#09264A] hover:shadow-lg sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2F5B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Have a Business Enquiry?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Connect with BioCurex Pharma to explore products, partnerships, and
            opportunities to work together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@biocurexpharma.com"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817]"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>

            <a
              href="tel:+919999999999"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B2F5B]"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
