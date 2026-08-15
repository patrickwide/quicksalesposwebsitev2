import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * @ployComponent
 * @ployComponentId quicksales-final-cta
 * @ployComponentType section
 * @ployComponentPattern cta
 * @ployComponentDescription Final demo and contact CTA preserving QuickSales-POS WhatsApp, phone, and email paths.
 * @ployComponentStatus stable
 */
export function FinalCtaSection() {
  return (
    <section className="final-cta px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px] rounded-2xl bg-ploy-accent-primary p-8 text-ploy-text-on-accent-primary lg:p-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div><p className="text-sm font-extrabold uppercase tracking-[0.14em]">Try it for free</p><h2 className="mt-4 max-w-[760px] font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] lg:text-5xl">Ready to try QuickSales-POS?</h2><p className="mt-4 max-w-[580px] text-lg leading-8">Open a free demo account or chat with our team on WhatsApp.</p></div>
          <Button variant="inverse" href="https://wa.me/254740194874" target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-ploy-text-on-accent-primary/20 pt-7 text-sm font-semibold sm:flex-row sm:gap-8"><a className="flex items-center gap-2" href="tel:+254740194874"><Phone className="h-4 w-4" />+254 740 194874</a><a className="flex items-center gap-2" href="mailto:sales@quicksalespos.com"><Mail className="h-4 w-4" />sales@quicksalespos.com</a></div>
      </div>
    </section>
  );
}
