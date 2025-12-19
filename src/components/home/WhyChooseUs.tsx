"use client";

import { memo } from "react";
import { CheckCircle, Truck, ShieldCheck, Factory } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="relative  lg:">
      <div className="absolute inset-0  -z-10 bg-linear-to-b from-blue-50/40 via-white to-white" />

      <div className="mx-auto max-w-7xl pt-8 lg:pt-12 px-4 md:px-6">
        <div className="mb-6 lg:mb-14 max-w-2xl">
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-xl  lg:text-3xl font-semibold lg:font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Reliable
            <span className="block text-[#00019A]">Manufacturing Partner</span>
          </h2>

          <p className="mt-2 lg:mt-4 text-sm lg:text-base text-gray-600">
            We help global fashion brands succeed by delivering consistent
            quality, reliable lead times, and factory-direct pricing backed by
            years of manufacturing expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<Factory className="h-6 w-6 text-[#00019A]" />}
            title="Factory Direct"
            text="In-house production with competitive pricing"
          />
          <Feature
            icon={<ShieldCheck className="h-6 w-6 text-[#00019A]" />}
            title="Strict Quality Control"
            text="Multi-stage inspections and testing"
          />
          <Feature
            icon={<Truck className="h-6 w-6 text-[#00019A]" />}
            title="On-Time Delivery"
            text="Reliable logistics and export experience"
          />
          <Feature
            icon={<CheckCircle className="h-6 w-6 text-[#00019A]" />}
            title="Custom Solutions"
            text="OEM & ODM tailored to your needs"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const Feature = memo(function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 rounded-3xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
});

export default memo(WhyChooseUs);
