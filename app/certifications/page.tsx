"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CertificationItem = {
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
  credentialUrl: string;
};

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      issued: "Jun 2025",
      skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
      credentialUrl: "https://www.credly.com/badges/4cd2e21b-bbe9-49dd-bb5c-844178ef108f/public_url",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford Online",
      issued: "Feb 2025",
      skills: ["TensorFlow", "Artificial Neural Networks", "Decision Trees"],
      credentialUrl: "https://coursera.org/share/f39e2976fe52203a45e2368f6b20d294",
    },
    {
      title: "COMPRENDRE ET GÉRER LES POSITIONS DE VIE EN NÉGOCIATION",
      issuer: "AUF",
      issued: "Nov 2024",
      skills: [],
      credentialUrl: "https://certificate.bcdiploma.com/check/F0C80FE25891BF61FB0177AFE393D788368CFA9B9FC6F6B0EC0E151DF6E92FD1VTVzQVNhK3hiWVpyMjZjdkVRTlNyRThBVE5LWnZLcXN1bllmZGUyelNWTnFja0VR",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford Online",
      issued: "Aug 2024",
      skills: ["Classification", "Régression linéaire", "Régression logistique"],
      credentialUrl: "https://coursera.org/share/1e4108654177b6a68cc9619a4e048502",
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
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: { duration: 0.1 },
              }}
              className="rounded-lg p-5 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">
                  Issued: {cert.issued}
                </p>
                {cert.skills.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground dark:text-white">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 dark:bg-gray-800 text-primary dark:text-gray-300 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center text-foreground dark:text-gray-300"
                >
                  <Link href={cert.credentialUrl} target="_blank">
                    View Credential <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
