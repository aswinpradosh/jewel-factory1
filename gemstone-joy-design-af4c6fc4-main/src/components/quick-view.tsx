import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowRight,
  Award,
  Check,
  Gem,
  Heart,
  MapPin,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type QuickViewProduct = {
  name: string;
  price: string;
  img: string;
  cert: string;
  metal: string;
  carat: string;
  shape: string;
  description: string;
  availability: string;
};

const SPARKLES = [
  { top: "16%", left: "22%", size: 18, delay: "0s" },
  { top: "30%", left: "70%", size: 12, delay: "0.7s" },
  { top: "58%", left: "38%", size: 22, delay: "1.2s" },
  { top: "72%", left: "78%", size: 14, delay: "0.4s" },
  { top: "44%", left: "12%", size: 12, delay: "1.6s" },
];

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gold/15 bg-cream/40 px-3 py-2">
      <dt className="text-[9px] uppercase tracking-[0.25em] text-gold-deep/80">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

export function QuickView({
  product,
  open,
  onOpenChange,
}: {
  product: QuickViewProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/70 backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out",
            "duration-300",
          )}
        />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed z-50 overflow-hidden bg-background text-foreground shadow-2xl outline-none",
            // mobile: full-screen luxury drawer
            "inset-0 rounded-none",
            // desktop: large centered modal (~78vw)
            "md:inset-auto md:left-1/2 md:top-1/2 md:h-auto md:max-h-[88vh] md:w-[78vw] md:max-w-5xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl md:border md:border-gold/30",
            // cinematic spring-like entrance
            "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom-8",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-bottom-8",
            "md:data-[state=open]:zoom-in-95 md:data-[state=open]:slide-in-from-bottom-0",
            "md:data-[state=closed]:zoom-out-95",
            "duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          )}
        >
          {product && (
            <div className="grid h-full grid-rows-[42vh_1fr] overflow-y-auto md:max-h-[88vh] md:grid-cols-2 md:grid-rows-1 md:overflow-hidden">
              {/* ---- Left: large product image ---- */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-cream to-sand/40">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* diamond sparkle animation */}
                {SPARKLES.map((s, i) => (
                  <Sparkles
                    key={i}
                    className="animate-sparkle absolute text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                    style={{
                      top: s.top,
                      left: s.left,
                      width: s.size,
                      height: s.size,
                      animationDelay: s.delay,
                    }}
                  />
                ))}
                {/* gold glow + sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_30%_20%,rgba(245,230,168,0.25),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
                {/* Crafted in Dubai badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/55 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur">
                  <MapPin className="h-3 w-3" />
                  Crafted in Dubai
                </div>
              </div>

              {/* ---- Right: details ---- */}
              <div className="relative flex flex-col gap-5 overflow-y-auto p-6 md:p-9">
                <Dialog.Close
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-cream/60 text-foreground/70 transition-all hover:scale-105 hover:border-gold hover:text-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Dialog.Close>

                <div>
                  <div className="flex items-center gap-1.5 text-gold-deep">
                    <Award className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                      {product.cert} Certified
                    </span>
                  </div>
                  <Dialog.Title className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                    {product.name}
                  </Dialog.Title>
                  <p className="mt-2 text-2xl font-medium text-gold-deep">
                    {product.price}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/70">
                  {product.description}
                </p>

                {/* specs */}
                <dl className="grid grid-cols-2 gap-2.5">
                  <Spec label="Metal" value={product.metal} />
                  <Spec label="Diamond Weight" value={product.carat} />
                  <Spec label="Diamond Shape" value={product.shape} />
                  <Spec label="Certification" value={product.cert} />
                </dl>

                {/* availability */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-600 text-white">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {product.availability}
                </div>

                {/* buttons */}
                <div className="mt-auto flex flex-col gap-2.5 pt-2">
                  <button className="animate-gold-pulse inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold to-gold-deep px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a1208] transition-transform hover:-translate-y-0.5">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Bag
                  </button>
                  <div className="flex gap-2.5">
                    <button className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold-deep">
                      View Full Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      aria-label="Add to wishlist"
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-foreground/20 text-foreground/70 transition-all hover:scale-105 hover:border-gold hover:text-rose-500"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                  <Gem className="h-3 w-3 text-gold-deep" />
                  Hand-crafted · Certified · Timeless
                </div>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
