import { BadgeCheck, Building2, Headphones, MapPinned, Zap } from "lucide-react";
import { Reveal, RevealItem } from "../components/reveal";

const PROOF = [
  { icon: BadgeCheck, title: "eTIMS ready", detail: "Built into the POS" },
  { icon: Zap, title: "No setup fee", detail: "Get started for KSh 0" },
  { icon: Building2, title: "All in one", detail: "Sales, stock, and reports" },
  { icon: MapPinned, title: "More branches", detail: "Manage them together" },
  { icon: Headphones, title: "Kenyan support", detail: "+254 740 194874" },
];

/**
 * @ployComponent
 * @ployComponentId quicksales-proof-strip
 * @ployComponentType section
 * @ployComponentPattern trust-strip
 * @ployComponentDescription Full-width verified trust strip for compliance, setup, product breadth, branches, and support.
 * @ployComponentStatus stable
 */
export function ProofStrip() {
  return (
    <section className="proof-strip bg-ploy-background-inverse text-ploy-text-inverse" aria-label="QuickSales-POS trust signals">
      <Reveal stagger className="mx-auto grid max-w-[1240px] gap-px bg-ploy-border-inverse px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {PROOF.map(({ icon: Icon, title, detail }) => (
          <RevealItem key={title} className="bg-ploy-background-inverse">
          <div className="flex h-full items-center gap-3 px-4 py-6">
            <Icon className="h-6 w-6 shrink-0 text-ploy-accent-primary" />
            <div><p className="font-bold">{title}</p><p className="text-xs text-ploy-text-inverse-secondary">{detail}</p></div>
          </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
