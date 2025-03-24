"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "@/app/globals.css";
import { motion } from "framer-motion";
import Head from "next/head";

interface Service {
  title: string;
  description: string;
  icon: string;
}

export default function SEOServicePage() {
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0 0 40px rgba(255,255,255,0.3)",
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const services: Service[] = [
    {
      title: "Keyword Research",
      description: "Identifying high-impact keywords for your audience",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
      title: "On-Page SEO",
      description: "Optimizing content and structure for search engines",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Link Building",
      description: "Building authority with quality backlinks",
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    },
  ];

  return (
    <>
      <Head>
        <title>SEO Services | Your Company</title>
        <meta
          name="description"
          content="Boost your online visibility with expert SEO services tailored to your business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black text-white font-sans min-h-screen relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative z-10"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl tracking-wide uppercase mb-8"
          >
            SEO Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl"
          >
            Elevate your search rankings and drive organic traffic
          </motion.p>
        </motion.section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-32 px-8 max-w-6xl mx-auto relative z-10">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 uppercase tracking-wide"
          >
            Our Services
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-black p-8 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <svg className="w-12 h-12 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-32 px-8 max-w-6xl mx-auto relative z-10">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 uppercase tracking-wide"
          >
            Our Process
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {[
              { step: "Audit", desc: "Analyze current SEO performance" },
              { step: "Strategy", desc: "Develop a tailored SEO plan" },
              { step: "Implementation", desc: "Execute on-page and off-page tactics" },
              { step: "Monitoring", desc: "Track and refine results" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex items-center gap-6 bg-black p-6 rounded-xl border border-white/20"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{item.step}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyUsRef} className="py-32 px-8 max-w-4xl mx-auto relative z-10">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 uppercase tracking-wide"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { title: "Data-Driven", desc: "Decisions backed by analytics" },
              { title: "Expert Team", desc: "SEO specialists with proven results" },
              { title: "Custom Solutions", desc: "Tailored strategies for your goals" },
              { title: "Transparent Reporting", desc: "Clear insights on progress" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="bg-black p-6 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-32 px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              className="text-4xl md:text-5xl mb-8 uppercase tracking-wide"
            >
              Boost Your Visibility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-12"
            >
              Partner with us to dominate search engine results
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white text-black rounded-lg text-xl font-semibold"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-0 bg-black z-20 py-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-center gap-6">
            {[
              { name: "Services", ref: servicesRef },
              { name: "Process", ref: processRef },
              { name: "Why Us", ref: whyUsRef },
              { name: "Contact", ref: ctaRef },
            ].map((item, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, textShadow: "0 0 15px rgba(255,255,255,0.7)" }}
                className="text-white text-lg transition-colors"
                onClick={() => scrollToSection(item.ref)}
                aria-label={`Scroll to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}