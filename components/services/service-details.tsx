import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Service } from "@/types";

export function ServiceDetails({ service }: { service: Service }) {
  return (
    <section className="container py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">{service.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {service.detailedDescription}
        </p>

        <div className="mt-6 flex gap-2 flex-wrap">
          {service.tools.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>

        <Separator className="my-10" />

        <h2 className="text-2xl font-semibold mb-4">Process</h2>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step) => (
            <li
              key={step.step}
              className="bg-card/60 rounded-2xl p-2 border border-border/60"
            >
              <strong className="flex items-center gap-3 px-2">
                <div className="w-2 h-2 rounded-full bg-primary/60" />{" "}
                {step.title}
              </strong>
              <p className="text-muted-foreground bg-secondary/60 rounded-2xl p-4 mt-2">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <Separator className="my-10" />

        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>

        <div className="bg-card/60 border border-border/60 w-fit rounded-2xl p-2 ">
          <p className="bg-secondary/60 rounded-2xl p-4 flex items-center gap-2 flex-col">
            <strong>Starting from </strong>{" "}
            <span className="text-5xl text-foreground text-center">
              <span className="text-sm">UGX</span>
              {service.pricing.startingFrom}
            </span>
          </p>
          <p className="text-muted-foreground px-2 py-4 text-center">
            {service.pricing.notes}
          </p>

          <p className="mt-2 px-2 py-4 text-center">
            <strong>Timeline:</strong> {service.timeline.min} –{" "}
            {service.timeline.max}
          </p>
        </div>
      </div>
    </section>
  );
}
