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

    // Check hash on initial load
    handleHashChange();

    // Set up hash change listener
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const typeColors = {
    Professional: "bg-blue-100 text-blue-800",
    Academic: "bg-green-100 text-green-800",
    Personal: "bg-purple-100 text-purple-800"
  };

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Machine Learning", "Web Development"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-accent p-1 px-2 rounded-full text-xs"
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
                    <div className="flex items-center gap-1 bg-accent p-1 px-2 rounded-full text-xs">
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
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl shadow-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={closeProjectDetails}
              >
                <X />
              </button>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {selectedProject.period}
              </p>
              <p className="mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-accent p-1 px-2 rounded-full text-xs"
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
              <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                {selectedProject.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                {selectedProject.github && selectedProject.github !== "#" && (
                  <Link href={selectedProject.github} target="_blank">
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Button>
                  </Link>
                )}
                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <Link href={selectedProject.demo} target="_blank">
                    <Button>
                      <ExternalLink className="w-4 h-4 mr-2" /> 
                      {selectedProject.title === "RipAns – RMI Chat Application" ? "App Website" : "Live Demo"}
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}