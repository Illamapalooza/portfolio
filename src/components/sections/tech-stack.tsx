"use client";

import { motion } from "framer-motion";
import { techStackRow1, techStackRow2 } from "@/lib/tech-stack";

export function TechStackSection() {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {/* First Row */}
          <div className="relative flex overflow-x-hidden">
            <div className="animate-[marquee_50s_linear_infinite] whitespace-nowrap flex items-center gap-8">
              {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 group mx-4"
                >
                  <div className="relative p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 transition-colors group-hover:border-primary/50">
                    <tech.icon className="h-8 w-8 transition-all duration-300 group-hover:text-primary grayscale group-hover:grayscale-0" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="relative flex overflow-x-hidden">
            <div className="animate-[marquee-reverse_50s_linear_infinite] whitespace-nowrap flex items-center gap-8">
              {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 group mx-4"
                >
                  <div className="relative p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 transition-colors group-hover:border-primary/50">
                    <tech.icon className="h-8 w-8 transition-all duration-300 group-hover:text-primary grayscale group-hover:grayscale-0" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
