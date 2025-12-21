"use client";

import { memo } from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Raw Material Inspection",
    description:
      "Every batch of raw materials is tested for strength, color consistency, and safety compliance before entering production.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "In-Process Quality Control",
    description:
      "Real-time inspections during manufacturing ensure dimensional accuracy, durability, and process stability.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Final Product Testing",
    description:
      "Finished accessories undergo physical, chemical, and visual tests to meet international standards.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Packaging & Dispatch Audit",
    description:
      "Before shipment, packaging integrity, labeling accuracy, and order quantities are strictly verified.",
    videoId: "dQw4w9WgXcQ",
  },
];

function QualityInspectionFlow() {
  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Quality Inspection Process
        </h2>
        <p className="text-gray-600">
          A transparent, step-by-step quality control workflow ensuring every
          product meets global compliance and customer expectations.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-20">
        {steps.map((step, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={cn(
                "grid gap-8 items-center",
                "lg:grid-cols-2",
                isReverse && "lg:[&>*:first-child]:order-2"
              )}
            >
              {/* Text */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00019A]" />
                  <span className="text-sm font-medium text-[#00019A]">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 max-w-xl">{step.description}</p>
              </div>

              {/* Video */}
              <div className="relative overflow-hidden rounded-2xl border bg-black aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${step.videoId}`}
                  title={step.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(QualityInspectionFlow);
