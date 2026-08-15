import { MotionConfig } from "motion/react";
import { FeaturesSection } from "./sections/features";
import { Reveal } from "./components/reveal";
import { FinalCtaSection } from "./sections/final-cta";
import { HeroSection } from "./sections/hero";
import { PricingSection } from "./sections/pricing";
import { ProofStrip } from "./sections/proof-strip";
import { RetailSection } from "./sections/retail";
import { SiteFooter } from "./sections/site-footer";
import { SiteHeader } from "./sections/site-header";
import { WorkflowSection } from "./sections/workflow";

/**
 * @ployComponent
 * @ployComponentId quicksales-home-page
 * @ployComponentType page
 * @ployComponentPattern homepage
 * @ployComponentDescription Product-led QuickSales-POS homepage composing reusable conversion, feature, workflow, pricing, and contact sections.
 * @ployComponentStatus stable
 */
export function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="home-page min-h-screen bg-ploy-background-primary text-ploy-text-primary">
        <SiteHeader />
        <main>
          <HeroSection />
          <Reveal><ProofStrip /></Reveal>
          <Reveal><FeaturesSection /></Reveal>
          <Reveal><WorkflowSection /></Reveal>
          <Reveal><RetailSection /></Reveal>
          <Reveal><PricingSection /></Reveal>
          <Reveal><FinalCtaSection /></Reveal>
        </main>
        <Reveal><SiteFooter /></Reveal>
      </div>
    </MotionConfig>
  );
}
