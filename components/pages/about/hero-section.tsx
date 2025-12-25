import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-muted overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1766089215/my-uploads/qnvvybz8bphei5jrmhiz.webp"
                alt="August Renner"
                className="w-full h-full object-cover "
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            About me
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Hey, I<span className="font-mono">&apos;</span>m
            <br />
            Yasin Walum
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I<span className="font-mono">&apos;</span>m a full stack software
            engineer based in Kampala, Uganda, building modern web and mobile
            applications. I work across frontend and backend systems, focusing
            on clean architecture, performance, and real
            <span className="font-mono">-</span>world usability.
          </p>
          <Link href="/projects" aria-label="View my work">
            <Button variant={"outline"} size="lg" className={"items-center"}>
              View my work <ChevronRight className="ml-1 w-5 h-5 " />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
