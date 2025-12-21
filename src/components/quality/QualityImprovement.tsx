"use client";

import { memo } from "react";
import {
  TrendingUp,
  MessageSquare,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    title: "Defect Analysis",
    desc: "Root cause identification using inspection reports and failure tracking.",
  },
  {
    icon: MessageSquare,
    title: "Customer Feedback",
    desc: "Continuous input from global buyers and brand partners.",
  },
  {
    icon: RefreshCcw,
    title: "Process Optimization",
    desc: "Material upgrades, tooling refinement, and workflow adjustments.",
  },
  {
    icon: TrendingUp,
    title: "Quality Growth",
    desc: "Measurable improvements in durability, consistency, and compliance.",
  },
];

function QualityImprovement() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-white to-blue-50 p-8 lg:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00019A]/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl space-y-3">
        <span className="inline-block rounded-full bg-[#00019A]/10 px-4 py-1 text-xs font-medium text-[#00019A]">
          Continuous Improvement
        </span>

        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Continuous Quality Improvement
        </h2>

        <p className="text-gray-600">
          Quality at Fujian Accessories CO. Ltd. is never static. We use data,
          feedback, and inspection insights to continuously evolve our
          manufacturing standards.
        </p>
      </div>

      <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00019A]/10 text-[#00019A] transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-sm font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(QualityImprovement);
