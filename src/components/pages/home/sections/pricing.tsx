import { Check } from "lucide-react";
import { Reveal, RevealItem } from "../components/reveal";
import { Button } from "@/components/ui/button";

const PLANS = [
  { name: "Lite", note: "For one-person businesses", price: "KSh 5,002", monthly: "KSh 417/month", features: ["1 user account", "1 branch", "Basic reporting", "eTIMS integration"] },
  { name: "Professional", note: "For growing businesses", price: "KSh 11,990", monthly: "KSh 999/month", featured: true, features: ["5 user accounts", "3 branches", "Advanced reporting", "Priority support", "Unlimited products"] },
  { name: "Business", note: "For larger teams", price: "KSh 23,990", monthly: "KSh 1,999/month", features: ["15 user accounts", "Unlimited branches", "Data export", "Dedicated account manager", "Advanced API access"] },
];

/**
 * @ployComponent
 * @ployComponentId quicksales-pricing
 * @ployComponentType section
 * @ployComponentPattern pricing
 * @ployComponentDescription Simplified annual pricing comparison preserving current Lite, Professional, Business, and Enterprise facts.
 * @ployComponentStatus stable
 */
export function PricingSection() {
  return (
    <section id="pricing" className="pricing bg-ploy-neutral-primary-s2 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ploy-accent-secondary">Pricing</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] lg:text-5xl">Choose a plan that fits your business.</h2></div>
          <p className="max-w-[520px] self-end text-lg leading-8 text-ploy-text-secondary">Every plan includes eTIMS and online access. The prices below are billed yearly.</p>
        </div>
        <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.name}>
            <article className={`h-full rounded-2xl border bg-ploy-background-primary p-7 shadow-sm ${plan.featured ? 'border-2 border-ploy-accent-primary shadow-xl' : 'border-ploy-border-primary'}`}>
              {plan.featured && <span className="rounded bg-ploy-accent-primary px-2 py-1 text-xs font-extrabold uppercase tracking-wider">Recommended</span>}
              <h3 className="mt-5 text-2xl font-extrabold">{plan.name}</h3><p className="mt-2 text-sm text-ploy-text-secondary">{plan.note}</p>
              <p className="mt-8 text-4xl font-extrabold tracking-[-0.04em]">{plan.price}</p><p className="mt-1 text-sm text-ploy-text-secondary">per year. {plan.monthly}</p>
              <Button className="mt-7 w-full" variant={plan.featured ? 'primary' : 'secondary'} href="https://wa.me/254740194874" target="_blank" rel="noreferrer">Try free demo</Button>
              <ul className="mt-7 space-y-3 border-t border-ploy-border-primary pt-6">{plan.features.map((feature)=><li key={feature} className="flex gap-3 text-sm"><Check className="h-4 w-4 shrink-0 text-ploy-accent-secondary" />{feature}</li>)}</ul>
            </article>
            </RevealItem>
          ))}
        </Reveal>
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-7 md:flex-row md:items-center"><div><h3 className="text-xl font-extrabold">Enterprise</h3><p className="mt-1 text-ploy-text-secondary">Custom setup, more users, and extra support for large businesses.</p></div><Button variant="secondary" href="mailto:sales@quicksalespos.com">Contact sales</Button></div>
      </div>
    </section>
  );
}
