"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import products from "@/data/products";

const Products = () => {
  return (
    <section className="bg-[#F1F8E9] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#5FAE16] sm:text-xs">
              Products
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B2F5B] sm:text-5xl lg:text-6xl">
              A curated pharmaceutical
              <span className="mt-1 block w-fit px-2 py-1 text-[#5FAE16]">
                catalogue.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore our leading formulations across major therapeutic
              categories — each produced under WHO-GMP protocols.
            </p>
          </div>

          {/* Header CTA */}
          <Link
            href="/products"
            className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5FAE16] hover:shadow-xl hover:shadow-[#72C51B]/20"
          >
            View Full Catalogue
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Product Grid - First 6 Products Only */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-[#D7E6C8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl"
            >
              {/* Product Image */}

              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Product Info */}
              <div className="px-5 pb-5 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5FAE16]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0B2F5B]">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {product.description}
                </p>

                {/* Enquire Button */}
                <div className="mt-5">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B2F5B] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#072344] hover:shadow-lg"
                  >
                    Enquire
                    <Send className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B2F5B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#072344] hover:shadow-xl"
          >
            Explore All Products
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
