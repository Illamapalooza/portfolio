"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/constants";
import { techStack } from "@/lib/tech-stack";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-mahogany/20 dark:bg-mahogany/10 blur-[100px]" />
      </div>

      <div className="container relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 md:py-24">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-40 w-40 md:h-48 md:w-48"
          >
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-mahogany to-dark-purple" />
            <div className="relative flex h-full items-center justify-center rounded-full">
              <Image
                src="/placeholder-profile.jpg" // Add your profile image to public folder
                alt={siteConfig.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm">Available for work</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">Software Engineer</span>{" "}
              <br className="hidden sm:inline" />
              Building Solutions That Actually Matter
            </h1>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#contact" className="group">
                Let&apos;s talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-sm font-medium text-muted-foreground mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 grayscale">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                >
                  <tech.icon className="h-8 w-8 transition-all duration-300 group-hover:text-primary group-hover:grayscale-0" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
