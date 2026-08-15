import { AnimatePresence, motion } from "motion/react";
import {
  Coffee,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Ballpoint pen", price: 80, stock: 126, tax: "VAT 16%", icon: Package },
  { id: 2, name: "Fresh milk", price: 120, stock: 18, tax: "VAT 0%", icon: Coffee },
  { id: 3, name: "Canvas tote", price: 650, stock: 42, tax: "VAT 16%", icon: ShoppingBag },
  { id: 4, name: "Office file", price: 180, stock: 9, tax: "VAT 16%", icon: Package },
];

export type ViewportMode = "phone" | "tablet" | "desktop";
type MobilePanel = "products" | "checkout";

type PosUiMockupProps = {
  viewport: ViewportMode;
};

/** Front-end-only POS preview based on the supplied QuickSales product and checkout patterns. */
export function PosUiMockup({ viewport }: PosUiMockupProps) {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 2, 2: 1, 3: 1, 4: 1 });
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("products");

  const visibleProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  const cartItems = PRODUCTS.filter((product) => cart[product.id]);
  const itemCount = cartItems.reduce((sum, product) => sum + cart[product.id], 0);
  const subtotal = useMemo(
    () => cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0),
    [cart, cartItems],
  );
  const tax = Math.round(subtotal * 0.16);
  const isPhone = viewport === "phone";

  const changeQuantity = (id: number, change: number) => {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + change);
      const updated = { ...current, [id]: next };
      if (!next) delete updated[id];
      return updated;
    });
  };

  const productsPanel = (
    <div className="flex h-full min-h-0 flex-col overflow-hidden border-ploy-border-primary bg-ploy-background-primary">
      <div className="shrink-0 p-3 sm:p-4">
        <div className={isPhone ? "space-y-3" : "flex items-center justify-between gap-3"}>
          <div>
            <p className="text-sm font-extrabold">Products</p>
            <p className="text-[11px] text-ploy-text-secondary">Choose an item to add</p>
          </div>
          <div className={isPhone ? "relative w-full" : "relative w-44 max-w-[55%]"}>
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ploy-text-secondary" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products"
              className="h-9 w-full rounded-lg border border-ploy-input-border bg-ploy-input-background pl-9 pr-3 text-xs outline-none focus:border-ploy-accent-primary"
            />
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-3 sm:px-4 sm:pb-4 [scrollbar-gutter:stable]">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map(({ id, name, price, stock, tax: taxLabel, icon: Icon }) => (
              <motion.button
                layout
                key={id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => changeQuantity(id, 1)}
                className="group rounded-xl border border-ploy-border-primary bg-ploy-background-primary p-2.5 text-left transition hover:border-ploy-accent-primary hover:shadow-md sm:p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ploy-accent-primary/15 text-ploy-accent-secondary sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="rounded bg-ploy-neutral-primary-s2 px-1.5 py-1 text-[9px] font-semibold text-ploy-text-secondary">{taxLabel}</span>
                </div>
                <p className="mt-3 text-xs font-extrabold sm:mt-4">{name}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="text-xs font-extrabold sm:text-sm">KSh {price}</p>
                  <p className={`text-right text-[9px] font-semibold sm:text-[10px] ${stock < 10 ? "text-ploy-accent-secondary" : "text-ploy-accent-tertiary-800"}`}>{stock} in stock</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between border-t border-ploy-border-primary px-3 py-2 text-[10px] text-ploy-text-secondary sm:px-4">
        <span>{visibleProducts.length} products shown</span>
        <span>Tap a card to add it</span>
      </div>
    </div>
  );

  const checkoutPanel = (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-ploy-neutral-primary-s2/70">
      <div className="flex shrink-0 items-center justify-between p-3 pb-0 sm:p-4 sm:pb-0">
        <div>
          <p className="text-sm font-extrabold">Checkout</p>
          <p className="text-[11px] text-ploy-text-secondary">{itemCount} items in this sale</p>
        </div>
        <button
          onClick={() => setCart({})}
          className="rounded-lg p-2 text-ploy-text-secondary transition hover:bg-ploy-background-primary hover:text-ploy-text-primary"
          aria-label="Clear cart"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="relative mt-3 min-h-0 flex-1 sm:mt-4">
        <div className="absolute inset-0 overflow-y-auto overscroll-contain px-3 pb-3 sm:px-4 sm:pb-4 [scrollbar-gutter:stable]">
          <div className="space-y-2">
            <AnimatePresence initial={false}>
              {cartItems.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 18 }}
                  className="rounded-lg border border-ploy-border-primary bg-ploy-background-primary px-3 py-2.5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold">{product.name}</p>
                      <p className="mt-0.5 text-[10px] leading-4 text-ploy-text-secondary">KSh {product.price} each</p>
                    </div>
                    <p className="shrink-0 text-xs font-extrabold">KSh {product.price * cart[product.id]}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <button onClick={() => changeQuantity(product.id, -1)} className="rounded-md border border-ploy-border-primary p-1" aria-label={`Remove one ${product.name}`}>
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-[11px] font-bold">{cart[product.id]}</span>
                    <button onClick={() => changeQuantity(product.id, 1)} className="rounded-md border border-ploy-border-primary p-1" aria-label={`Add one ${product.name}`}>
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!cartItems.length && (
              <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-ploy-border-primary text-xs text-ploy-text-secondary">Your cart is empty</div>
            )}
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-ploy-border-primary bg-ploy-neutral-primary-s2 px-3 py-2.5 text-[11px] leading-4 shadow-[0_-8px_20px_rgba(15,23,42,0.05)] sm:px-4 sm:py-3">
        <div className="flex justify-between text-ploy-text-secondary"><span>Subtotal</span><span>KSh {subtotal}</span></div>
        <div className="mt-1 flex justify-between text-ploy-text-secondary"><span>Tax</span><span>KSh {tax}</span></div>
        <motion.div key={subtotal} initial={{ scale: 1.03 }} animate={{ scale: 1 }} className="mt-2 flex justify-between border-t border-ploy-border-primary pt-2 text-sm font-extrabold"><span>Total</span><span>KSh {subtotal + tax}</span></motion.div>
        <button className="mt-2.5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-ploy-button-primary-background text-xs font-extrabold text-ploy-button-primary-text shadow-sm transition hover:bg-ploy-accent-primary/90">
          <WalletCards className="h-4 w-4" />Pay &amp; create receipt
        </button>
      </div>
    </div>
  );

  return (
    <div className={`pos-ui overflow-hidden border border-ploy-border-primary bg-ploy-background-primary shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-[width,height,border-radius] duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:duration-75 motion-reduce:ease-linear ${viewport === "phone" ? "h-[590px] w-[390px] max-w-full rounded-[2rem]" : viewport === "tablet" ? "h-[500px] w-[620px] max-w-full rounded-[1.5rem]" : "h-[430px] w-[720px] max-w-full rounded-xl"}`}>
      <div className="pos-ui__topbar flex h-12 items-center justify-between gap-3 border-b border-ploy-border-primary px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-ploy-accent-primary" />
          <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-ploy-neutral-primary-s4 sm:block" />
          <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-ploy-neutral-primary-s4 sm:block" />
          <span className="truncate text-[11px] font-bold sm:ml-1 sm:text-xs">QuickSales-POS</span>
        </div>
        <span className="hidden rounded bg-ploy-accent-tertiary/15 px-2 py-1 text-[10px] font-bold text-ploy-accent-tertiary-800 sm:block">eTIMS connected</span>
      </div>

      <div className="relative h-[calc(100%_-_3rem)] min-h-0 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-200 motion-reduce:duration-75 ${isPhone ? "pointer-events-none opacity-0" : "opacity-100"}`} aria-hidden={isPhone}>
          <div className={`grid h-full min-h-0 transition-[grid-template-columns] duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:duration-75 ${viewport === "tablet" ? "grid-cols-[1.08fr_0.92fr]" : "grid-cols-[1.4fr_0.8fr]"}`}>
            <div className="min-h-0 overflow-hidden border-r border-ploy-border-primary">{productsPanel}</div>
            <div className="min-h-0 overflow-hidden">{checkoutPanel}</div>
          </div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-200 motion-reduce:duration-75 ${isPhone ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={!isPhone}>
          <div className="flex h-full min-h-0 flex-col">
            <div className="grid shrink-0 grid-cols-2 border-b border-ploy-border-primary bg-ploy-background-primary p-2 pt-3">
              <button type="button" onClick={() => setMobilePanel("products")} className={`flex h-9 items-center justify-center gap-2 rounded-md text-xs font-bold transition ${mobilePanel === "products" ? "bg-ploy-accent-primary/15 text-ploy-accent-secondary" : "text-ploy-text-secondary"}`}>
                <ShoppingBag className="h-3.5 w-3.5" />Products
              </button>
              <button type="button" onClick={() => setMobilePanel("checkout")} className={`flex h-9 items-center justify-center gap-2 rounded-md text-xs font-bold transition ${mobilePanel === "checkout" ? "bg-ploy-accent-primary/15 text-ploy-accent-secondary" : "text-ploy-text-secondary"}`}>
                <span className="relative"><WalletCards className="h-3.5 w-3.5" />{itemCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-ploy-accent-secondary px-1 text-[8px] text-ploy-text-inverse">{itemCount}</span>}</span>
                Checkout
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobilePanel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }} className="h-full">
                  {mobilePanel === "products" ? productsPanel : checkoutPanel}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
