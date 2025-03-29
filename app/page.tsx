"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              <TypeAnimation
                sequence={[
                  "Data Science Engineer",
                  2000,
                  "DevOps Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12"
            >
              Passionate about building scalable solutions and leveraging data to solve
              complex problems. Specializing in machine learning, cloud architecture,
              and DevOps practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-6"
            >
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/anass-elhannaoui" target="_blank">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/anasselhannaoui"
                  target="_blank"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:anass.elhannaoui@ump.ac.ma">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/images/Profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-full border-4 border-primary/20"
                priority
              />
            </div>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg shadow-sm hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
            <p className="text-muted-foreground">
              Building predictive models and leveraging AI for data-driven insights.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg shadow-sm hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
            <p className="text-muted-foreground">
              Designing scalable and secure cloud solutions using AWS, Azure, and GCP.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg shadow-sm hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-2">DevOps Practices</h3>
            <p className="text-muted-foreground">
              Automating workflows, CI/CD pipelines, and infrastructure as code.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg shadow-sm hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
            <p className="text-muted-foreground">
              Creating robust web applications with modern frameworks and tools.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}