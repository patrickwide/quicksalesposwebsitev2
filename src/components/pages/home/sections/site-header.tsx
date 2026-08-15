import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL =
  "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/dfb6e86f-slurp-quicksales-logo.webp";

/**
 * @ployComponent
 * @ployComponentId quicksales-site-header
 * @ployComponentType section
 * @ployComponentPattern navbar
 * @ployComponentDescription Sticky homepage navigation preserving product, pricing, sign-in, and sales-contact affordances.
 * @ployComponentStatus stable
 */
export function SiteHeader() {
  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="site-header sticky top-0 z-50 border-b border-ploy-border-primary/70 bg-ploy-background-primary/95 backdrop-blur-xl">
      <div className="site-header__inner mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <a href="#top" className="site-header__brand flex items-center gap-3" aria-label="QuickSales-POS home">
          <img src={LOGO_URL} alt="" className="h-9 w-9 object-contain" />
          <span className="font-heading text-lg font-extrabold tracking-[-0.02em]">QuickSales-POS</span>
        </a>
        <nav className="site-header__nav hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Main navigation">
          <a className="hover:text-ploy-accent-secondary" href="#features">Features</a>
          <a className="hover:text-ploy-accent-secondary" href="#workflow">eTIMS</a>
          <a className="hover:text-ploy-accent-secondary" href="#solutions">Solutions</a>
          <a className="hover:text-ploy-accent-secondary" href="#pricing">Pricing</a>
        </nav>
        <div className="site-header__actions hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="small" href="https://quicksalespos.com/">Sign in</Button>
          <Button size="small" href="https://wa.me/254740194874" target="_blank" rel="noreferrer">Get demo</Button>
        </div>
        <a className="rounded-lg p-2 text-ploy-text-primary md:hidden" href="#footer" aria-label="Open contact links">
          <Menu aria-hidden="true" />
        </a>
      </div>
    </motion.header>
  );
}
