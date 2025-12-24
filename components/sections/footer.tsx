import { SERVICES, socials } from "@/constant/data";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      {/* Gradient accent */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <footer className="bg-card/65">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Yasin Walum
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building modern web, mobile, and custom software solutions using
                reliable, scalable technologies.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-lg p-2
                        text-muted-foreground
                        hover:text-primary
                        hover:bg-accent/60
                        transition-colors
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {SERVICES.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Explore
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="text-foreground">Yasin Walum.</span> All rights
              reserved.
            </p>

            <p className="text-xs text-muted-foreground">
              Designing and building reliable digital products.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
