"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formsubmit.co/anass.elhannaoui.io@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text ">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Left sidebar with contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-card rounded-xl p-8 shadow-lg border border-border/50 h-fit"
          >
            <h2 className="text-2xl font-semibold mb-8 border-b pb-4">
              Contact Information
            </h2>
            <div className="space-y-8">
              {[
                { 
                  icon: <Mail className="h-5 w-5" />, 
                  text: "anass.elhannaoui.io@gmail.com",
                  href: "mailto:anass.elhannaoui.io@gmail.com" 
                },
                { 
                  icon: <Phone className="h-5 w-5" />, 
                  text: "06 80 62 56 09" 
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
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm">
                Let's connect and discuss how we can collaborate on your next project.
              </p>
            </div>
          </motion.div>

          {/* Right form section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 bg-card rounded-xl p-8 shadow-lg border border-border/50"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-medium mb-3">Message Sent Successfully!</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  size="lg"
                  className="px-6"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6" 
                action="https://formsubmit.co/anass.elhannaoui.io@gmail.com" 
                method="POST"
              >
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_subject" value="New contact form submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                  >
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                  >
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="How can I help you?"
                    className="w-full"
                    required
                  />
                </motion.div>
                
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, questions, or anything else..."
                    className="w-full min-h-[180px] resize-none"
                    required
                  />
                </motion.div>
                
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="pt-2"
                >
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-base font-medium" 
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}