"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { navigationLinks, siteConfig } from "@/lib/constants";
import { Menu, X, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((link) =>
        link.path.replace("/", "")
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 md:gap-10"
        >
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => scrollToSection("home")}
          >
            <span className="font-bold inline-block text-xl">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex gap-6">
            {navigationLinks.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <button
                  onClick={() => scrollToSection(item.path.replace("/", ""))}
                  className={cn(
                    "relative text-sm font-medium transition-colors group",
                    activeSection === item.path.replace("/", "")
                      ? "text-primary"
                      : "hover:text-primary"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-[2px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                      activeSection === item.path.replace("/", "") && "w-full"
                    )}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="hidden md:flex gap-2">
            {[
              { icon: Github, href: siteConfig.links.github },
              { icon: Linkedin, href: siteConfig.links.linkedin },
              { icon: Instagram, href: siteConfig.links.instagram },
              { icon: Facebook, href: siteConfig.links.facebook },
            ].map((social, index) => (
              <motion.div
                key={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Button variant="ghost" size="icon" asChild>
                  <Link href={social.href} target="_blank">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.href}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="space-y-4 px-4 pb-4">
              {navigationLinks.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.path.replace("/", ""))}
                    className={cn(
                      "block w-full text-left py-2 text-sm font-medium transition-colors relative group",
                      activeSection === item.path.replace("/", "")
                        ? "text-primary"
                        : "hover:text-primary"
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                        activeSection === item.path.replace("/", "") && "w-full"
                      )}
                    />
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="flex gap-2 pt-2"
              >
                {[
                  { icon: Github, href: siteConfig.links.github },
                  { icon: Linkedin, href: siteConfig.links.linkedin },
                  { icon: Instagram, href: siteConfig.links.instagram },
                  { icon: Facebook, href: siteConfig.links.facebook },
                ].map((social) => (
                  <motion.div
                    key={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={social.href} target="_blank">
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.href}</span>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
