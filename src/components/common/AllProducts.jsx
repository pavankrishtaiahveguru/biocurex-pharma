"use client";

import Image from "next/image";

const AllProducts = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#D7E6C8] bg-[#F1F8E9] shadow-sm">
          <Image
            src="/images/all-products.jpg"
            alt="BioCurex Pharma complete product range"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="h-auto w-full object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
