/* eslint-disable @next/next/no-img-element */
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
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    title: "Indie Hacker Champion",
    description:
      "Awarded Indie Hacker Award at HOSTARI Labs SI AI-Enabled Hackathon",
    images: [
      "./achievements/hostari1.jpg",
      "./achievements/hostari2.jpg",
      "./achievements/hostari4.jpg",
    ],
  },
  {
    title: "Top 10% TOPCIT Nationwide",
    description:
      "Placed in top 10% at Test of Practical Competency in ICT (TOPCIT)",
    images: ["./achievements/topcit1.jpg", "./achievements/topcit2.jpg"],
  },
  {
    title: "Google Solution Challenge Finalist",
    description: "4th Place at Google Solution Challenge 2022 School Level",
    images: [
      "./achievements/google1.jpg",
      "./achievements/google2.jpg",
      "./achievements/google3.jpg",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Hostari Labs",
    period: "June 2024 - Present",
    description: [
      "Leading development of AI-enabled mobile application using React Native and Express",
      "Implementing microservices architecture and integrating AI capabilities",
      "Collaborating with cross-functional teams to deliver innovative solutions",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Zeta",
    period: "September 2024 - Present",
    description: [
      "Spearheading technical development of real estate CRM platform",
      "Implementing modern tech stack with Next.js",
    ],
  },
  {
    title: "Computer Science Lead",
    company: "Google Developer Student Clubs - USTP",
    period: "August 2023 - June 2024",
    description: [
      "Coordinated campus-wide coding competitions and events",
      "Conducted hands-on programming tutorials and mentoring sessions",
      "Facilitated student learning of core CS concepts",
    ],
  },
  {
    title: "Core Team Lead",
    company: "GDSC-USTP",
    period: "June 2024 - Present",
    description: [
      "Mentored students in practical programming concepts and best practices",
      "Organized and led monthly software development workshops",
      "Guided teams through technical challenges and project implementations",
    ],
  },
];

const timelineVariants = {
  initial: { scaleY: 0, originY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const dotVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function AboutSection() {
  const stats = [
    {
      number: "2+",
      label: "Years of Experience",
      detail: {
        title: "Experience Breakdown",
        items: [
          "2 years of personal experience",
          "4+ months professional experience",
        ],
      },
    },
    {
      number: "5+",
      label: "Projects Completed",
    },
    {
      number: "2",
      label: "Companies Worked With",
    },
    {
      number: "10+",
      label: "Technologies Mastered",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 px-4 sm:px-20 bg-background">
      <div className="w-full px-2 md:px-6">
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
                Throughout my journey as a software engineer, combining 2 years
                of hands-on personal projects with 4 months of professional
                experience, I&apos;ve had the privilege of working on impactful
                ventures. As a startup software engineer collaborating with{" "}
                <span className="text-primary font-medium">Hostari Labs</span>{" "}
                and a fullstack developer at{" "}
                <span className="text-primary font-medium">Zeta</span>,
                I&apos;ve architected and delivered innovative solutions that
                directly address real business challenges and user needs. My
                experience spans from conceptualization to deployment,
                consistently focusing on building scalable and maintainable
                applications.
              </p>
              <p>
                What drives me is the opportunity to transform ideas into
                reality through code. With experience in developing AI-enabled
                applications, I&apos;m always excited to take on new challenges
                and push the boundaries of what&apos;s possible.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link href="public/resume.pdf" target="_blank">
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
            className="grid grid-cols-2 gap-3 sm:gap-4"
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
                        className="p-4 sm:p-6 bg-muted/50 rounded-lg space-y-2 text-center cursor-pointer hover:bg-muted/70 transition-colors"
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
                    className="p-4 sm:p-6 bg-muted/50 rounded-lg space-y-2 text-center hover:bg-muted/70 transition-colors"
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

        {/* Career Section with Achievements and Experience */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Career Highlights
            </h2>
            <p className="text-muted-foreground">
              My journey, achievements, and professional experience
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Achievements Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Achievements</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-muted/50 rounded-lg p-6 hover:bg-muted/70 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h4 className="font-bold text-xl text-primary">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {achievement.images.map((img, i) => (
                        <motion.div
                          key={i}
                          className="relative flex justify-center items-center aspect-video overflow-hidden rounded-lg bg-muted"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={img}
                            alt={`${achievement.title} image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Column with Timeline */}
            <div className="space-y-8 relative">
              <h3 className="text-2xl font-bold">Experience</h3>

              {/* Timeline track */}
              <motion.div
                className="absolute left-8 top-[4.5rem] bottom-4 w-px bg-border"
                variants={timelineVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                ref={ref}
              />

              <div className="relative space-y-12">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot with pulse effect */}
                    <motion.div
                      className="absolute left-7 top-1.5 -translate-x-1/2 z-10"
                      variants={dotVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <div className="h-3 w-3 rounded-full bg-primary relative">
                        <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                      </div>
                    </motion.div>

                    {/* Content card */}
                    <div className="bg-muted/50 rounded-lg p-6 hover:bg-muted/70 transition-all duration-300 hover:translate-x-1">
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h4 className="font-bold text-xl text-primary">
                              {experience.title}
                            </h4>
                            <span className="text-base font-medium">
                              {experience.company}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                            {experience.period}
                          </span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {experience.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
