"use client";

import { memo } from "react";
import { Factory, Globe, ShieldCheck, Award, Truck, Users } from "lucide-react";
import Image from "next/image";

function AboutPageClient() {
  return (
    <main className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <section className="mx-auto max-w-7xl px-4 md:px-6 space-y-24">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            About Fujian Accessories
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Manufacturing Excellence in Garment Accessories
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
            Factory-direct garment accessories manufacturer serving global
            apparel brands with consistent quality and scale.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-6 text-gray-700">
          <p className="text-base leading-relaxed">
            Fujian Accessories CO. Ltd. is a professional manufacturer of
            garment accessories including woven labels, printed labels,
            elastics, tapes, patches, drawcords, and packaging materials.
          </p>

          <p className="text-base leading-relaxed">
            Our in-house production facilities are equipped with modern
            machinery and experienced technicians, allowing us to support
            high-volume export orders with strict quality control.
          </p>

          <p className="text-base leading-relaxed">
            We work closely with international fashion brands, garment
            factories, and sourcing companies to deliver reliable production
            timelines and competitive pricing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <AboutCard
            icon={<Factory className="h-5 w-5 text-[#00019A]" />}
            title="Factory Direct Production"
            text="Complete in-house manufacturing with controlled processes."
          />
          <AboutCard
            icon={<ShieldCheck className="h-5 w-5 text-[#00019A]" />}
            title="Quality Assurance"
            text="Multi-stage inspection aligned with global standards."
          />
          <AboutCard
            icon={<Globe className="h-5 w-5 text-[#00019A]" />}
            title="Global Export Experience"
            text="Serving international apparel markets worldwide."
          />
        </div>

        <div className="mx-auto max-w-6xl space-y-10">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Our Journey
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <JourneyCard
              icon={<Users className="h-5 w-5 text-[#00019A]" />}
              title="Company Established"
              text="Started as a specialized garment accessories manufacturer."
            />
            <JourneyCard
              icon={<Award className="h-5 w-5 text-[#00019A]" />}
              title="Capacity Expansion"
              text="Invested in modern machinery and skilled workforce."
            />
            <JourneyCard
              icon={<Truck className="h-5 w-5 text-[#00019A]" />}
              title="Global Supply"
              text="Supplying accessories to international apparel brands."
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Factory & Product Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/products/wovenLabel.webp",
              "/products/printedLabel.webp",
              "/products/offsetPrinting.jpg",
              "/products/leather.webp",
              "/products/rubber.webp",
              "/products/twilltape.webp",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={src}
                  alt="Factory gallery"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Factory Location
          </h2>

          <div className="overflow-hidden rounded-2xl border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.751238279067!2d90.35045497518992!3d23.827443378617897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10001edce73%3A0xf6404849b479ee0c!2sFujian%20Accessories%20CO.%20Ltd.!5e0!3m2!1sen!2sbd!4v1766307335815!5m2!1sen!2sbd"
              className="h-100 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const AboutCard = memo(function AboutCard({
  icon,
  title,
  text,
}: AboutCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:shadow-md">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
});

const JourneyCard = memo(function JourneyCard({
  icon,
  title,
  text,
}: AboutCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
});

export default memo(AboutPageClient);
