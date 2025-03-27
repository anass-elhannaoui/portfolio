"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Movie Recognition and Recommendation System",
      period: "January 2023 – February 2023",
      description: "A movie recognition system using Python and TensorFlow for image classification with a recommendation engine based on collaborative filtering.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
      ],
      responsibilities: [
        "Developed a movie recognition system using Python and TensorFlow for image classification",
        "Implemented a recommendation engine based on collaborative filtering using Pandas and Scikit-learn",
        "Built a web application using Flask to allow users to upload movie posters and receive recommendations",
        "Used PostgreSQL for storing user preferences and movie metadata",
        "Deployed the application on Heroku for public access",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Twitter Sentiment Analysis",
      period: "October 2024 – December 2024",
      description: "A sentiment analysis system for Twitter comments using NLP techniques and machine learning models.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NLTK", icon: "https://raw.githubusercontent.com/nltk/nltk/develop/nltk/app/wordnet_app/static/images/nltk.png" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      ],
      responsibilities: [
        "Collected and preprocessed Twitter comments and reviews for sentiment classification",
        "Utilized NLP techniques such as tokenization, lemmatization, and stop-word removal using NLTK and SpaCy",
        "Built and trained machine learning models (Logistic Regression, SVM, and LSTMs) for sentiment analysis",
        "Developed a Flask-based web application for real-time sentiment classification",
        "Deployed the model on AWS Lambda with a RESTful API for scalability",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={24}
                          height={24}
                          className="mb-1"
                        />
                        <span className="text-xs text-muted-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}