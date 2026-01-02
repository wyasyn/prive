import { socials } from "@/constant/data";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const SocialLinks = () => {
  return (
    <div
      className="flex items-center space-x-0.5"
      aria-label="Social media links"
    >
      {socials.map((social) => (
        <Tooltip key={social.label}>
          <TooltipTrigger>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <div className="cursor-pointer text-sm p-1 md:p-2">
                <social.icon size={18} className=" stroke-1 md:stroke-[1.5] " />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{social.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
