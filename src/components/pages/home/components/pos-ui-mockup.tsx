import { AnimatePresence, motion } from "motion/react";
import { Coffee, Minus, Package, Plus, Search, ShoppingBag, Trash2, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Ballpoint pen", price: 80, stock: 126, tax: "VAT 16%", icon: Package },
  { id: 2, name: "Fresh milk", price: 120, stock: 18, tax: "VAT 0%", icon: Coffee },
  { id: 3, name: "Canvas tote", price: 650, stock: 42, tax: "VAT 16%", icon: ShoppingBag },
  { id: 4, name: "Office file", price: 180, stock: 9, tax: "VAT 16%", icon: Package },
];

/** Front-end-only POS preview based on the supplied QuickSales product and checkout patterns. */
export function PosUiMockup() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 2, 2: 1 });

  const visibleProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  const cartItems = PRODUCTS.filter((product) => cart[product.id]);
  const subtotal = useMemo(
    () => cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0),
    [cart, cartItems],
  );
  const tax = Math.round(subtotal * 0.16);

  const changeQuantity = (id: number, change: number) => {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + change);
      const updated = { ...current, [id]: next };
      if (!next) delete updated[id];
      return updated;
    });
  };

  return (
    <div className="pos-ui overflow-hidden rounded-xl border border-ploy-border-primary bg-ploy-background-primary shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <div className="pos-ui__topbar flex items-center justify-between border-b border-ploy-border-primary px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ploy-accent-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-ploy-neutral-primary-s4" />
          <span className="h-2.5 w-2.5 rounded-full bg-ploy-neutral-primary-s4" />
          <span className="ml-2 text-xs font-bold">QuickSales-POS</span>
        </div>
        <span className="rounded bg-ploy-accent-tertiary/15 px-2 py-1 text-[10px] font-bold text-ploy-accent-tertiary-800">eTIMS connected</span>
      </div>

      <div className="grid min-h-[430px] lg:grid-cols-[1.4fr_0.8fr]">
        <div className="border-b border-ploy-border-primary p-4 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-sm font-extrabold">Products</p><p className="text-[11px] text-ploy-text-secondary">Choose an item to add</p></div>
            <div className="relative w-44 max-w-[55%]">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ploy-text-secondary" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" className="h-9 w-full rounded-lg border border-ploy-input-border bg-ploy-input-background pl-9 pr-3 text-xs outline-none focus:border-ploy-accent-primary" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
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
                  className="group rounded-xl border border-ploy-border-primary bg-ploy-background-primary p-3 text-left transition hover:border-ploy-accent-primary hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ploy-accent-primary/15 text-ploy-accent-secondary"><Icon className="h-4 w-4" /></span>
                    <span className="rounded bg-ploy-neutral-primary-s2 px-1.5 py-1 text-[9px] font-semibold text-ploy-text-secondary">{taxLabel}</span>
                  </div>
                  <p className="mt-4 text-xs font-extrabold">{name}</p>
                  <div className="mt-2 flex items-end justify-between"><p className="text-sm font-extrabold">KSh {price}</p><p className={`text-[10px] font-semibold ${stock < 10 ? "text-ploy-accent-secondary" : "text-ploy-accent-tertiary-800"}`}>{stock} in stock</p></div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-ploy-text-secondary"><span>4 products shown</span><span>Tap a card to add it</span></div>
        </div>

        <div className="flex flex-col bg-ploy-neutral-primary-s2/70 p-4">
          <div className="flex items-center justify-between"><div><p className="text-sm font-extrabold">Checkout</p><p className="text-[11px] text-ploy-text-secondary">{cartItems.length} items selected</p></div><button onClick={() => setCart({})} className="rounded-lg p-2 text-ploy-text-secondary transition hover:bg-ploy-background-primary hover:text-ploy-text-primary" aria-label="Clear cart"><Trash2 className="h-4 w-4" /></button></div>

          <div className="mt-4 flex-1 space-y-2">
            <AnimatePresence initial={false}>
              {cartItems.map((product) => (
                <motion.div key={product.id} layout initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 18 }} className="rounded-xl border border-ploy-border-primary bg-ploy-background-primary p-3 shadow-sm">
                  <div className="flex items-start justify-between gap-2"><div><p className="text-xs font-bold">{product.name}</p><p className="mt-1 text-[10px] text-ploy-text-secondary">KSh {product.price} each</p></div><p className="text-xs font-extrabold">KSh {product.price * cart[product.id]}</p></div>
                  <div className="mt-3 flex items-center gap-2"><button onClick={() => changeQuantity(product.id, -1)} className="rounded-md border border-ploy-border-primary p-1"><Minus className="h-3 w-3" /></button><span className="w-5 text-center text-xs font-bold">{cart[product.id]}</span><button onClick={() => changeQuantity(product.id, 1)} className="rounded-md border border-ploy-border-primary p-1"><Plus className="h-3 w-3" /></button></div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!cartItems.length && <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-ploy-border-primary text-xs text-ploy-text-secondary">Your cart is empty</div>}
          </div>

          <div className="mt-4 border-t border-ploy-border-primary pt-4 text-xs">
            <div className="flex justify-between text-ploy-text-secondary"><span>Subtotal</span><span>KSh {subtotal}</span></div>
            <div className="mt-2 flex justify-between text-ploy-text-secondary"><span>Tax</span><span>KSh {tax}</span></div>
            <motion.div key={subtotal} initial={{ scale: 1.04 }} animate={{ scale: 1 }} className="mt-3 flex justify-between text-sm font-extrabold"><span>Total</span><span>KSh {subtotal + tax}</span></motion.div>
            <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-ploy-button-primary-background text-xs font-extrabold text-ploy-button-primary-text shadow-sm transition hover:bg-ploy-accent-primary/90"><WalletCards className="h-4 w-4" />Pay &amp; create receipt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
