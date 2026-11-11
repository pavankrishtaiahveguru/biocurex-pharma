"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Azimed-500",
      category: "Antibiotic",
      description: "Azithromycin Tablets I.P. 500 mg",
      image: "/images/products/azimed-500.png",
    },
    {
      id: 2,
      name: "Lizowell 600",
      category: "Antibiotic",
      description: "Linezolid 600 mg Tablets",
      image: "/images/products/lizowell-600.png",
    },
    {
      id: 3,
      name: "Thio ETX",
      category: "Pain & Inflammation",
      description: "Etoricoxib 60 mg + Thiocolchicoside 4 mg",
      image: "/images/products/thio-etx.png",
    },
    {
      id: 4,
      name: "Steroflaz 6/30",
      category: "Allergy & Inflammation",
      description: "Deflazacort 6 mg + 30 mg Tablets",
      image: "/images/products/steroflaz-6-30.png",
    },
    {
      id: 5,
      name: "B-Feb 40",
      category: "Hyperuricemia",
      description: "Febuxostat 40 mg Tablets",
      image: "/images/products/b-feb-40.png",
    },
    {
      id: 6,
      name: "Biofix CQ",
      category: "Bone & Joint Health",
      description: "Calcium & Vitamin D3 Supplement",
      image: "/images/products/biofix-cq.png",
    },
  ];

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

        {/* Product Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl border border-[#D7E6C8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5FAE16]/40 hover:shadow-xl">
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0B2F5B]/80 via-[#0B2F5B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-center justify-between p-5">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                        View Product
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B2F5B]">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
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
                </div>
              </div>
            </Link>
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
