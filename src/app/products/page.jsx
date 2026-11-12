"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import products from "@/data/products";

const ProductsPage = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#F1F8E9] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#5FAE16] sm:text-xs">
              Our Products
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B2F5B] sm:text-5xl lg:text-6xl">
              Pharmaceutical solutions
              <span className="mt-1 block text-[#5FAE16]">
                built around quality.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore the BioCurex Pharma product catalogue across a range of
              therapeutic categories, developed with a strong focus on quality,
              reliability, and healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 flex flex-col gap-4 border-b border-[#D7E6C8] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5FAE16]">
                Product Catalogue
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#0B2F5B] sm:text-4xl">
                Our Pharmaceutical Range
              </h2>
            </div>

            <p className="text-sm font-medium text-slate-500">
              {products.length} Products
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-[#D7E6C8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/50 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FBF5]">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5FAE16]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#0B2F5B]">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[40px] text-xs leading-5 text-slate-500">
                    {product.description}
                  </p>

                  {/* Enquire Button */}
                  <div className="mt-5">
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#72C51B] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-lg hover:shadow-[#72C51B]/20"
                    >
                      Enquire
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-[#0B2F5B] px-6 py-10 sm:px-10 lg:px-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#72C51B]">
                  Need More Information?
                </p>

                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Looking for a specific pharmaceutical product?
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Contact BioCurex Pharma for product information, enquiries,
                  and healthcare solutions.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
              >
                Contact Us
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
