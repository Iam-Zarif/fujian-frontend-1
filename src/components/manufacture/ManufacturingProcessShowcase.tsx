"use client";

import { memo } from "react";

interface ProcessItem {
  title: string;
  description: string;
  youtubeId: string;
}

const processes: ProcessItem[] = [
  {
    title: "Raw Material Inspection",
    description:
      "All raw materials are inspected and tested before entering production to ensure durability, color consistency, and compliance with buyer requirements.",
    youtubeId: "VIDEO_ID_1",
  },
  {
    title: "Automated Production Line",
    description:
      "Advanced machinery combined with skilled operators ensures precision manufacturing with minimal tolerance deviation.",
    youtubeId: "VIDEO_ID_2",
  },
  {
    title: "Quality Control & Testing",
    description:
      "Multi-stage quality inspections are performed during and after production to eliminate defects before packing.",
    youtubeId: "VIDEO_ID_3",
  },
];

function ManufacturingProcessShowcase() {
  return (
    <section className="space-y-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          How Our Manufacturing Process Works
        </h2>
        <p className="mt-2 text-gray-600">
          A transparent look into our production workflow, from raw materials to
          final shipment.
        </p>
      </div>

      <div className="space-y-20">
        {processes.map((item, index) => (
          <div
            key={index}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className={`space-y-3 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <span className="text-sm font-medium text-[#00019A]">
                Step {index + 1}
              </span>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 max-w-xl">{item.description}</p>
            </div>

            {/* Video */}
            <div
              className={`relative aspect-video w-full overflow-hidden rounded-3xl border shadow-sm ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(ManufacturingProcessShowcase);
