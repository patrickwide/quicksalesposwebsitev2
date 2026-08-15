import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RETAIL_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/29a92a71-ai-generated-1784192898781.webp";

/**
 * @ployComponent
 * @ployComponentId quicksales-retail-section
 * @ployComponentType section
 * @ployComponentPattern use-case
 * @ployComponentDescription Retail use-case section pairing Kenyan business context with verified multi-location and support benefits.
 * @ployComponentStatus stable
 */
export function RetailSection() {
  return (
    <section id="solutions" className="retail px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-2xl bg-ploy-background-inverse text-ploy-text-inverse lg:grid-cols-[0.82fr_1.18fr]">
        <div className="p-8 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ploy-accent-primary">For growing businesses</p>
          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] lg:text-5xl">Run one shop or many.</h2>
          <p className="mt-5 text-lg leading-8 text-ploy-text-inverse-secondary">See sales and stock from every branch in one dashboard.</p>
          <ul className="mt-8 space-y-4 text-sm font-semibold">
            {['Use it from anywhere','See every branch','Get local support'].map((item)=><li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-ploy-accent-primary" />{item}</li>)}
          </ul>
          <Button variant="inverse" className="mt-9" href="#pricing">See plans <ArrowUpRight className="h-4 w-4" /></Button>
        </div>
        <div className="overflow-hidden"><motion.img initial={{ scale: 1.05 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px 0px -20% 0px" }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} src={RETAIL_IMAGE} alt="Kenyan retail business owner using a point-of-sale counter" className="h-full min-h-[380px] w-full object-cover object-[72%_center]" /></div>
      </div>
    </section>
  );
}
