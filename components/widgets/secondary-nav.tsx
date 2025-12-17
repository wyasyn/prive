"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export const SecondaryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const secondaryLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="More options"
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <HugeiconsIcon icon={MoreHorizontalCircle01Icon} size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-40
  rounded-xl border border-border/50
  bg-background/80 backdrop-blur-md
  shadow-lg py-2 z-50"
            aria-label="Secondary navigation"
            role="menu"
          >
            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 text-sm hover:bg-accent transition-colors ${
                    isActive ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
