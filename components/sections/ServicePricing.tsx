import { PricingTier } from "@/types";
import { PricingTierCard } from "../widgets/PricingTierCard";

interface ServicePricingProps {
  tiers: PricingTier[];
}

export function ServicePricing({ tiers }: ServicePricingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier, index) => (
        <PricingTierCard key={index} tier={tier} />
      ))}
    </div>
  );
}
