"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Cloud, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Animation variants for consistent animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 mb-28">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl font-medium text-primary mb-4 tracking-wider"
            >
              hi ayoub
            </motion.h2>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            >
              Anass El Hannaoui
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl sm:text-2xl text-primary font-medium h-10">
                <TypeAnimation
                  sequence={[
                    "Software Developer | Cloud & AI Enthusiast",
                    2000,
                    "Building Scalable and Intelligent Systems",
                    2000,
                    "Transforming Ideas into Solutions",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold"
                />
              </div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl"
            >
              Computer science student at ENSAO-UMP passionate about building scalable systems and intelligent solutions. 
              I bridge the gap between theoretical knowledge and practical implementation through hands-on projects in 
              cloud computing, machine learning, and full-stack development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <Button asChild size="lg" className="gap-2 px-8 py-6 text-lg">
                <Link href="/projects">
                  View My Work <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2 px-8 py-6 text-lg">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-4"
            >
              <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10" asChild>
                <Link href="https://github.com/anass-elhannaoui" target="_blank" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10" asChild>
                <Link
                  href="https://www.linkedin.com/in/anasselhannaoui"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/10" asChild>
                <Link href="mailto:anass.elhannaoui.io@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent -z-10 blur-xl" />
              <Image
                src="/images/Profile.jpg"
                alt="Anass El Hannaoui"
                width={400}
                height={400}
                className="object-cover rounded-full border-[6px] border-background shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Specialized skills that drive innovative solutions and deliver measurable results
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col p-8 border border-border rounded-xl bg-card shadow-sm hover:shadow-lg transition-all h-full"
            >
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-muted-foreground">
                Developing predictive models and AI solutions for data analysis, pattern recognition, and automated decision systems.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col p-8 border border-border rounded-xl bg-card shadow-sm hover:shadow-lg transition-all h-full"
            >
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="text-muted-foreground">
                Designing and implementing scalable, secure cloud solutions across AWS, Azure, and GCP platforms.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col p-8 border border-border rounded-xl bg-card shadow-sm hover:shadow-lg transition-all h-full"
            >
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Terminal className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DevOps Engineering</h3>
              <p className="text-muted-foreground">
                Implementing CI/CD pipelines, infrastructure as code, and automation for efficient software delivery.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col p-8 border border-border rounded-xl bg-card shadow-sm hover:shadow-lg transition-all h-full"
            >
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Building end-to-end web applications with modern frameworks, microservices, and responsive interfaces.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-24 p-12 border border-border rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-lg">
            Whether you need a custom solution, technical consultation, or just want to connect, I'd love to hear about your project.
          </p>
          <Button asChild size="lg" className="px-10 py-7 text-lg">
            <Link href="/contact" className="gap-2">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}