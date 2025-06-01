"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, Loader2, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = formRef.current?.querySelector('input[name="email"]') as HTMLInputElement;
    const emailValue = emailInput?.value || '';

    if (!isValidEmail(emailValue)) {
      alert("Please enter a valid email address with a proper domain (e.g., .com, .org).");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('submission_timestamp', new Date().toISOString());

      const response = await fetch("https://formsubmit.co/anass.elhannaoui.io@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        console.error("Form submission error:", response.status);
        alert("There was an issue with the form submission. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    formRef.current?.reset();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen pt-14 pb-10 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-foreground dark:text-white">Get in Touch</h1>
          <p className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative items-stretch">
          {/* Left sidebar with contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="rounded-xl p-8 shadow-lg border border-border/50 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 h-full flex flex-col"
            whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
          >
            <h2 className="text-2xl font-semibold mb-8 border-b pb-4 text-foreground dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-8 flex-grow flex flex-col justify-center">
              {[
                { 
                  icon: <Mail className="h-5 w-5" />, 
                  text: "anass.elhannaoui.io@gmail.com",
                  href: "mailto:anass.elhannaoui.io@gmail.com" 
                },
                { 
                  icon: <Phone className="h-5 w-5" />, 
                  text: "+212680625609" 
                },
                { 
                  icon: <Linkedin className="h-5 w-5" />, 
                  text: "linkedin.com/in/anasselhannaoui",
                  href: "https://www.linkedin.com/in/anasselhannaoui" 
                },
                { 
                  icon: <Github className="h-5 w-5" />, 
                  text: "github.com/anass-elhannaoui",
                  href: "https://github.com/anass-elhannaoui" 
                },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground dark:text-gray-400">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right form section - Gmail Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="rounded-xl shadow-lg border border-border/50 bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 overflow-hidden h-full flex flex-col"
            whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg text-center flex flex-col items-center justify-center h-full w-full"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-medium mb-3 text-foreground dark:text-white">Message Sent!</h3>
                <p className="text-muted-foreground dark:text-gray-400 mb-8">
                  Thank you for reaching out. I'll respond soon.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline"
                    className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 text-foreground dark:text-gray-300"
                  >
                    New Message
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                method="POST"
                className="h-full flex flex-col"
              >
                <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 border-b border-border/50 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-foreground dark:text-white">Send a message</h2>
                </div>

                <input type="hidden" name="_subject" value="New contact form submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-border/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">To:</span>
                    <Input
                      type="text"
                      name="to"
                      value="anass.elhannaoui.io@gmail.com"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      readOnly
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-border/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">From:</span>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address with a proper domain (e.g., .com, .org)"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center border-b border-border/50 py-2"
                  >
                    <span className="text-sm font-medium w-16 shrink-0 text-foreground dark:text-white">Subject:</span>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="How can I help you?"
                      className="flex-1 border-0 px-0 shadow-none focus-visible:ring-0 bg-transparent text-foreground dark:text-white"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex-grow flex flex-col mt-4"
                  >
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      className="w-full h-full min-h-[200px] border-0 px-0 shadow-none resize-none focus-visible:ring-0 text-base bg-transparent text-foreground dark:text-white flex-grow"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex justify-between items-center pt-4"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        className="rounded-full px-6 py-2 font-semibold border border-destructive/20 dark:border-destructive/20 text-destructive hover:bg-destructive/10 dark:hover:bg-destructive/10 hover:border-destructive/40 dark:hover:border-destructive/40 transition-all duration-300"
                        onClick={handleDiscard}
                      >
                        Discard
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        type="submit" 
                        size="sm"
                        className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}