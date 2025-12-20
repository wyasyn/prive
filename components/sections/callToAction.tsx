import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl border bg-muted/50 p-8 md:p-12 text-center transition-colors hover:bg-muted">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Let’s build something that actually ships.
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I help teams design, build, and deploy reliable software solutions —
            from idea to production.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href={"/contact"}>
              <Button size="lg">Start a conversation</Button>
            </Link>

            <Link href={"/projects"}>
              <Button variant="outline" size="lg">
                View my work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
