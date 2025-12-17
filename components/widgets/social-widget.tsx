import { socials } from "@/constant/data";
import Link from "next/link";
import { Button } from "../ui/button";

export const SocialLinks = () => {
  return (
    <div
      className="flex items-center space-x-1"
      aria-label="Social media links"
    >
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <social.icon />
          </Button>
        </Link>
      ))}
    </div>
  );
};
