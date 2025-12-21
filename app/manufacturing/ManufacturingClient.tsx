"use client";

import { memo } from "react";
import CTASection from "@/src/components/home/CTASection";
import ManufacturingHero from "@/src/components/manufacture/ManufacturingHero";
import ManufacturingProcessSteps from "@/src/components/manufacture/ManufacturingProcessSteps";
import QualityAndCompliance from "@/src/components/manufacture/QualityAndCompliance";
import GlobalStandards from "@/src/components/manufacture/GlobalStandards";
import ManufacturingProcessShowcase from "@/src/components/manufacture/ManufacturingProcessShowcase";

function ManufacturingClient() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 pt-26 space-y-20 lg:pb-20">
      <ManufacturingHero />
      <ManufacturingProcessSteps />
      <QualityAndCompliance />
      <ManufacturingProcessShowcase/>
      <GlobalStandards />
      <CTASection />
    </main>
  );
}

export default memo(ManufacturingClient);
