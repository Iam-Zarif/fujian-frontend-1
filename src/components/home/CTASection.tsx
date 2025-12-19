"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="relative overflow-hidden lg:py-12 py-8">
      <div className="absolute inset-0  -z-20 bg-linear-to-r from-[#00019A] via-[#00019A]/90 to-[#00019A]" />
      <div className="absolute inset-0  -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative rounded-3xl border border-white/25 bg-white/15 p-10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:p-14">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-b from-white/25 via-transparent to-transparent" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="text-xl lg:text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your
              <span className="block text-white">
                Next Manufacturing Project?
              </span>
            </h2>

            <p className="max-w-2xl lg:text-base leading-relaxed text-white/90">
              Contact Fujian Accessories CO. Ltd. today to receive competitive
              pricing, fast lead times, and reliable garment accessory
              manufacturing solutions.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="group rounded-xl bg-white px-9 text-[#00019A] shadow-[0_10px_30px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_rgba(255,255,255,0.45)]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl border-white/70 px-9  backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CTASection);
