"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import contactInfo from "@/data/contact";

const ContactPage = () => {
  const subjectRef = useRef(null);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product && subjectRef.current) {
      subjectRef.current.value = product;
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(null);

    const submittedForm = event.currentTarget;
    if (!submittedForm.reportValidity()) {
      return;
    }

    const submittedValues = new FormData(submittedForm);
    const product = new URLSearchParams(window.location.search).get("product");
    const message = [
      "New Enquiry - BioCurex Pharma",
      "",
      `Name: ${submittedValues.get("name")}`,
      `Email: ${submittedValues.get("email")}`,
      `Phone: ${submittedValues.get("phone")}`,
      `Product/Subject: ${submittedValues.get("subject")}`,
      `Message: ${submittedValues.get("message")}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

    try {
      const whatsappWindow = window.open(whatsappUrl, "_blank");
      if (!whatsappWindow) {
        throw new Error("WhatsApp could not be opened.");
      }
      whatsappWindow.opener = null;
      setNotice({
        type: "success",
        message: "Your enquiry is ready to send on WhatsApp.",
      });
      submittedForm.reset();
      if (subjectRef.current) {
        subjectRef.current.value = product || "";
      }
    } catch {
      setNotice({
        type: "error",
        message:
          "We could not open WhatsApp. Please allow pop-ups and try again.",
      });
    }
  };

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
          <div className="grid gap-6 lg:grid-cols-2">
            {contactInfo.offices.map((office) => {
              const phone =
                typeof office.phoneIndex === "number"
                  ? contactInfo.phones[office.phoneIndex]
                  : null;

              return (
                <article
                  key={office.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F8E9] text-[#5FAE16]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold text-[#0B2F5B]">
                        {office.name}
                      </h2>

                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block cursor-pointer text-sm leading-6 text-slate-600 transition hover:text-[#5FAE16]"
                      >
                        {office.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.phones.map((phone) => (
              <a
                key={phone.label}
                href={phone.href}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-[#0B2F5B] shadow-sm transition hover:border-[#5FAE16]/40 hover:text-[#5FAE16]"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#5FAE16]" />
                <span>
                  <span className="block text-xs font-medium text-slate-500">
                    {phone.label}
                  </span>
                  {phone.display}
                </span>
              </a>
            ))}
            <a
              href={contactInfo.emailHref}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-[#0B2F5B] shadow-sm transition hover:border-[#5FAE16]/40 hover:text-[#5FAE16]"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#5FAE16]" />
              <span className="min-w-0 break-all">{contactInfo.email}</span>
            </a>
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
                  Fill in your details to prepare an enquiry in WhatsApp.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
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
                      name="name"
                      type="text"
                      required
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
                      name="email"
                      type="email"
                      required
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
                      name="phone"
                      type="tel"
                      required
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
                      name="subject"
                      type="text"
                      ref={subjectRef}
                      required
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
                    name="message"
                    rows={6}
                    required
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
                {notice && (
                  <p
                    role={notice.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`fixed bottom-5 right-5 z-[60] w-[calc(100%-2.5rem)] max-w-sm rounded-2xl px-5 py-4 text-sm font-medium shadow-xl sm:w-auto ${
                      notice.type === "error"
                        ? "bg-red-50 text-red-700 ring-1 ring-red-200"
                        : "bg-white text-[#0B2F5B] ring-1 ring-[#5FAE16]/30"
                    }`}
                  >
                    {notice.message}
                  </p>
                )}
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
              href={contactInfo.emailHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817]"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>

            <a
              href={contactInfo.phones[0].href}
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
