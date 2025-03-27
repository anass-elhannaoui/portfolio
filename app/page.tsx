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
                src="https://media.licdn.com/dms/image/v2/D4E03AQFz4LgVY7LgSA/profile-displayphoto-shrink_800_800/B4EZUPQGHWGYAg-/0/1739717633926?e=1748476800&v=beta&t=OVBgKIGdH0oXAJ3-w4L-HTWdpSRNp1-PdML6RgfKgaI"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="text-muted-foreground">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              alt="TensorFlow"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="text-muted-foreground">TensorFlow</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
              alt="Kubernetes"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="text-muted-foreground">Kubernetes</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="text-muted-foreground">Docker</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}