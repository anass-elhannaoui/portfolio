"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  github: string;
  demo: string;
  category: string[];
  type: "Professional" | "Academic" | "Personal";
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: "road-infrastructure",
      title: "AI-Powered Road Infrastructure Management System",
      period: "March 2025 – June 2025",
      description: "A mobile/desktop app for real-time pothole detection and maintenance planning using advanced ML models.",
      image: "/images/road-infra.png",
      technologies: [
        { name: "YOLOv8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Faster R-CNN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Vision Transformers", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Leaflet.js", icon: "https://www.svgrepo.com/show/353991/leaflet.svg" }
      ],
      responsibilities: [
        "Developed a mobile/desktop app for road pothole detection using YOLOv8, Faster R-CNN, and Vision Transformers.",
        "Designed a real-time data processing pipeline with Apache Kafka and Spark.",
        "Created an interactive mapping system with Leaflet.js and OpenStreetMap.",
        "Built an administrative interface for maintenance planning and real-time notifications.",
        "Conducted rigorous testing to ensure high detection accuracy and reliability.",
      ],
      github: "https://github.com/aadraouimostafakamal/road-infrastructure-management",
      demo: "#",
      category: ["Machine Learning", "Web Development"],
      type: "Professional"
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
      github: "#",
      demo: "#",
      category: ["Web Development"],
      type: "Professional"
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
      github: "https://github.com/aadraouimostafakamal/RipAns",
      demo: "https://aadraouimostafakamal.github.io/RipAns/",
      category: ["Web Development"],
      type: "Personal"
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
      github: "https://github.com/aadraouimostafakamal/movie-recommendation-system",
      demo: "#",
      category: ["Machine Learning", "Web Development"],
      type: "Academic"
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
        { name: "NLTK", icon: "https://miro.medium.com/v2/resize:fit:1184/format:webp/1*YM2HXc7f4v02pZBEO8h-qw.png" },
        { name: "SpaCy", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/2560px-SpaCy_logo.svg.png" },
        { name: "LSTM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "RNN", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      ],
      responsibilities: [
        "Collected and preprocessed Twitter comments and reviews for sentiment classification.",
        "Applied NLP techniques such as tokenization, lemmatization, and stop-word removal using NLTK and SpaCy.",
        "Built and trained various machine learning models including RNN and LSTM for sentiment analysis.",
        "Fine-tuned model performance by leveraging word embeddings and deep learning architectures.",
      ],
      github: "https://github.com/aadraouimostafakamal/twitter-sentiment-analysis",
      demo: "#",
      category: ["Machine Learning"],
      type: "Academic"
    }
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

  const typeColors = {
    Professional: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
    Academic: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
    Personal: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200"
  };

  return (
    <div className="min-h-screen pt-14 pb-10 bg-background dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white">Featured Projects</h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["All", "Machine Learning", "Web Development"].map((cat, index) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-xl shadow-lg overflow-hidden border border-border dark:border-gray-600 transition-all duration-300 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 cursor-pointer"
              whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${typeColors[project.type]}`}>
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-foreground dark:text-white">{project.title}</h2>
                <p className="text-muted-foreground dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-accent dark:bg-gray-800 p-1 px-2 rounded-full text-xs text-foreground dark:text-gray-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      {tech.name}
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="flex items-center gap-1 bg-accent dark:bg-gray-800 p-1 px-2 rounded-full text-xs text-foreground dark:text-gray-300">
                      +{project.technologies.length - 4}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background dark:bg-gray-900 rounded-xl shadow-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto border border-border dark:border-gray-600 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white"
                onClick={closeProjectDetails}
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">{selectedProject.title}</h2>
              <p className="text-muted-foreground dark:text-gray-400 mb-4">{selectedProject.period}</p>
              <p className="mb-4 text-foreground dark:text-gray-300">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-accent dark:bg-gray-800 p-1 px-2 rounded-full text-xs text-foreground dark:text-gray-300"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
              <h3 className="font-semibold mb-2 text-foreground dark:text-white">Key Responsibilities:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-foreground dark:text-gray-300">
                {selectedProject.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                {selectedProject.github && selectedProject.github !== "#" && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link href={selectedProject.github} target="_blank">
                      <Button variant="outline" className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </Button>
                    </Link>
                  </motion.div>
                )}
                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link href={selectedProject.demo} target="_blank">
                      <Button className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" /> 
                        {selectedProject.title === "RipAns – RMI Chat Application" ? "App Website" : "Live Demo"}
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}