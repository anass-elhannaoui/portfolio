"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Calendar, GraduationCap, Cpu, ArrowRight, Code, FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  description: string;
  image: string;
};

type SkillItem = {
  name: string;
  icon: string;
};

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  period: string;
};

type ExpandedSections = {
  education: number[];
};

export default function About() {
  const education: EducationItem[] = [
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
      image: "/images/lycee-laymoune.jpg",
    },
  ];

  const featuredSkills: SkillItem[] = [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
  ];

  const featuredProjects: ProjectItem[] = [
    {
      id: "energy-management", // Must match ID in Projects page
      title: "Energy Consumption Management Platform (SIME)",
      description: "Full-stack platform for monitoring factory energy consumption with real-time analytics using Spring Boot and Angular.",
      period: "August 2024 – October 2024",
    },
    {
      id: "road-infrastructure", // Must match ID in Projects page
      title: "AI-Powered Road Infrastructure Management",
      description: "Computer vision system for pothole detection using YOLOv8 and Vision Transformers with real-time mapping.",
      period: "March 2025 – June 2025",
    },
    {
      id: "chat-application", // Must match ID in Projects page
      title: "RipAns – RMI Chat Application",
      description: "Real-time chat application built with Java RMI for secure communication between multiple clients.",
      period: "February 2025 – March 2025",
    }
  ];

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    education: []
  });

  const toggleExpanded = (section: keyof ExpandedSections, index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: prev[section].includes(index)
        ? prev[section].filter(item => item !== index)
        : [...prev[section], index]
    }));
  };

  const isExpanded = (section: keyof ExpandedSections, index: number) => 
    expandedSections[section].includes(index);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-14 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
          transition={{ duration: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="shrink-0">
              <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-background shadow-lg">
                <Image
                  src="/images/Profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a second-year Data Science & Cloud Computing Engineering student passionate about AI, Machine Learning, and the ever-evolving world of technology. My curiosity drives me to explore diverse domains, from data-driven insights to scalable cloud systems and DevOps practices. While my academic foundation is in Data Science and Cloud Computing, I'm actively expanding my skills in DevOps, Software Development, and building secure, intelligent systems.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CV Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6 flex items-center border-b pb-2">
            <FileText className="mr-2 text-primary" />
            Curriculum Vitae
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 p-8 border rounded-lg bg-card shadow-sm"
          >
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-medium mb-2">My Resume</h3>
              <p className="text-muted-foreground">You can view or download my CV to learn more about my professional background and skills</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
                <Link href="/CV" >
                  <Eye className="h-4 w-4" /> View CV
                </Link>
              </Button>
              <Button asChild variant="default" size="lg" className="flex items-center gap-2">
                <a href="/docs/AnassElHannaoui-CV.pdf" download="AnassElHannaoui-CV.pdf">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
          
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6 flex items-center border-b pb-2">
            <GraduationCap className="mr-2 text-primary" />
            Education
          </motion.h2>
          
          <motion.div variants={containerVariants} className="space-y-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
              >
                <button
                  onClick={() => toggleExpanded('education', index)}
                  className="w-full p-5 flex items-center justify-between hover:bg-accent/10 transition-colors duration-200"
                >
                  <div className="flex items-center text-left">
                    <div className="mr-4">
                      <div className="p-2 bg-primary/5 rounded-full">
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
                      isExpanded('education', index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded('education', index) ? 'auto' : 0,
                    opacity: isExpanded('education', index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0">
                    <div className="mt-4 relative h-48 rounded-md overflow-hidden shadow-sm">
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
          </motion.div>
        </motion.div>

        {/* Key Technologies Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6 flex items-center border-b pb-2">
            <Cpu className="mr-2 text-primary" />
            Key Technologies
          </motion.h2>
          
          <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {featuredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 border rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <div className="p-1.5 bg-background rounded-md">
                  <Image 
                    src={skill.icon} 
                    width={22} 
                    height={22} 
                    alt={skill.name}
                  />
                </div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <Button asChild variant="outline" size="sm" className="text-primary">
            <Link href="/skills">
              View all skills <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6 flex items-center border-b pb-2">
            <Code className="mr-2 text-primary" />
            Featured Work
          </motion.h2>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.period}
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-auto w-full">
                  <Link 
                    href={`/projects#${project.id}`} 
                    className="flex items-center justify-center"
                    scroll={false} // Prevent default scroll behavior
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <Button asChild variant="default">
              <Link href="/projects" className="flex items-center">
                View All Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
