"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Cloud, Brain, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type CertificationItem = {
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
  credentialUrl: string;
  gradient: string;
  icon: any;
  logo?: string;
};

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      issued: "Jun 2025",
      skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
      credentialUrl: "https://www.credly.com/badges/4cd2e21b-bbe9-49dd-bb5c-844178ef108f/public_url",
      gradient: "from-orange-500/20 via-orange-400/10 to-blue-600/20",
      icon: Cloud,
      logo: "https://images.icon-icons.com/2407/PNG/512/aws_icon_146237.png",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford Online",
      issued: "Feb 2025",
      skills: ["TensorFlow", "Artificial Neural Networks", "Decision Trees"],
      credentialUrl: "https://coursera.org/share/f39e2976fe52203a45e2368f6b20d294",
      gradient: "from-red-600/20 via-red-500/10 to-gray-800/20",
      icon: Brain,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3Bzk5crQTbuLiP8nmcUZH56rQb8d01hfHoHhvs0wYZCYa2H92ENGwXvlcw34K7XRe5A&usqp=CAU",
    },
    {
      title: "COMPRENDRE ET GÉRER LES POSITIONS DE VIE EN NÉGOCIATION",
      issuer: "AUF",
      issued: "Nov 2024",
      skills: [],
      credentialUrl: "https://certificate.bcdiploma.com/check/F0C80FE25891BF61FB0177AFE393D788368CFA9B9FC6F6B0EC0E151DF6E92FD1VTVzQVNhK3hiWVpyMjZjdkVRTlNyRThBVE5LWnZLcXN1bllmZGUyelNWTnFja0VR",
      gradient: "from-blue-600/20 via-blue-500/10 to-indigo-600/20",
      icon: MessageSquare,
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford Online",
      issued: "Aug 2024",
      skills: ["Classification", "Régression linéaire", "Régression logistique"],
      credentialUrl: "https://coursera.org/share/1e4108654177b6a68cc9619a4e048502",
      gradient: "from-red-600/20 via-red-500/10 to-gray-800/20",
      icon: Brain,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3Bzk5crQTbuLiP8nmcUZH56rQb8d01hfHoHhvs0wYZCYa2H92ENGwXvlcw34K7XRe5A&usqp=CAU",
    },
  ];

  return (
    <div className="min-h-screen pt-10 pb-6 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white flex items-center">
            <Award className="mr-2 text-primary dark:text-gray-400" />
            Certifications
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2 },
                }}
                className={`rounded-xl p-6 bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group`}
              >
                {/* Background decorative icon */}
                <div className="absolute -right-8 -top-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300">
                  <IconComponent size={120} />
                </div>

                {/* Logo badge in top-right corner */}
                {cert.logo && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                )}

                <div className="flex-grow relative z-10">
                  {/* Icon badge */}
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-gray-800">
                    <IconComponent className="w-6 h-6 text-primary dark:text-gray-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400 mb-2 font-medium">
                    {cert.issuer}
                  </p>

                  {/* Date with icon */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground dark:text-gray-400 mb-4">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>Issued: {cert.issued}</span>
                  </div>

                  {cert.skills.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground dark:text-white mb-2">
                        Skills Acquired:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="text-xs bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-foreground dark:text-gray-300 px-3 py-1.5 rounded-full border border-primary/20 dark:border-gray-600 font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-auto w-full rounded-full px-6 py-2.5 font-semibold bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-primary/30 dark:border-gray-600 hover:bg-primary/20 dark:hover:bg-gray-800 hover:border-primary/50 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300 shadow-sm"
                  >
                    <Link href={cert.credentialUrl} target="_blank">
                      View Credential <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
