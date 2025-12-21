"use client";

import { memo } from "react";
import { Layers, CheckCircle, PackageCheck } from "lucide-react";

const items = [
  {
    icon: <Layers />,
    title: "Incoming Inspection",
    text: "Raw materials checked before production.",
  },
  {
    icon: <CheckCircle />,
    title: "In-Line Inspection",
    text: "Continuous checks during manufacturing.",
  },
  {
    icon: <PackageCheck />,
    title: "Final Inspection",
    text: "Final approval before packing & shipment.",
  },
];

function QualitySystem() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-3xl border bg-white p-6">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#00019A]">
            {item.icon}
          </div>
          <h3 className="font-semibold text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default memo(QualitySystem);
