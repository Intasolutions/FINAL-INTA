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

export default function BrandingPage() {
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
      title: "Brand Identity",
      description: "Crafting unique logos and visual identities",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197",
    },
    {
      title: "Brand Strategy",
      description: "Defining your brand’s voice and positioning",
      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
    },
    {
      title: "Collateral Design",
      description: "Creating cohesive marketing materials",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
  ];

  return (
    <>
      <Head>
        <title>Branding Services | Your Company</title>
        <meta
          name="description"
          content="Build a powerful brand identity with our expert branding services."
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
            Branding Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl"
          >
            Shape a memorable and impactful brand identity
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
              { step: "Discovery", desc: "Understand your vision and goals" },
              { step: "Research", desc: "Analyze market and competitors" },
              { step: "Design", desc: "Develop brand assets and guidelines" },
              { step: "Launch", desc: "Implement across all touchpoints" },
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
              { title: "Creative Vision", desc: "Unique and bold brand designs" },
              { title: "Strategic Insight", desc: "Positioning that resonates" },
              { title: "Consistency", desc: "Unified brand across platforms" },
              { title: "Client Focus", desc: "Your story drives our process" },
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
              Define Your Brand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-12"
            >
              Let’s build a brand that stands out and connects
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