"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import products from "@/data/products";
import AllProducts from "@/components/common/AllProducts";

const ProductsPage = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/image1.jpeg",
      alt: "BioCurex Pharma product showcase",
      size: "small",
    },
    {
      id: 2,
      src: "/images/gallery/image2.jpeg",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "small",
    },
    {
      id: 3,
      src: "/images/gallery/image3.jpeg",
      alt: "BioCurex Pharma healthcare products",
      size: "small",
    },
    {
      id: 4,
      src: "/images/gallery/image4.jpeg",
      alt: "BioCurex Pharma product packaging",
      size: "small",
    },
    {
      id: 5,
      src: "/images/gallery/image5.jpeg",
      alt: "BioCurex Pharma pharmaceutical range",
      size: "small",
    },
    {
      id: 6,
      src: "/images/gallery/image6.jpeg",
      alt: "BioCurex Pharma medicine products",
      size: "small",
    },
    {
      id: 7,
      src: "/images/gallery/image7.jpeg",
      alt: "BioCurex Pharma medicine products",
      size: "small",
    },
    {
      id: 8,
      src: "/images/gallery/image8.jpeg",
      alt: "BioCurex Pharma pharmaceutical packaging",
      size: "small",
    },
    {
      id: 9,
      src: "/images/gallery/image9.jpeg",
      alt: "BioCurex Pharma healthcare products",
      size: "small",
    },
    {
      id: 10,
      src: "/images/gallery/image10.jpeg",
      alt: "BioCurex Pharma product showcase",
      size: "small",
    },
    {
      id: 11,
      src: "/images/gallery/image11.jpeg",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "small",
    },
    {
      id: 12,
      src: "/images/gallery/image12.jpeg",
      alt: "BioCurex Pharma product range",
      size: "small",
    },
    {
      id: 13,
      src: "/images/gallery/image13.jpeg",
      alt: "BioCurex Pharma medicine products",
      size: "small",
    },
    {
      id: 14,
      src: "/images/gallery/image14.jpeg",
      alt: "BioCurex Pharma pharmaceutical packaging",
      size: "small",
    },
    {
      id: 15,
      src: "/images/gallery/image15.jpeg",
      alt: "BioCurex Pharma healthcare solutions",
      size: "small",
    },
    {
      id: 16,
      src: "/images/gallery/image16.jpeg",
      alt: "BioCurex Pharma product showcase",
      size: "small",
    },
    {
      id: 17,
      src: "/images/gallery/image17.jpeg",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "small",
    },
    {
      id: 18,
      src: "/images/gallery/image18.jpeg",
      alt: "BioCurex Pharma medicine packaging",
      size: "small",
    },
    {
      id: 19,
      src: "/images/gallery/image19.jpeg",
      alt: "BioCurex Pharma product range",
      size: "small",
    },
    {
      id: 20,
      src: "/images/gallery/image20.jpeg",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "small",
    },
    {
      id: 21,
      src: "/images/gallery/image21.jpeg",
      alt: "BioCurex Pharma healthcare products",
      size: "small",
    },
    {
      id: 22,
      src: "/images/gallery/image22.jpeg",
      alt: "BioCurex Pharma product packaging",
      size: "small",
    },
    {
      id: 23,
      src: "/images/gallery/image23.jpeg",
      alt: "BioCurex Pharma medicine products",
      size: "small",
    },
    {
      id: 24,
      src: "/images/gallery/image24.jpeg",
      alt: "BioCurex Pharma pharmaceutical range",
      size: "small",
    },
    {
      id: 25,
      src: "/images/gallery/image25.jpeg",
      alt: "BioCurex Pharma product showcase",
      size: "small",
    },
    {
      id: 26,
      src: "/images/gallery/image26.jpeg",
      alt: "BioCurex Pharma healthcare products",
      size: "small",
    },
    {
      id: 27,
      src: "/images/gallery/image27.jpeg",
      alt: "BioCurex Pharma pharmaceutical packaging",
      size: "small",
    },
    {
      id: 28,
      src: "/images/gallery/image28.jpeg",
      alt: "BioCurex Pharma medicine products",
      size: "small",
    },
    {
      id: 29,
      src: "/images/gallery/image29.jpeg",
      alt: "BioCurex Pharma pharmaceutical products",
      size: "small",
    },
    {
      id: 30,
      src: "/images/gallery/image30.jpeg",
      alt: "BioCurex Pharma healthcare solutions",
      size: "small",
    },
    {
      id: 31,
      src: "/images/gallery/image31.jpeg",
      alt: "BioCurex Pharma product showcase",
      size: "small",
    },
  ];

  const sizeClasses = {
    small: "lg:col-span-1 lg:row-span-1",
    medium: "lg:col-span-1 lg:row-span-2",
    large: "lg:col-span-2 lg:row-span-2",
  };

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

      {/* Product Gallery */}
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
                Explore our pharmaceutical product range through a closer look
                at our formulations, packaging, and healthcare solutions.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/products"
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#72C51B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#5CA817] hover:shadow-xl hover:shadow-[#72C51B]/20"
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
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#72C51B]">
                        BioCurex Pharma
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

          <AllProducts />

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
    </main>
  );
};

export default ProductsPage;
