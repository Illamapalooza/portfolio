/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/constants";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 sm:px-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-mahogany/20 dark:bg-mahogany/10 blur-[100px]" />
      </div>

      <div className="w-full relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
              <span className="text-sm">Unavailable</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-muted-foreground">
                Hey, I&apos;m Julius 👋
              </h2>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">Software Engineer</span>
              </h1>
              <div className="h-20 sm:h-24 lg:h-16">
                <TypeAnimation
                  sequence={[
                    "Building Solutions That Actually Matter",
                    3000,
                    "Fueled by Coffee and Code",
                    3000,
                    "Transforming Ideas Into Reality",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground"
                />
              </div>
            </div>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {siteConfig.description}
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Button size="lg" asChild>
                <Link href="#contact" className="group w-full sm:w-auto">
                  Let&apos;s talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex gap-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <Link href={siteConfig.links.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <Link href={siteConfig.links.linkedin} target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[300px] md:max-w-none aspect-square mx-auto md:mx-0 md:order-last rounded-full border-2 border-black"
          >
            <img
              src="./developer-illustration.png"
              alt={siteConfig.name}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
