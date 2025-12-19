import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IconMail } from "@tabler/icons-react";
import ProjectMarquee from "./project-marque";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-background py-20 md:py-32 lg:pb-40 "
    >
      <div className="container flex min-h-[80vh]  flex-col items-center justify-center text-center">
        {/* Availability / Status */}
        <Badge className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
          <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available for projects
        </Badge>

        {/* Primary Heading (SEO Critical) */}
        <h1
          id="hero-heading"
          className="max-w-4xl text-4xl  font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          <span>Yasin Walum</span>

          <span className="block text-muted-foreground">Software Engineer</span>
        </h1>

        {/* Supporting SEO Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground max-sm:text-balance">
          I build web and mobile applications with an emphasis on clean
          architecture, scalability, security, and usability.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="cursor-pointer px-4 group">
              Let’s Talk{" "}
              <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 duration-200 " />
            </Button>
          </Link>

          <Link href="mailto:mail@yasinwalum.com">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer px-4 group"
            >
              Email Me{" "}
              <IconMail className="ml-1 h-4 w-4 group-hover:ml-2 duration-200" />
            </Button>
          </Link>
        </div>

        <ProjectMarquee />
      </div>
    </section>
  );
}
