"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FolderGit2 } from "lucide-react";

type Technology = {
  name: string;
  icon: string;
};

type Project = {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  technologies: Technology[];
  responsibilities: string[];
  demo: string;
  category: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
    id: "ai-pedagogical-assistant",
    title: "AI-Powered Pedagogical Assistant Platform",
    period: "September 2024 – December 2024",
    description:
      "A white-label SaaS platform enabling educational institutions to configure personalized learning environments with an AI virtual assistant for automated course generation and student progress tracking.",
    image: "/images/ai-pedagogy.png",
    technologies: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "OpenAI API", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ],
    responsibilities: [
      "Designed the complete platform architecture and PostgreSQL database schema for multi-tenant SaaS deployment.",
      "Developed full-stack application using Next.js with Tailwind CSS for frontend and Supabase for backend infrastructure.",
      "Integrated OpenAI API (GPT-3.5 Turbo) for AI-powered chat assistant and automated learning path generation.",
      "Created interactive dashboard for teachers, admins, and students with real-time tracking and automated alerts.",
      "Developed student interface with personalized learning paths, AI chat interaction, and progress visualization.",
      "Deployed production application on Vercel with scalable infrastructure and continuous integration."
    ],
    demo: "#",
    category: ["Machine Learning", "Web Development"],
  },

    {
      id: "road-infrastructure",
      title: "AI-Powered Road Infrastructure Management System",
      period: "March 2025 – June 2025",
      description:
        "A comprehensive system integrating AI detection of road potholes with mobile reporting and web-based management platforms for maintenance planning.",
      image: "/images/road-infra.png",
      technologies: [
        { name: "YOLOv10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Leaflet.js", icon: "https://www.svgrepo.com/show/353991/leaflet.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
      responsibilities: [
        "Trained a multi-class YOLOv10 model for pothole and road damage detection on a high-performance server at the Cedar datacenter.",
        "Developed an automation module in the backend to assign maintenance tasks to appropriate teams automatically.",
        "Developed the full-stack web platform (React.js frontend + Spring Boot backend) for administrators to manage reports and maintenance operations.",
        "Designed and implemented the real-time interactive dashboard with data visualization and mapping system using Leaflet.js.",
        "Created the database architecture and integrated Firebase Firestore for synchronized data storage.",
        "Built the administrative interface for user management, task assignment, and progress tracking.",
        "Implemented the API gateway between the web platform and Firebase services.",
        "Conducted integration testing and validation with the mobile application team."
      ],
      demo: "#",
      category: ["Machine Learning", "Web Development"],
    },

    {
      id: "energy-management",
      title: "Energy Consumption Management Platform (SIME)",
      period: "August 2024 – October 2024",
      description: "A full-stack platform for monitoring and managing factory energy consumption with real-time analytics.",
      image: "/images/SIME.png",
      technologies: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
      responsibilities: [
        "Designed and implemented a PostgreSQL database to store and manage sensor data from factories.",
        "Developed a RESTful API using Spring Boot for real-time energy consumption monitoring.",
        "Built an interactive dashboard using Angular 18 with dynamic charts and metrics.",
        "Deployed the application on Google Cloud for seamless data retrieval.",
        "Gained hands-on experience in the full software development lifecycle.",
      ],
      demo: "#",
      category: ["Web Development"],
    },
    {
      id: "chat-application",
      title: "RipAns – RMI Chat Application",
      period: "February 2025 – March 2025",
      description: "A real-time chat application built using Java RMI to enable secure and efficient communication between multiple clients.",
      image: "/images/RipAns.png",
      technologies: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "RMI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
      responsibilities: [
        "Designed and implemented a distributed chat system using Java RMI architecture.",
        "Established a client-server communication model enabling real-time messaging across multiple clients.",
        "Ensured message synchronization and consistent state management across clients.",
        "Implemented key functionalities such as private messaging, public chat, and user connection management.",
      ],
      demo: "https://aadraouimostafakamal.github.io/RipAns/",
      category: ["Web Development"],
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      period: "October 2023 – November 2023",
      description: "A personalized movie recommendation platform combining machine learning algorithms with a user-friendly web interface.",
      image: "/images/movie-rec.jpg",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ],
      responsibilities: [
        "Collected and preprocessed movie datasets (metadata, genres, user ratings) using pandas and numpy.",
        "Engineered features by merging movie overviews and genres to improve content-based recommendations.",
        "Built a content-based recommendation engine leveraging cosine similarity for relevant suggestions.",
        "Applied CountVectorizer for text-to-feature transformation to enhance model accuracy.",
        "Developed web interface using Flask for user interaction.",
      ],
      demo: "#",
      category: ["Machine Learning", "Web Development"],
    },
    {
      id: "twitter-sentiment",
      title: "Twitter Sentiment Analysis",
      period: "October 2024 – December 2024",
      description: "A sentiment analysis system designed to classify Twitter comments using advanced NLP techniques and machine learning models.",
      image: "/images/twitter-sentiment.png",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "NLTK", icon: "https://miro.medium.com/v2/resize:fit:1184/format:webp/1*YM2HX.png" },
        { name: "SpaCy", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/512px-SpaCy_logo.svg.png" },
        { name: "LSTM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "RNN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      ],
      responsibilities: [
        "Collected and preprocessed Twitter comments and reviews for sentiment classification.",
        "Applied NLP techniques such as tokenization, lemmatization, and stop-word removal using NLTK and SpaCy.",
        "Built and trained various machine learning models including RNN and LSTM for sentiment analysis.",
        "Fine-tuned model performance by leveraging word embeddings and deep learning architectures.",
      ],
      demo: "#",
      category: ["Machine Learning"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState({}, '', `#${project.id}`);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const project = projects.find(p => p.id === hash);
        if (project) {
          setSelectedProject(project);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-10 pb-6 bg-background dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white flex items-center">
            <FolderGit2 className="mr-2 text-primary dark:text-gray-400" />
            Featured Projects
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["All", "Machine Learning", "Web Development"].map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                    filter === cat
                      ? "bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md"
                      : "bg-background dark:bg-black border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300"
                  }`}
                >
                  {cat}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  transition: { duration: 0.1 } 
                }}
                className="relative flex flex-col sm:flex-row p-4 rounded-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 cursor-pointer min-h-[300px]"
                onClick={() => openProjectDetails(project)}
              >
                <div className="flex-shrink-0 w-full sm:w-32 h-32 sm:h-auto mb-4 sm:mb-0 sm:mr-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-2 text-foreground dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground dark:text-gray-400 mb-2">
                    {project.period}
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-primary/10 dark:bg-gray-800 text-primary dark:text-gray-300 px-1.5 py-0.5 rounded-full"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={12}
                          height={12}
                          className="w-3 h-3 inline-block mr-1"
                        />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.demo !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full px-3 py-0.5 text-xs font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300"
                      >
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          {project.title === "RipAns – RMI Chat Application" ? "App Website" : "Live Demo"}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeProjectDetails}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-background dark:bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto border border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors duration-200"
                  onClick={closeProjectDetails}
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    width={300}
                    height={200}
                    className="w-full max-w-[300px] h-auto rounded-lg mx-auto"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">{selectedProject.title}</h2>
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{selectedProject.period}</p>
                <p className="mb-4 text-foreground dark:text-gray-300">{selectedProject.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground dark:text-white">Technologies:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-primary/10 dark:bg-gray-800 text-primary dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="w-4 h-4 inline-block mr-1"
                        />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground dark:text-white mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-foreground dark:text-gray-300">
                  {selectedProject.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {selectedProject.demo !== "#" && (
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300"
                      >
                        <Link href={selectedProject.demo} target="_blank">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          {selectedProject.title === "RipAns – RMI Chat Application" ? "App Website" : "Live Demo"}
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}