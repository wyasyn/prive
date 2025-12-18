"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconBookmark,
  IconBriefcase,
  IconFolder,
  IconMail,
  IconMenu,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About", icon: IconUser },
  { href: "/projects", label: "Projects", icon: IconFolder },
  { href: "/services", label: "Services", icon: IconBriefcase },
  { href: "/blog", label: "Blog", icon: IconBookmark },
  { href: "/contact", label: "Contact", icon: IconMail },
] as const;

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside handler
  useEffect(() => {
    if (!isOpen) return;

    const listener = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      // Ignore clicks on button or menu
      if (
        (menuRef.current && menuRef.current.contains(target)) ||
        (buttonRef.current && buttonRef.current.contains(target))
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMenu}
        className="p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-haspopup="menu"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {isOpen ? <IconX size={20} /> : <IconMenu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            role="menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
    absolute right-0 mt-3 w-56
    rounded-2xl border border-border/50
    bg-secondary/85 backdrop-blur-md
    shadow-xl p-4 z-50
  "
          >
            <div className="flex flex-col gap-3">
              {LINKS.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 text-sm transition-colors rounded-lg px-3 py-2 -mx-3 ${
                      isActive
                        ? "text-primary font-medium bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Icon size={18} className="shrink" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
