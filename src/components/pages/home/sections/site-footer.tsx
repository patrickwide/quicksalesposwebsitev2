const LOGO_URL = "https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/dfb6e86f-slurp-quicksales-logo.webp";

/**
 * @ployComponent
 * @ployComponentId quicksales-site-footer
 * @ployComponentType section
 * @ployComponentPattern footer
 * @ployComponentDescription Compact footer preserving QuickSales-POS brand, product anchors, and support contacts.
 * @ployComponentStatus stable
 */
export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer border-t border-ploy-border-primary bg-ploy-background-primary">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div><div className="flex items-center gap-3"><img src={LOGO_URL} alt="" className="h-9 w-9 object-contain" /><span className="font-heading text-lg font-extrabold">QuickSales-POS</span></div><p className="mt-4 max-w-[420px] leading-7 text-ploy-text-secondary">Simple POS and eTIMS software for Kenyan businesses.</p></div>
        <div><p className="font-extrabold">Product</p><div className="mt-4 flex flex-col gap-3 text-sm text-ploy-text-secondary"><a href="#features">Features</a><a href="#workflow">How it works</a><a href="#pricing">Pricing</a></div></div>
        <div><p className="font-extrabold">Contact</p><div className="mt-4 flex flex-col gap-3 text-sm text-ploy-text-secondary"><a href="https://wa.me/254740194874">WhatsApp</a><a href="tel:+254740194874">+254 740 194874</a><a href="mailto:sales@quicksalespos.com">sales@quicksalespos.com</a></div></div>
      </div>
      <div className="border-t border-ploy-border-primary px-5 py-5 text-center text-xs text-ploy-text-secondary">© {new Date().getFullYear()} CTRL Ltd. QuickSales-POS.</div>
    </footer>
  );
}
