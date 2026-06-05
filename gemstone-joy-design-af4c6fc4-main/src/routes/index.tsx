import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search, MapPin, Heart, ShoppingBag, User, Facebook, Instagram,
  ShieldCheck, Gem, Sparkles, CreditCard, Award, ArrowRight, Star, Share2, Gift, ChevronDown,
} from "lucide-react";
import {
  CapriGoldLogo,
  DubaiJewelWordmark,
  LabMark,
} from "@/components/brand";
import uaeFlagGif from "@/assets/uae-flag.gif";
import giaLogo from "@/assets/gia-logo.png";
import igiLogo from "@/assets/igi-logo.png";
import idlLogo from "@/assets/idl-logo.png";
import sglLogo from "@/assets/sgl-logo.png";
import { QuickView, type QuickViewProduct } from "@/components/quick-view";
import { WhatsAppButton } from "@/components/whatsapp-button";
import catRings from "@/assets/cat-rings.jpg";
import catNecklaces from "@/assets/cat-necklaces.jpg";
import catEarrings from "@/assets/cat-earrings.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import ringSolitaire from "@/assets/ring-solitaire.jpg";
import ringHalo from "@/assets/ring-halo.jpg";
import ringTrilogy from "@/assets/ring-trilogy.jpg";
import ringVintage from "@/assets/ring-vintage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Gold Jewellers — Forever Beautiful" },
      { name: "description", content: "Discover GIA & IGI certified diamond jewellery, engagement rings, and timeless gold collections — designed and produced in Dubai." },
    ],
  }),
  component: Index,
});

const NAV: { label: string; hasMenu: boolean }[] = [
  { label: "Collection", hasMenu: true },
  { label: "Rings", hasMenu: true },
  { label: "Earrings", hasMenu: true },
  { label: "Bracelets", hasMenu: true },
  { label: "Necklace", hasMenu: true },
  { label: "Gifts", hasMenu: true },
  { label: "Engagement Rings", hasMenu: false },
];

const CATEGORIES = [
  { name: "Rings", img: catRings },
  { name: "Necklaces", img: catNecklaces },
  { name: "Earrings", img: catEarrings },
  { name: "Bracelets", img: catBracelets },
];

const RINGS: QuickViewProduct[] = [
  {
    name: "Eternal Solitaire",
    price: "AED 4,850",
    img: ringSolitaire,
    cert: "GIA",
    metal: "18K White Gold",
    carat: "1.05 ct",
    shape: "Round Brilliant",
    description:
      "A timeless single-stone solitaire, hand-set in 18K gold to let an ethically sourced, GIA-certified diamond take centre stage — pure, luminous, forever.",
    availability: "In Stock — Ships in 5 days",
  },
  {
    name: "Blooming Halo",
    price: "AED 6,200",
    img: ringHalo,
    cert: "IGI",
    metal: "18K Rose Gold",
    carat: "1.40 ct",
    shape: "Cushion Cut",
    description:
      "A radiant halo of pavé diamonds blooms around a brilliant centre stone, amplifying its fire with a delicate, romantic silhouette crafted in Dubai.",
    availability: "In Stock — Ships in 5 days",
  },
  {
    name: "Trilogy Brilliance",
    price: "AED 7,490",
    img: ringTrilogy,
    cert: "GIA",
    metal: "18K Yellow Gold",
    carat: "1.80 ct",
    shape: "Emerald Cut",
    description:
      "Past, present and future — three certified diamonds united in one statement of devotion, each facet meticulously aligned by master artisans.",
    availability: "Made to Order — 7 days",
  },
  {
    name: "Heritage Vintage",
    price: "AED 5,720",
    img: ringVintage,
    cert: "IGI",
    metal: "18K White Gold",
    carat: "1.20 ct",
    shape: "Oval Brilliant",
    description:
      "Inspired by old-world glamour, intricate milgrain detailing frames a glowing oval diamond — an heirloom designed to be worn for a lifetime.",
    availability: "In Stock — Ships in 5 days",
  },
];

const BADGES = [
  { icon: ShieldCheck, text: "REGULATED BY UAE JEWELLERY STANDARDS" },
  { icon: Gem, text: "GIA & IGI CERTIFIED DIAMONDS" },
  { icon: Heart, text: "SINCE 2006" },
  { icon: MapPin, text: "GOLD & DIAMOND PARK SHOWROOM" },
  { icon: CreditCard, text: "TABBY AVAILABLE" },
];

function Index() {
  const [quickView, setQuickView] = useState<QuickViewProduct | null>(null);

  return (
    <div className="min-h-screen bg-cream font-sans text-foreground">
      {/* Announcement bar */}
      <div className="bg-sand/80 text-[11px] tracking-wide text-foreground/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Facebook className="h-3.5 w-3.5" />
            <Instagram className="h-3.5 w-3.5" />
            <span className="ml-2 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Visit Our Premium Residential Developments
            </span>
          </div>
          <div className="hidden md:block">AED — United Arab Emirates Dirham ▾</div>
        </div>
      </div>

      {/* Logo row */}
      <header className="border-b border-sand/60 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <CapriGoldLogo className="h-12 md:h-14" />
            <div className="hidden sm:flex items-center gap-3 text-foreground/70">
              <MapPin className="h-5 w-5" />
              <Search className="h-5 w-5" />
            </div>
          </div>
          <div className="text-center">
            <DubaiJewelWordmark className="text-3xl md:text-5xl" />
            <p className="mt-2 text-[10px] tracking-[0.3em] text-foreground/60">
              JEWELLERS &nbsp;|&nbsp; FOREVER BEAUTIFUL
            </p>
          </div>
          <div className="flex items-center gap-4 text-foreground/70">
            <User className="h-5 w-5" />
            <Heart className="h-5 w-5" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-deep text-[10px] font-medium text-white">0</span>
            </div>
          </div>
        </div>

        {/* Top tabs */}
        <nav className="border-t border-sand/50">
          <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2.5 text-[15px] font-medium text-foreground">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 transition-colors hover:text-gold-deep"
                >
                  {item.label}
                  {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 stroke-[1.75]" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Designed & Produced in Dubai */}
      <section className="relative overflow-hidden bg-cream">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-16">
          {/* Flag on top — slightly wider than the card */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gold/40 shadow-[0_24px_60px_-24px_rgba(138,106,42,0.55)]">
            <img
              src={uaeFlagGif}
              alt="United Arab Emirates flag"
              className="block h-56 w-full object-cover md:h-80"
            />
            {/* ultra-realistic silk fabric texture: warp threads + sheen */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 4px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 5px), linear-gradient(180deg, rgba(255,255,255,0.16), transparent 38%, rgba(0,0,0,0.2))",
              }}
            />
            {/* moving satin highlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,248,220,0.5) 48%, transparent 62%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25" />
            {/* soft bottom shade where the card stacks over it */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {/* Card below — narrower, smaller, stacked over the flag's lower edge */}
          <div
            className="relative z-10 -mt-12 md:-mt-14 mx-auto max-w-4xl rounded-2xl border border-gold/40 px-6 py-6 md:py-7 text-center shadow-[0_24px_60px_-24px_rgba(138,106,42,0.6)]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(245,230,168,0.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.35), transparent 55%), linear-gradient(135deg, #1a1208 0%, #2a1d0b 50%, #1a1208 100%)",
            }}
          >
            {/* inner gold hairline for an ultra-premium frame */}
            <div className="pointer-events-none absolute inset-[6px] rounded-xl border border-gold/20" />
            <div className="relative flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
              <span className="h-px w-8 bg-gold/50" />
              <Sparkles className="h-3 w-3" />
              <span>An emirate of craft</span>
              <Sparkles className="h-3 w-3" />
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="relative mt-2 font-display text-2xl md:text-4xl gold-shimmer">
              Designed &amp; Produced in Dubai
            </h2>
            <p className="relative mt-1.5 text-[11px] md:text-xs tracking-widest text-gold/70">
              HAND-CRAFTED · CERTIFIED · TIMELESS
            </p>
          </div>
        </div>
      </section>

      {/* Trust badges marquee */}
      <section className="mt-10 overflow-hidden border-y border-sand bg-background py-3">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...BADGES, ...BADGES, ...BADGES].map((b, i) => (
            <span key={i} className="flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-foreground/80">
              <b.icon className="h-4 w-4 text-gold-deep" />
              {b.text}
            </span>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="Curated for you" title="Shop by Category" />
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-sand bg-background"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-[10px] tracking-[0.3em] text-gold/80">EXPLORE</p>
                <h3 className="font-display text-2xl text-white">{c.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Engagement Rings */}
      <section className="bg-sand/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="A promise, perfected" title="Engagement Rings" />
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {RINGS.map((r) => (
              <article
                key={r.name}
                onClick={() => setQuickView(r)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setQuickView(r);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-sand bg-background transition-shadow hover:shadow-[0_15px_40px_-15px_rgba(138,106,42,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    aria-label="Add to wishlist"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-foreground/70 backdrop-blur transition-colors hover:text-rose-500"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  {/* Quick View hint on hover */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/55 to-transparent pb-3 pt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Quick View
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-gold-deep">
                    <Award className="h-3 w-3" />
                    <span className="text-[10px] tracking-widest">{r.cert} CERTIFIED</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg">{r.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{r.price}</span>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full bg-foreground px-3 py-1.5 text-[11px] uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Jewelry · Factory Prices Hero */}
      <section className="relative overflow-hidden bg-[#0a1733] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.2), transparent 50%)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={ringHalo} alt="Luxury jewelry crafted in Dubai" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-center text-[10px] font-semibold uppercase tracking-widest text-[#0a1733] shadow-xl">
              <span>18K<br/>Gold</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold/80">An Emirate of Craft</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
              <span className="gold-shimmer">Luxury Jewelry.</span><br />
              <span className="gold-shimmer">Factory Prices.</span><br />
              <span className="text-white">Directly From Dubai.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/70 max-w-md md:max-w-none mx-auto">
              Crafted in 18K Gold, customized in 5 days, shipped globally.
            </p>
            <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
              <a href="#" className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-gold to-gold-deep px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0a1733] shadow-lg transition-transform hover:-translate-y-0.5">
                Shop Bestsellers <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="group inline-flex items-center gap-2 rounded-md border border-gold/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold/10">
                Custom Design Inquiry <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Diamonds */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Trust &amp; Transparency</p>
            <h2 className="mt-2 font-display italic text-3xl md:text-5xl">Certified Diamonds. Absolute Confidence.</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm italic text-foreground/70">
              All diamonds are independently certified by leading gemological laboratories, ensuring authenticity, grading accuracy, and complete transparency.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { short: "IGI", name: "International Gemological Institute", logo: igiLogo },
              { short: "IDL", name: "International Diamond Laboratory", logo: idlLogo },
              { short: "GIA", name: "Gemological Institute of America", logo: giaLogo },
              { short: "SGL", name: "Solitaire Gemmological Laboratories", logo: sglLogo },
            ].map((lab) => (
              <div key={lab.name} className="flex flex-col items-center rounded-xl border border-sand bg-background p-6 text-center transition-shadow hover:shadow-[0_15px_40px_-15px_rgba(138,106,42,0.3)]">
                <div className="flex h-20 items-center justify-center">
                  {lab.logo ? (
                    <img
                      src={lab.logo}
                      alt={`${lab.name} logo`}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <LabMark short={lab.short} />
                  )}
                </div>
                <p className="mt-4 text-sm font-medium text-foreground/80">{lab.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Advantage */}
      <section className="bg-sand/30 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Factory Advantage</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Cut the Middleman. Keep the Quality.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-background p-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/60">Traditional Retail</p>
              <p className="mt-4 text-sm md:text-base text-foreground/70">
                Mine <ArrowRight className="inline h-3 w-3" /> Factory <ArrowRight className="inline h-3 w-3" /> Brand <ArrowRight className="inline h-3 w-3" /> Retailer <ArrowRight className="inline h-3 w-3" /> <span className="font-semibold">YOU</span>
              </p>
              <p className="mt-3 text-xs text-foreground/50">4 markups. Inflated prices.</p>
            </div>
            <div className="relative rounded-2xl border border-gold/40 bg-gradient-to-br from-[#1a1208] via-[#2a1d0b] to-[#1a1208] p-6 text-center text-white shadow-[0_20px_50px_-20px_rgba(138,106,42,0.6)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Our Direct Model</p>
              <p className="mt-4 text-sm md:text-base">
                Mine <ArrowRight className="inline h-3 w-3 text-gold" /> <span className="font-semibold text-gold">FACTORY (Us)</span> <ArrowRight className="inline h-3 w-3 text-gold" /> <span className="font-semibold">YOU</span>
              </p>
              <p className="mt-3 text-xs text-gold/80">One price. Pure craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Club */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold-deep">
            <Star className="h-3 w-3 fill-current" /> Invite · Earn · Redeem
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">Join The Ambassador Club</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-foreground/70">
            Turn your passion for fine jewelry into exquisite rewards. Share your unique invite link on Instagram, WhatsApp, or any social platform. When friends discover our factory-direct Natural &amp; Lab-Grown Diamonds, you earn valuable reward points to spend on your next 18K gold piece.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gold/30 bg-cream/40 p-5 text-left">
              <Gift className="h-6 w-6 text-gold-deep" />
              <p className="mt-3 font-display text-2xl">Earn 250 AED <span className="text-base text-gold-deep">(5 pts)</span></p>
              <p className="mt-1 text-xs text-foreground/60">For every friend's first order.</p>
            </div>
            <div className="rounded-xl border border-gold/30 bg-cream/40 p-5 text-left">
              <Sparkles className="h-6 w-6 text-gold-deep" />
              <p className="mt-3 font-display text-2xl">Redeem Instantly</p>
              <p className="mt-1 text-xs text-foreground/60">At checkout, on any website collection.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-background transition-transform hover:-translate-y-0.5">
              <Share2 className="h-4 w-4" /> Invite &amp; Earn Now
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background">
              <Gem className="h-4 w-4" /> Lab-Grown Diamond Rings
            </a>
          </div>
        </div>
      </section>

      {/* Crafting Timeless Elegance */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display italic text-3xl md:text-5xl">Crafting Timeless Elegance in the Heart of Dubai</h2>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border border-sand grayscale">
                <img src={ringSolitaire} alt="Hand-crafted in Dubai" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden md:block rounded-xl bg-foreground px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-background">
                Since 2006
              </div>
            </div>
            <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-foreground/80">
              <p>
                Rooted in the heart of Dubai, our brand brings together <strong>exceptional craftsmanship</strong>, <strong>certified diamonds</strong>, and <strong>refined design</strong> to create pieces that are both timeless and personal. Every creation is carefully handcrafted using premium materials, including <strong>18K gold</strong> and <strong>ethically sourced diamonds</strong>.
              </p>
              <p>
                From the initial design concept to the final polish, every detail is thoughtfully executed by skilled artisans — delivering not just products, but <strong>lasting symbols of elegance and emotion</strong>.
              </p>
              <p>
                We specialize in both ready-to-wear collections and <strong>custom-made jewelry</strong>. Whether it's an engagement ring, a meaningful gift, or a personal statement piece, every design is truly special.
              </p>
              <p className="border-l-2 border-gold pl-4 italic text-foreground">
                Because every piece we create is not just jewelry — it's a story meant to be worn for a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local store CTA */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Your Local Jewelry Store in Dubai</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70">
            A trusted <strong>jewelry store in Dubai</strong>, serving customers looking for high-quality gemstone and gold jewelry near them — with free worldwide shipping and complimentary engraving for international buyers.
          </p>
          <p className="mt-6 font-display text-xl md:text-2xl">Why Dubai Is the Best Place to Buy Gemstone Jewelry.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-gradient-to-b from-gold to-gold-deep px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0a1733] shadow transition-transform hover:-translate-y-0.5">
              Visit Showroom
            </a>
            <a href="#" className="rounded-full border border-foreground/30 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background">
              Checkout Our Blog
            </a>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-gold/20 bg-[#f5f2ec]">
        {/* Decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex flex-col gap-3">
                <CapriGoldLogo className="h-20" />
                <DubaiJewelWordmark className="text-2xl" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                Dubai Jewel Factory is an E-Commerce website of Capri Gold FZCo. Its physical store is Capri Gold Factory Outlet. It was founded in Dubai in the year 2006. We sell pieces of jewelry at factory price across the globe.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 px-4 py-2 backdrop-blur">
                <span className="text-base">🇦🇪</span>
                <span className="text-xs font-semibold tracking-wider text-foreground/80">AED</span>
                <ChevronDown className="h-3.5 w-3.5 text-foreground/60" />
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-display text-xl text-foreground">Customer Service</h3>
              <div className="mt-3 h-px w-10 bg-gold" />
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {["Home","Blog","About Us","Contact Us","Customer Reviews","Customize Jewelry","Looking for a trusted jewelry store in Dubai? Visit Dubai Jewel Factory."].map((l) => (
                  <li key={l}>
                    <a href="#" className="group inline-flex items-start gap-2 transition-colors hover:text-gold-deep">
                      <span className="mt-1.5 h-px w-3 bg-gold/40 transition-all group-hover:w-5 group-hover:bg-gold" />
                      <span>{l}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-display text-xl text-foreground">Useful Links</h3>
              <div className="mt-3 h-px w-10 bg-gold" />
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {["Privacy Policy","Delivery and Return Policy","Terms & Conditions","Offers and Discount Policy","FAQ Dubai – Europe","Size Chart","Why Dubai Is the Best Place to Buy Gemstone Jewelry?","The Ambassador Club – Terms & Conditions"].map((l) => (
                  <li key={l}>
                    <a href="#" className="group inline-flex items-start gap-2 transition-colors hover:text-gold-deep">
                      <span className="mt-1.5 h-px w-3 bg-gold/40 transition-all group-hover:w-5 group-hover:bg-gold" />
                      <span>{l}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-xl text-foreground">Contact Information</h3>
              <div className="mt-3 h-px w-10 bg-gold" />
              <div className="mt-5 space-y-4 text-sm text-foreground/70">
                <p className="leading-relaxed">
                  <span className="font-semibold text-foreground">Address:</span> Capri Gold FZCo. Gold and Diamond Park, Ground Floor, Building 1 – G50A, Sheikh Zayed Rd. Dubai, UAE
                </p>
                <p><span className="font-semibold text-foreground">Email:</span> <a href="mailto:info@dubaijewelfactory.com" className="text-gold-deep hover:underline">info@dubaijewelfactory.com</a></p>
                <p><span className="font-semibold text-foreground">Phone:</span> <a href="tel:+971569784854" className="text-gold-deep hover:underline">+971 56 978 4854</a></p>
                <p><span className="font-semibold text-foreground">Phone:</span> <a href="tel:+971508459432" className="text-gold-deep hover:underline">+971 50 845 9432</a></p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Share2, label: "X" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="group flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 transition-all hover:scale-110 hover:border-gold hover:bg-gradient-to-br hover:from-gold hover:to-gold-deep hover:text-background">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <a href="mailto:info@dubaijewelfactory.com" aria-label="Email" className="group flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 transition-all hover:scale-110 hover:border-gold hover:bg-gradient-to-br hover:from-gold hover:to-gold-deep hover:text-background">
                  <span className="text-sm">✉</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gold/20 pt-6 md:flex-row">
            <p className="text-xs tracking-wider text-foreground/60">
              © {new Date().getFullYear()} <span className="font-semibold text-foreground">Capri Gold · Dubai Jewel Factory</span> · All Rights Reserved
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: "VISA", bg: "bg-[#1a1f71]", color: "text-white" },
                { label: "PayPal", bg: "bg-[#003087]", color: "text-white" },
                { label: "MC", bg: "bg-gradient-to-r from-[#eb001b] to-[#f79e1b]", color: "text-white" },
                { label: "AMEX", bg: "bg-[#2e77bb]", color: "text-white" },
                { label: "Diners", bg: "bg-foreground", color: "text-background" },
              ].map((p) => (
                <div key={p.label} className={`flex h-7 w-12 items-center justify-center rounded ${p.bg} ${p.color} text-[10px] font-bold tracking-tight shadow-sm`}>
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] text-foreground/40">
            Designed &amp; Produced in Dubai 🇦🇪
          </p>
        </div>
      </footer>

      {/* Ultra-premium Quick View modal */}
      <QuickView
        product={quickView}
        open={quickView !== null}
        onOpenChange={(o) => {
          if (!o) setQuickView(null);
        }}
      />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-2 font-display text-4xl md:text-5xl text-foreground">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
    </div>
  );
}
