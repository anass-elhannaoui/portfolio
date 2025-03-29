"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Calendar, Briefcase, GraduationCap, Cpu, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const education = [
    {
      school: "National School of Applied Science, Oujda, Morocco",
      degree: "Data Science and Cloud Computing Engineering",
      period: "Sept 2023 – Sept 2026",
      description: "Specializing in Data Science and Cloud Computing with a focus on AI, Machine Learning, and building scalable cloud systems.",
      image: "/images/ensa-oujda.jpg",
    },
    {
      school: "National School of Applied Science, Oujda, Morocco",
      degree: "Sciences et Techniques pour l'Ingénieur (STPI)",
      period: "Sept 2021 – June 2023",
      description: "Completed two years of preparatory engineering studies with a strong foundation in mathematics, physics, and computer science.",
      image: "/images/ensa-oujda.jpg",
    },
    {
      school: "High School Diploma (Baccalauréat)",
      degree: "Science Physique - Mention Très Bien",
      period: "Graduated June 2021",
      description: "Graduated with high honors (Très Bien) in Physical Sciences, which provided a strong foundation for my engineering studies.",
      image: "/images/lycee-laymoune.jpeg",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "Energy Consumption Management Platform (SIME)",
      period: "August 2024 – October 2024",
      image: "https://heuristik-partners.com/wp-content/uploads/2024/03/Heuristik-Partners-Black-1.png",
      responsibilities: [
        "Designed and implemented a PostgreSQL database to store and manage sensor data from factories",
        "Developed a RESTful API using Spring Boot for real-time energy consumption monitoring",
        "Built an interactive dashboard using Angular 18 with dynamic charts and metrics",
        "Deployed the application on Google Cloud for seamless data retrieval",
        "Gained hands-on experience in the full software development lifecycle",
      ],
    },
  ];

  const featuredSkills = [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
  ];

  const featuredProjects = [
    {
      title: "AI-Powered Road Infrastructure Management",
      description: "Developed a computer vision system for road pothole detection using deep learning models.",
      period: "March 2025 – June 2025",
      link: "/projects#road-infrastructure"
    },
    {
      title: "Energy Consumption Monitoring Platform",
      description: "Full-stack application for real-time factory energy monitoring with analytics dashboard.",
      period: "August 2024 – October 2024",
      link: "/projects#energy-monitoring"
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);
  const [expandedEdu, setExpandedEdu] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  const toggleEdu = (index: number) => {
    setExpandedEdu(prevExpanded => 
      prevExpanded.includes(index)
        ? prevExpanded.filter(item => item !== index)
        : [...prevExpanded, index]
    );
  };

  const isItemOpen = (index: number) => openItems.includes(index);
  const isEduExpanded = (index: number) => expandedEdu.includes(index);

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/images/Profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              I am a Fourth-year Data Science & Cloud Computing Engineering student passionate about AI, Machine Learning, and the ever-evolving world of technology. My curiosity drives me to explore diverse domains, from data-driven insights to scalable cloud systems and DevOps practices. While my academic foundation is in Data Science and Cloud Computing, I'm actively expanding my skills in DevOps, Software Development, and building secure, intelligent systems. I thrive on solving real-world challenges by bridging theory with hands-on innovation—always learning, always adapting.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-primary" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="border border-border rounded-lg overflow-hidden bg-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => toggleEdu(index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                >
                  <div className="flex items-center text-left">
                    <div className="mr-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      isEduExpanded(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isEduExpanded(index) ? 'auto' : 0,
                    opacity: isEduExpanded(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <div className="mt-4 relative h-48 rounded-md overflow-hidden">
                      <Image
                        src={edu.image}
                        alt={edu.school}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Cpu className="mr-2 text-primary" />
            Key Technologies
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {featuredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-accent/20"
              >
                <Image 
                  src={skill.icon} 
                  width={20} 
                  height={20} 
                  alt={skill.name}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <Button asChild variant="ghost" className="text-primary">
            <Link href="/skills">
              View all skills <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Featured Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Code className="mr-2 text-primary" />
            Featured Work
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border rounded-lg p-6 hover:bg-accent/10 transition-colors"
              >
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.period}
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.link}>
                    View Project Details
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
