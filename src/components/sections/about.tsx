"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export function AboutSection() {
  const stats = [
    {
      number: "2+",
      label: "Years of Experience",
      detail: {
        title: "Experience Breakdown",
        items: [
          "2 years of personal projects",
          "6+ months professional experience",
        ],
      },
    },
    {
      number: "10+",
      label: "Projects Completed",
    },
    {
      number: "2",
      label: "Companies Worked",
    },
    {
      number: "15+",
      label: "Technologies Mastered",
    },
  ];

  return (
    <section id="about" className="py-20 px-20 bg-background">
      <div className="w-full px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                A passionate software engineer crafting digital experiences
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                With 2 years of personal experience and 6 months of professional
                experience, I&apos;ve been fortunate to work with amazing teams
                at{" "}
                <span className="text-primary font-medium">Hostari Labs</span>{" "}
                and <span className="text-primary font-medium">Zeta</span>,
                where I&apos;ve contributed to innovative projects that solve
                real-world problems.
              </p>

              <p>
                My journey in software development has been focused on building
                robust web applications using modern technologies. I specialize
                in creating seamless user experiences with React and Next.js,
                while leveraging the power of TypeScript and Node.js for
                scalable backend solutions.
              </p>

              <p>
                What drives me is the opportunity to transform ideas into
                reality through code. Whether it&apos;s developing AI-powered
                note-taking apps or building CRM systems, I&apos;m always
                excited to take on new challenges and learn along the way.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Updated Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                {"detail" in stat ? (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-muted/50 rounded-lg space-y-2 text-center cursor-pointer hover:bg-muted/70 transition-colors"
                      >
                        <h3 className="text-4xl font-bold text-primary">
                          {stat.number}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </motion.div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          {stat.detail?.title}
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {stat.detail?.items.map((item, i) => (
                            <li key={i} className="flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-muted/50 rounded-lg space-y-2 text-center hover:bg-muted/70 transition-colors"
                  >
                    <h3 className="text-4xl font-bold text-primary">
                      {stat.number}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
