"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function ProductCategories() {
  const categories = useMemo(
    () => [
      {
        title: "Buttons",
        description: "Metal, plastic, resin & custom buttons",
        image: "/products/buttons.jpg",
        href: "/products/buttons",
      },
      {
        title: "Zippers",
        description: "Nylon, metal, invisible & waterproof zippers",
        image: "/products/zipper.webp",
        href: "/products/zippers",
      },
      {
        title: "Labels & Tags",
        description: "Woven, printed, leather & hang tags",
        image: "/products/label.avif",
        href: "/products/labels",
      },
      {
        title: "Custom Accessories",
        description: "OEM & ODM garment accessories",
        image: "/products/custom.avif",
        href: "/products/custom",
      },
    ],
    []
  );

  return (
    <section className="relative ">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>

                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#00019A]">
                  View Details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductCategories);
