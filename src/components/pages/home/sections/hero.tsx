import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PosUiMockup } from "../components/pos-ui-mockup";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

/**
 * @ployComponent
 * @ployComponentId quicksales-home-hero
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Animated split hero with plain-language positioning and an interactive coded POS product preview.
 * @ployComponentStatus stable
 */
export function HeroSection() {
  return (
    <section id="top" className="hero border-b border-ploy-border-primary/60">
      <div className="hero__inner mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-20">
        <motion.div className="hero__copy max-w-[560px]" variants={heroContainer} initial="hidden" animate="visible">
          <motion.p variants={heroItem} className="mb-5 inline-flex items-center gap-2 rounded bg-ploy-accent-primary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ploy-accent-primary-800">
            <CheckCircle2 className="h-4 w-4" /> POS + KRA eTIMS
          </motion.p>
          <motion.h1 variants={heroItem} className="hero__title font-heading text-[clamp(3rem,5.5vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-balance">
            Sell faster. Stay <span className="text-ploy-accent-secondary">eTIMS ready.</span>
          </motion.h1>
          <motion.p variants={heroItem} className="hero__subtitle mt-6 max-w-[520px] text-lg leading-8 text-ploy-text-secondary">
            Manage sales, stock, receipts, and branches in one simple POS system built for Kenyan businesses.
          </motion.p>
          <motion.div variants={heroItem} className="hero__actions mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="https://wa.me/254740194874" target="_blank" rel="noreferrer">Start free demo <ArrowRight className="h-4 w-4" /></Button>
            <a href="#workflow" className="text-sm font-semibold text-ploy-text-primary underline decoration-ploy-accent-primary decoration-2 underline-offset-4">See how it works</a>
          </motion.div>
          <motion.p variants={heroItem} className="mt-4 text-sm text-ploy-text-secondary">Free demo account. No payment needed.</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 38, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="hero__visual rounded-2xl bg-ploy-neutral-primary-s2 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-4">
          <PosUiMockup />
        </motion.div>
      </div>
    </section>
  );
}
