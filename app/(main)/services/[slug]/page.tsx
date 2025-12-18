import { ServicePricing } from "@/components/sections/ServicePricing";
import { AI_ML_PRICING } from "@/constant/pricing";

export default function SingleServicePage() {
  return (
    <section className="space-y-8 container">
      <h2 className="text-2xl font-semibold">Pricing & Engagement Models</h2>
      <ServicePricing tiers={AI_ML_PRICING} />
    </section>
  );
}
