import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTierCardProps {
  tier: {
    name: string;
    description: string;
    timeline: string;
    priceLabel: string;
    includes: string[];
    highlighted?: boolean;
  };
}

export function PricingTierCard({ tier }: PricingTierCardProps) {
  return (
    <Card className={tier.highlighted ? "border-primary shadow-md" : ""}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{tier.name}</CardTitle>
          {tier.highlighted && <Badge>Recommended</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-sm">
          <strong>Timeline:</strong> {tier.timeline}
        </div>

        <ul className="list-disc pl-5 text-sm space-y-1">
          {tier.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="text-sm font-medium text-primary">
          {tier.priceLabel}
        </div>
      </CardContent>
    </Card>
  );
}
