import { ArrowRight, BadgeCheck, CreditCard, PackageCheck, ShoppingCart } from "lucide-react";
import { Reveal, RevealItem } from "../components/reveal";

const STEPS = [
  { icon: ShoppingCart, number: "01", title: "Add the sale", copy: "Choose the products and add the customer if needed." },
  { icon: CreditCard, number: "02", title: "Take payment", copy: "Select the payment method and finish the sale." },
  { icon: BadgeCheck, number: "03", title: "Send the receipt", copy: "QuickSales-POS creates the eTIMS receipt." },
  { icon: PackageCheck, number: "04", title: "Stay updated", copy: "Stock and sales reports update right away." },
];

/**
 * @ployComponent
 * @ployComponentId quicksales-workflow
 * @ployComponentType section
 * @ployComponentPattern process
 * @ployComponentDescription Four-step product workflow connecting checkout, payment, compliant receipt, stock, and reporting.
 * @ployComponentStatus stable
 */
export function WorkflowSection() {
  return (
    <section id="workflow" className="workflow bg-ploy-neutral-primary-s2 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="max-w-[760px]">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ploy-accent-secondary">How it works</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-balance lg:text-5xl">Make a sale in four simple steps.</h2>
          <p className="mt-5 text-lg leading-8 text-ploy-text-secondary">QuickSales-POS handles the receipt, stock, and reports as you sell.</p>
        </div>
        <Reveal stagger className="mt-10 grid gap-4 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, number, title, copy }, index) => (
            <RevealItem key={number}>
            <div className="workflow__step relative h-full rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-6 shadow-sm">
              <div className="flex items-center justify-between"><span className="text-sm font-extrabold text-ploy-accent-secondary">{number}</span><Icon className="h-6 w-6 text-ploy-accent-secondary" /></div>
              <h3 className="mt-10 text-lg font-extrabold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ploy-text-secondary">{copy}</p>
              {index < STEPS.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 rounded-full bg-ploy-background-primary p-1 text-ploy-accent-secondary lg:block" />}
            </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
