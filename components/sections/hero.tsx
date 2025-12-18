import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroImage } from "../widgets/hero-image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-background py-20 lg:py-32"
    >
      <div className="container flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
        {/* Availability / Status */}
        <Badge className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available for projects
        </Badge>

        {/* Primary Heading (SEO Critical) */}
        <h1
          id="hero-heading"
          className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Yasin Walum
          <span className="block text-muted-foreground">
            Full Stack Engineer
          </span>
        </h1>

        {/* Supporting SEO Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground max-sm:text-balance">
          I build high-performance web and mobile applications with a focus on
          clean architecture, scalability, security, and user-centric design.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="px-8 cursor-pointer">
              Let’s Talk
            </Button>
          </Link>

          <Link href="mailto:mail@yasinwalum.com">
            <Button size="lg" variant="outline" className="px-8">
              Email Me
            </Button>
          </Link>
        </div>

        <HeroImage src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1739381052/qnsyneuzwomdka0oqvws.jpg" />
      </div>
    </section>
  );
}
