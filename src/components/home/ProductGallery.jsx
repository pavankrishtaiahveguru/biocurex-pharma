"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProductGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/gallery-1.png",
      alt: "BioCurex Pharma product showcase",
      size: "large",
    },
    {
      id: 2,
      src: "/images/gallery/gallery-2.png",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "medium",
    },
    {
      id: 3,
      src: "/images/gallery/gallery-3.png",
      alt: "BioCurex Pharma healthcare products",
      size: "small",
    },
    {
      id: 4,
      src: "/images/gallery/gallery-4.png",
      alt: "BioCurex Pharma product packaging",
      size: "small",
    },
    {
      id: 5,
      src: "/images/gallery/gallery-5.png",
      alt: "BioCurex Pharma pharmaceutical range",
      size: "large",
    },
    {
      id: 6,
      src: "/images/gallery/gallery-6.png",
      alt: "BioCurex Pharma medicine products",
      size: "medium",
    },
  ];

  const sizeClasses = {
    small: "lg:col-span-1 lg:row-span-1",
    medium: "lg:col-span-1 lg:row-span-2",
    large: "lg:col-span-2 lg:row-span-2",
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#5FAE16]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#5FAE16] sm:text-xs">
                Product Gallery
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B2F5B] sm:text-5xl lg:text-6xl">
              Inside the world of
              <span className="mt-1 block w-fit bg-[#0B2F5B] px-2 py-1 text-white">
                BioCurex Pharma.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore our pharmaceutical product range through a closer look at
              our formulations, packaging, and healthcare solutions.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/products"
            className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#72c51b] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5ca817] hover:shadow-xl hover:shadow-[#72c51b]/20"
          >
            View Products
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[180px]">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              href="/products"
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-[#F1F8E9] ${sizeClasses[image.size]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5B]/80 via-[#0B2F5B]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#72c51b]">
                      BioCurex Pharma
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      View Product
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2F5B]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
            Quality-focused pharmaceutical solutions with a commitment to
            innovation, reliability, and better healthcare.
          </p>

          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#0B2F5B] transition-colors duration-300 hover:text-[#5FAE16]"
          >
            Explore Full Catalogue
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
