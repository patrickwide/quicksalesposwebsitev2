import { BarChart3, Boxes, Building2, ReceiptText, Users, Zap } from "lucide-react";
import { Reveal, RevealItem } from "../components/reveal";

const INVENTORY_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/ed18ec02-ai-generated-1784192908887.webp";
const CHECKOUT_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/516d4e1b-ai-generated-1784192899982.webp";
const RECEIPT_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/dd942f6e-ai-generated-1784192899191.webp";
const ANALYTICS_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/5030c2fa-ai-generated-1784193467545.webp";
const CUSTOMER_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/32aaef25-ai-generated-1784193468752.webp";
const BRANCH_IMAGE = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/f7a8db41-ai-generated-1784193486313.webp";

const FEATURES = [
  { icon: Zap, title: "Fast checkout", copy: "Make sales quickly with a screen that is easy to learn.", image: CHECKOUT_IMAGE },
  { icon: ReceiptText, title: "eTIMS receipts", copy: "Create a compliant receipt when you complete a sale.", image: RECEIPT_IMAGE },
  { icon: Boxes, title: "Stock control", copy: "Know what is in stock and get alerts when items run low.", image: INVENTORY_IMAGE },
  { icon: BarChart3, title: "Sales reports", copy: "See sales and business performance in one dashboard.", image: ANALYTICS_IMAGE },
  { icon: Users, title: "Customer records", copy: "Keep customer details and buying history in one place.", image: CUSTOMER_IMAGE },
  { icon: Building2, title: "Branch management", copy: "Check sales and stock across all your locations.", image: BRANCH_IMAGE },
];

/**
 * @ployComponent
 * @ployComponentId quicksales-features
 * @ployComponentType section
 * @ployComponentPattern feature-grid
 * @ployComponentDescription Product capability grid with retail photography, icon-led cards, and verified QuickSales-POS feature copy.
 * @ployComponentStatus stable
 */
export function FeaturesSection() {
  return (
    <section id="features" className="features bg-ploy-background-primary py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ploy-accent-secondary">All the basics in one place</p>
            <h2 className="mt-4 max-w-[560px] font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-balance lg:text-5xl">Run your business from one screen.</h2>
          </div>
          <p className="max-w-[520px] self-end text-lg leading-8 text-ploy-text-secondary">Handle sales, stock, customers, branches, and reports without switching between different tools.</p>
        </div>
        <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, copy, image }) => (
            <RevealItem key={title}>
            <article className="features__card group overflow-hidden rounded-2xl border border-ploy-border-primary bg-ploy-background-primary shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={image} alt="" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ploy-accent-primary/15 text-ploy-accent-secondary"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-extrabold tracking-[-0.015em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ploy-text-secondary">{copy}</p>
              </div>
            </article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
