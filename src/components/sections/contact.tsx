"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-20 bg-background">
      <div className="w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind? Let&apos;s work together!
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Input type="text" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] resize-none"
                />
              </div>
            </div>
            <Button className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these platforms. I&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{siteConfig.email}</span>
              </Link>

              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={siteConfig.links.github} target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={siteConfig.links.linkedin} target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium">Current Status</h4>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Unavailable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
