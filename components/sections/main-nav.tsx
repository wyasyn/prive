"use client";
import { motion } from "motion/react";
import { Logo } from "../widgets/logo";
import { MainNavLinks } from "./nav-bar";
import { SocialLinks } from "../widgets/social-widget";
import { ThemeToggle } from "../widgets/theme-toggle";
import { MobileMenu } from "../widgets/mobile-men";
export const NavigationBar = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left Section: Logo and Main Links */}
        <div className="flex items-center space-x-8">
          <Logo name={"Walum."} />
          <MainNavLinks />
        </div>

        {/* Right Section: Social Links, Secondary Menu, Theme Toggle */}
        <div className="flex items-center space-x-1">
          <SocialLinks />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
};
