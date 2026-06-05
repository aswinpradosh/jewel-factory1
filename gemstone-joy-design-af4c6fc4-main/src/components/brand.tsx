import { cn } from "@/lib/utils";
import capriGoldLogo from "@/assets/capri-gold-logo.png";

/* ------------------------------------------------------------------ *
 * Brand assets, rendered as self-contained SVG / styled markup.
 *
 * These replace the Lovable cloud image assets (`*.asset.json`) that
 * only resolve on Lovable's hosting. Rendering them inline keeps them
 * crisp at any size, on-theme, and working in local/standalone builds.
 * ------------------------------------------------------------------ */

/** Official Capri Gold solitaire-ring logo (gem + band + "CAPRI GOLD / SINCE 2006"). */
export function CapriGoldLogo({ className }: { className?: string }) {
  return (
    <img
      src={capriGoldLogo}
      alt="Capri Gold — Since 2006"
      // mix-blend-multiply drops the white PNG background on light/cream sections
      className={cn("w-auto object-contain mix-blend-multiply", className)}
    />
  );
}

/** "Dubai Jewel Factory" wordmark in gold-foil serif. */
export function DubaiJewelWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-gold-foil font-display font-medium leading-none tracking-[0.04em]",
        className,
      )}
    >
      Dubai Jewel Factory
    </span>
  );
}

/**
 * Ultra-premium 3D waving UAE flag.
 *
 * The artwork is drawn full-bleed (preserveAspectRatio="none") so all four
 * colours stay visible edge-to-edge in a wide banner — no zoom/crop. Depth
 * comes from per-stripe satin gradients + animated turbulence cloth ripple +
 * vertical fold lighting + a diagonal sheen sweep and a soft vignette.
 */
export function UaeFlag3D({ className }: { className?: string }) {
  // Layout (viewBox 1200 x 300): red hoist = 1/4 width, three equal stripes.
  const W = 1200;
  const H = 300;
  const hoist = 300;
  const band = H / 3;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Flag of the United Arab Emirates"
    >
      <defs>
        {/* animated cloth ripple */}
        <filter id="uae-wave" x="-10%" y="-15%" width="120%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.014"
            numOctaves="2"
            seed="7"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="14s"
              values="0.006 0.014; 0.009 0.010; 0.006 0.014"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* per-stripe satin gradients (subtle top-to-bottom sheen) */}
        <linearGradient id="uae-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a8f50" />
          <stop offset="50%" stopColor="#00732F" />
          <stop offset="100%" stopColor="#005a26" />
        </linearGradient>
        <linearGradient id="uae-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f3f3f0" />
          <stop offset="100%" stopColor="#e4e4df" />
        </linearGradient>
        <linearGradient id="uae-black" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="55%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="uae-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff2a2a" />
          <stop offset="55%" stopColor="#e10600" />
          <stop offset="100%" stopColor="#c20000" />
        </linearGradient>

        {/* vertical fold highlights / shadows for 3D depth */}
        <linearGradient id="uae-folds" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="9%" stopColor="#000" stopOpacity="0.26" />
          <stop offset="18%" stopColor="#fff" stopOpacity="0.20" />
          <stop offset="31%" stopColor="#000" stopOpacity="0.22" />
          <stop offset="44%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="57%" stopColor="#000" stopOpacity="0.24" />
          <stop offset="70%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="83%" stopColor="#000" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>

        {/* diagonal satin sheen sweep */}
        <linearGradient id="uae-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="40%" stopColor="#fff" stopOpacity="0" />
          <stop offset="70%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.10" />
        </linearGradient>

        {/* soft top/bottom vignette for depth */}
        <linearGradient id="uae-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.22" />
          <stop offset="18%" stopColor="#000" stopOpacity="0" />
          <stop offset="82%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      <g filter="url(#uae-wave)">
        {/* three horizontal stripes (full width) */}
        <rect x="0" y="0" width={W} height={band} fill="url(#uae-green)" />
        <rect x="0" y={band} width={W} height={band} fill="url(#uae-white)" />
        <rect x="0" y={band * 2} width={W} height={band} fill="url(#uae-black)" />

        {/* red hoist bar */}
        <rect x="0" y="0" width={hoist} height={H} fill="url(#uae-red)" />
        {/* subtle shadow seam where the hoist meets the stripes */}
        <rect x={hoist - 6} y="0" width="12" height={H} fill="#000" opacity="0.12" />

        {/* lighting layers ripple together with the cloth */}
        <rect x="0" y="0" width={W} height={H} fill="url(#uae-folds)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#uae-sheen)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#uae-vignette)" />
      </g>
    </svg>
  );
}

/**
 * Realistic UAE flag flying on a flagpole against a soft sky — premium,
 * dependency-free SVG. The cloth waves via animated turbulence displacement.
 */
export function UaeFlagScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 440"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="UAE flag flying on a flagpole"
    >
      <defs>
        {/* sky: cool blue up top warming toward the horizon */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9fc6ea" />
          <stop offset="45%" stopColor="#c7ddef" />
          <stop offset="78%" stopColor="#ece6da" />
          <stop offset="100%" stopColor="#f6efe2" />
        </linearGradient>

        {/* brushed-metal flagpole */}
        <linearGradient id="pole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7d7d7d" />
          <stop offset="35%" stopColor="#eaeaea" />
          <stop offset="60%" stopColor="#bcbcbc" />
          <stop offset="100%" stopColor="#6f6f6f" />
        </linearGradient>
        <radialGradient id="finial" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#f7ecae" />
          <stop offset="55%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8a6a2a" />
        </radialGradient>

        {/* flag stripe satins */}
        <linearGradient id="fs-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a8f50" />
          <stop offset="100%" stopColor="#006a2c" />
        </linearGradient>
        <linearGradient id="fs-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ececE6" />
        </linearGradient>
        <linearGradient id="fs-black" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#232323" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="fs-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff2a2a" />
          <stop offset="100%" stopColor="#cc0000" />
        </linearGradient>

        {/* fold shading + sheen for the cloth */}
        <linearGradient id="fs-folds" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.18" />
          <stop offset="14%" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="30%" stopColor="#000" stopOpacity="0.24" />
          <stop offset="48%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="66%" stopColor="#000" stopOpacity="0.26" />
          <stop offset="84%" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>

        <filter id="cloud-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>

        {/* animated cloth ripple */}
        <filter id="flag-wave" x="-15%" y="-25%" width="130%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.016"
            numOctaves="2"
            seed="11"
            result="n"
          >
            <animate
              attributeName="baseFrequency"
              dur="13s"
              values="0.008 0.016; 0.012 0.011; 0.008 0.016"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      {/* sky + clouds */}
      <rect x="0" y="0" width="1200" height="440" fill="url(#sky)" />
      <g fill="#ffffff" filter="url(#cloud-blur)">
        <ellipse cx="240" cy="80" rx="150" ry="34" opacity="0.55" />
        <ellipse cx="640" cy="55" rx="190" ry="40" opacity="0.5" />
        <ellipse cx="980" cy="120" rx="170" ry="36" opacity="0.5" />
        <ellipse cx="1060" cy="320" rx="220" ry="52" opacity="0.45" />
        <ellipse cx="120" cy="300" rx="160" ry="44" opacity="0.4" />
      </g>

      {/* flagpole + gold finial */}
      <rect x="246" y="26" width="11" height="414" fill="url(#pole)" />
      <rect x="244" y="86" width="15" height="6" fill="#caa83e" opacity="0.8" />
      <circle cx="251.5" cy="24" r="13" fill="url(#finial)" />

      {/* waving flag attached at the pole (red hoist) */}
      <g filter="url(#flag-wave)">
        {/* stripes */}
        <rect x="257" y="92" width="566" height="69.3" fill="url(#fs-green)" />
        <rect x="257" y="161.3" width="566" height="69.3" fill="url(#fs-white)" />
        <rect x="257" y="230.6" width="566" height="69.4" fill="url(#fs-black)" />
        {/* red hoist */}
        <rect x="257" y="92" width="141" height="208" fill="url(#fs-red)" />
        {/* attach shadow + fold/sheen lighting */}
        <rect x="257" y="92" width="22" height="208" fill="#000" opacity="0.12" />
        <rect x="257" y="92" width="566" height="208" fill="url(#fs-folds)" />
      </g>

      {/* soft shadow the flag casts on the sky */}
      <ellipse
        cx="560"
        cy="312"
        rx="300"
        ry="16"
        fill="#000"
        opacity="0.08"
        filter="url(#cloud-blur)"
      />
    </svg>
  );
}

/** Gold monogram badge standing in for a certification-lab logo. */
export function LabMark({ short }: { short: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-cream to-background shadow-[inset_0_1px_4px_rgba(212,175,55,0.25)]">
      <span className="absolute inset-1 rounded-full border border-gold/25" />
      <span className="text-gold-foil font-display text-2xl font-semibold tracking-tight">
        {short}
      </span>
    </div>
  );
}
