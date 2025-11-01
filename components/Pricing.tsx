import React, { useEffect, useMemo, useRef, useState } from 'react';

type Tier = 'starter' | 'pro' | 'enterprise';

type Prices = {
  monthly: Record<Tier, number>;
  yearly: Record<Tier, number>;
};

const PRICES: Prices = {
  monthly: { starter: 19, pro: 59, enterprise: 0 },
  yearly: { starter: 15, pro: 47, enterprise: 0 },
};

const FEATURES: Record<Tier, string[]> = {
  starter: [
    'For small teams',
    'Limited minutes per month',
    'Community support',
  ],
  pro: [
    'Most popular plan',
    'High usage capacity',
    'Priority support',
  ],
  enterprise: [
    'Unlimited voice minutes',
    'Custom integrations',
    'Dedicated AI tuning',
  ],
};

const useInViewOnce = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView } as const;
};

const useCountUp = (end: number, active: boolean, durationMs = 1200) => {
  const [value, setValue] = useState(0);
  const startTs = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    startTs.current = null;
    let raf: number;

    const step = (ts: number) => {
      if (startTs.current === null) startTs.current = ts;
      const elapsed = ts - startTs.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, active, durationMs]);

  return value;
};

const Toggle: React.FC<{
  yearly: boolean;
  onToggle: () => void;
}> = ({ yearly, onToggle }) => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <span className={`text-sm ${yearly ? 'text-gray-400' : 'text-white'}`}>Monthly</span>
      <button
        onClick={onToggle}
        className="relative w-20 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md transition-colors"
        aria-label="Toggle billing period"
      >
        <span
          className={`absolute top-1 left-1 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_18px_rgba(168,85,247,0.6)] transition-transform duration-300 ${yearly ? 'translate-x-10' : 'translate-x-0'}`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-sm ${yearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
        {yearly && (
          <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/40">
            Save 20%
          </span>
        )}
      </div>
    </div>
  );
};

const PricingCard: React.FC<{
  tier: Tier;
  title: string;
  description: string;
  price: number;
  billingLabel: string;
  cta: string;
  highlighted?: boolean;
  inView: boolean;
}> = ({ tier, title, description, price, billingLabel, cta, highlighted, inView }) => {
  const animate = inView;
  const displayPrice = useCountUp(price, animate && price > 0);

  const buttonStyle = highlighted
    ? 'bg-white text-black hover:scale-[1.03]'
    : 'bg-transparent border border-white/30 text-white hover:bg-white/10';

  return (
    <div
      className={`relative group rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md transition-all duration-300 ${
        highlighted ? 'md:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.25)]' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        {highlighted && (
          <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/40">
            Most Popular
          </span>
        )}
      </div>

      <div className="mt-6 flex items-end gap-2">
        {price > 0 ? (
          <>
            <span className={`text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 ${animate ? 'animate-fade-in-up' : ''}`}>
              {displayPrice}
            </span>
            <span className="text-gray-400 mb-2">/mo</span>
          </>
        ) : (
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
            Custom
          </span>
        )}
      </div>
      <div className="text-xs text-gray-400">{billingLabel}</div>

      <ul className="mt-6 space-y-3">
        {FEATURES[tier].map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300">
            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full px-5 py-3 rounded-xl font-semibold transition-all ${buttonStyle}`}
      >
        {cta}
      </button>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-fuchsia-500/70 group-hover:shadow-[0_0_35px_rgba(217,70,239,0.35)] transition-all duration-300" />
    </div>
  );
};

const Pricing: React.FC = () => {
  const { ref, inView } = useInViewOnce();
  const [yearly, setYearly] = useState(false);

  const prices = useMemo(() => (yearly ? PRICES.yearly : PRICES.monthly), [yearly]);
  const billingLabel = yearly ? 'Billed yearly (2 months free)' : 'Billed monthly';

  return (
    <section id="pricing" ref={ref as any} className="relative py-20 sm:py-32 bg-gradient-to-b from-[#040209] to-[#0c0a18]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(167,139,250,0.12),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Pricing that Scales with You
          </h2>
          <p className="mt-3 text-lg text-gray-400">Start small. Grow to enterprise.</p>

          <div className="mt-8">
            <Toggle yearly={yearly} onToggle={() => setYearly(v => !v)} />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-3 items-stretch">
          <PricingCard
            tier="starter"
            title="Starter"
            description="Small teams • Limited minutes"
            price={prices.starter}
            billingLabel={billingLabel}
            cta="Get Starter"
            inView={inView}
          />
          <div className="md:-mt-4">
            <PricingCard
              tier="pro"
              title="Pro"
              description="High usage • Priority support"
              price={prices.pro}
              billingLabel={billingLabel}
              cta="Get Pro"
              highlighted
              inView={inView}
            />
          </div>
          <PricingCard
            tier="enterprise"
            title="Enterprise"
            description="Unlimited minutes • Custom integrations"
            price={prices.enterprise}
            billingLabel={billingLabel}
            cta="Talk to Sales"
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
