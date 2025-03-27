"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const education = [
    {
      school: "National School of Applied Science, Oujda, Morocco",
      degree: "Data Science and Cloud Computing Engineering",
      period: "Sept 2021 – Sept 2026",
      image: "https://lh3.googleusercontent.com/proxy/nqIMm16aGyspKGfHnFvtTAzN15i93O9SkvqGMnP5zcjn1f3Hp1-fEt6alclOUf9__nbYPbRPZr1gZC0nBTwv5KdzLUzSwwu7c26TDtCuqXISVUBY8SA",
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
    {
      title: "Machine Learning Engineer Intern",
      company: "AI-Powered Road Infrastructure Management System",
      period: "March 2025 – June 2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      responsibilities: [
        "Developed a mobile/desktop app for road pothole detection using YOLOv8, Faster R-CNN, and Vision Transformers",
        "Designed a real-time data processing pipeline with Apache Kafka and Spark",
        "Created an interactive mapping system with Leaflet.js and OpenStreetMap",
        "Built an administrative interface for maintenance planning and real-time notifications",
        "Conducted rigorous testing to ensure high detection accuracy and reliability",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQFz4LgVY7LgSA/profile-displayphoto-shrink_800_800/B4EZUPQGHWGYAg-/0/1739717633926?e=1748476800&v=beta&t=OVBgKIGdH0oXAJ3-w4L-HTWdpSRNp1-PdML6RgfKgaI"
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              I am a passionate Data Science and DevOps Engineer with a strong foundation in machine learning, 
              cloud architecture, and software development. My journey combines theoretical knowledge with 
              practical experience in building scalable solutions and leveraging data to solve complex problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-8 bg-card rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={edu.image}
                  alt={edu.school}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{edu.school}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-8 bg-card rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-muted-foreground">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}