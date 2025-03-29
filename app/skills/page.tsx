"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          highlight:
            "Developed machine learning models, performed data preprocessing and visualization, and utilized Flask frameworks for web application deployment.",
        },
        {
          name: "Java",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          highlight:
            "Engineered scalable backend solutions, including REST APIs and real-time Java RMI chat applications, while completing various academic projects.",
        },
        {
          name: "TypeScript",
          level: 60,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          highlight:
            "Enhanced UI/UX with clean, typed React components and interactivity.",
        },
        {
          name: "SQL",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight: "Designed and optimized PostgreSQL databases for web apps, ensuring performance, security, and scalability."
        },
        {
          name: "C",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
          highlight: "Built algorithms, data structures, and a Solitaire game in C, applying memory management and modular design."
        },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        {
          name: "TensorFlow",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          highlight:
            "Designed and implemented deep learning solutions for computer vision (pothole detection) and NLP (sentiment analysis), while developing additional ML models for academic projects.",
        },
        {
          name: "Scikit-learn",
          level: 85,
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
          highlight:
            "Developed machine learning models and recommendation systems using scikit-learn, implementing algorithms for data analysis and predictive modeling.",
        },
        {
          name: "Pandas",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          highlight:
            "Cleaned and processed large-scale datasets for analysis & ML",
        },
        {
          name: "NumPy",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          highlight:
            "Optimized numerical computations in ML workflows",
        },
        {
          name: "Jupyter",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
          highlight:
            "Used for data exploration and visualization during ML projects",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 88,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          highlight:
            "Designed relational databases for recommendation systems & chat apps",
        },
        {
          name: "MongoDB",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          highlight: "Handled NoSQL storage for flexible data access",
        },
        {
          name: "MySQL",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          highlight: "Managed data for web apps & backend systems",
        },
        {
          name: "Redis",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          highlight:
            "Implemented caching mechanisms to improve API performance",
        },
        {
          name: "Neo4j",
          level: 65,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
          highlight: "Explored graph database use cases",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Skills</h1>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      y: -3,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      transition: { duration: 0.1 } 
                    }}
                    className="flex gap-4 bg-muted p-4 rounded-lg shadow-sm hover:bg-muted/80 transition-colors duration-100"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 mb-1" />
                      {skill.highlight && (
                        <p className="text-xs text-muted-foreground">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}