"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Briefcase, MapPin, Workflow, Mail } from "lucide-react";

const faqs = [
  {
    value: "projects",
    icon: Code,
    question: "What type of projects do you work on?",
    answer:
      "I work on full-stack web applications, backend APIs, dashboards, and cross-platform mobile apps. My focus is on scalable, maintainable, and production-ready solutions.",
  },
  {
    value: "stack",
    icon: Workflow,
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes React and Next.js on the frontend, FastAPI and Express on the backend, PostgreSQL and MongoDB for databases, and React Native or Flutter for mobile development.",
  },
  {
    value: "availability",
    icon: Briefcase,
    question: "Are you available for freelance or full-time roles?",
    answer:
      "Yes. I am open to freelance, contract, and full-time opportunities depending on the scope, timeline, and goals of the project.",
  },
  {
    value: "location",
    icon: MapPin,
    question: "Where are you based, and do you work remotely?",
    answer:
      "I am based in Kampala, Uganda, and I work remotely with clients and teams across different regions and time zones.",
  },
  {
    value: "contact",
    icon: Mail,
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact page on this site or by email. I am always open to discussing new ideas and opportunities.",
  },
];

const FAQSection = () => {
  return (
    <section className="container py-24 max-w-6xl">
      <div className="grid gap-8 lg:gap-24 lg:grid-cols-3 lg:items-start">
        {/* Left Column – Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-32"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Quick answers to common questions about my work, process, and
            availability.
          </p>
        </motion.div>

        {/* Right Column – FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className=" lg:col-span-2 "
        >
          <Accordion className="w-full space-y-3">
            {faqs.map(({ value, icon: Icon, question, answer }) => (
              <AccordionItem
                key={value}
                value={value}
                className="rounded-xl border border-border/60 p-5 bg-card/60"
              >
                <AccordionTrigger className="flex items-center gap-3 text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent className=" text-muted-foreground bg-secondary/70 rounded-lg  p-3 mb-3">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
