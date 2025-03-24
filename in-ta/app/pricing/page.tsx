"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "@/app/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage() {
  const pricingRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      y: -15, 
      scale: 1.05, 
      boxShadow: "0 0 40px rgba(255,255,255,0.3)",
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pricingPlans = [
    {
      name: "Basic",
      price: 29,
      features: ["5 Projects", "Basic Support", "1 User", "Core Features"],
      popular: false
    },
    {
      name: "Pro",
      price: 99,
      features: ["Unlimited Projects", "Priority Support", "5 Users", "Advanced Features"],
      popular: true
    },
    {
      name: "Enterprise",
      price: 299,
      features: ["Custom Solutions", "24/7 Support", "Unlimited Users", "All Features"],
      popular: false
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={pricingRef}
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
          Pricing Plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl"
        >
          Choose the perfect plan for your needs with transparent pricing
        </motion.p>
      </motion.section>

      {/* Pricing Cards */}
      <section className="py-32 px-8 max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`relative bg-black p-8 rounded-xl border ${
                plan.popular ? "border-white/40" : "border-white/20"
              } shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
            >
              {plan.popular && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm"
                >
                  Most Popular
                </motion.span>
              )}
              <motion.h3
                className="text-2xl mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {plan.name}
              </motion.h3>
              <motion.div
                className="text-5xl mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              >
                ${plan.price}
                <span className="text-xl">/mo</span>
              </motion.div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <motion.li
                    key={fIdx}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 + fIdx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg ${
                  plan.popular 
                    ? "bg-white text-black" 
                    : "bg-transparent border border-white/20 text-white"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Comparison */}
      <section ref={featuresRef} className="py-32 px-8 max-w-6xl mx-auto relative z-10">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 uppercase tracking-wide"
        >
          Feature Comparison
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black border border-white/20 rounded-xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <div className="grid grid-cols-4 gap-4 text-center">
            <motion.div className="text-lg font-bold">Features</motion.div>
            <motion.div className="text-lg font-bold">Basic</motion.div>
            <motion.div className="text-lg font-bold">Pro</motion.div>
            <motion.div className="text-lg font-bold">Enterprise</motion.div>

            {[
              ["Core Features", true, true, true],
              ["Advanced Analytics", false, true, true],
              ["Priority Support", false, true, true],
              ["Custom Integrations", false, false, true],
              ["Team Collaboration", false, true, true],
            ].map((row, idx) => (
              <motion.div
                key={idx}
                variants={featureVariants}
                className="contents"
              >
                <div className="py-4 border-t border-white/10">{row[0]}</div>
                {row.slice(1).map((available, i) => (
                  <div
                    key={i}
                    className="py-4 border-t border-white/10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {available ? (
                        <svg className="w-6 h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 mx-auto text-white/30" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-32 px-8 max-w-4xl mx-auto relative z-10">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 uppercase tracking-wide"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {[
            {
              q: "Can I change plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 14-day free trial for all plans."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards and bank transfers for Enterprise plans."
            }
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="bg-black p-6 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <motion.h3
                className="text-xl mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {faq.q}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {faq.a}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-12"
          >
            Choose a plan and start building with INTA Solutions today
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-black rounded-lg text-xl font-semibold"
          >
            Start Now
          </motion.button>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-black z-20 py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-center gap-6">
          {[
            { name: "Pricing", ref: pricingRef },
            { name: "Features", ref: featuresRef },
            { name: "FAQ", ref: faqRef },
            { name: "Get Started", ref: ctaRef },
          ].map((item, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, textShadow: "0 0 15px rgba(255,255,255,0.7)" }}
              className="text-white text-lg transition-colors"
              onClick={() => scrollToSection(item.ref)}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}