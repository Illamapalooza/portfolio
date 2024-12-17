"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);

    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setActiveSection("home");
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // Height of the navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveSection(sectionId);
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle home section first
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const sections = navigationLinks.map((link) =>
        link.path.replace("/", "")
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topOffset = rect.top;

          // Adjust the detection zone
          if (topOffset < 150 && topOffset > -150) {
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full flex h-16 items-center justify-between px-4 sm:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2"
          >
            <span className="font-bold inline-block text-xl">
              {siteConfig.name}
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 md:gap-10"
        >
          <div className="hidden md:flex gap-6">
            {navigationLinks.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <button
                  onClick={() => {
                    scrollToSection(item.path.replace("/", ""));
                  }}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-auto p-2"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col items-center">
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
                      "block w-full text-left py-2 text-sm font-medium transition-colors",
                      activeSection === item.path.replace("/", "")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
