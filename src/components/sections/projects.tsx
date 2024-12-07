"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-20 bg-muted/30">
      <div className="w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative space-y-4">
                <div className="overflow-hidden rounded-lg border bg-background p-6 transition-all hover:border-primary">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xl">{project.title}</h3>
                        <Badge variant="secondary">{project.type}</Badge>
                      </div>
                      {project.company && (
                        <p className="text-sm text-muted-foreground">
                          @{project.company}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group"
                        asChild
                      >
                        <Link href="#" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                          Web
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
