"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "@/app/globals.css";
import { motion } from "framer-motion";

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const arrowVariants = {
    initial: { y: 0 },
    animate: { y: 20, transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { y: -10, scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.3)", transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen relative overflow-hidden">
      <Navbar />

      <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl tracking-wide text-white uppercase"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-xl md:text-2xl mt-8 max-w-3xl"
        >
          We’d love to hear from you! Get in touch to discuss your project or learn more about our services.
        </motion.p>
        <motion.div
          className="absolute bottom-16"
          variants={arrowVariants}
          initial="initial"
          animate="animate"
          onClick={() => scrollToSection(formRef)}
        >
          <svg
            className="w-14 h-14 text-white cursor-pointer hover:text-gray-300 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-32 space-y-32 relative z-10">
        <section ref={formRef} className="min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-2xl relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
            />
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl text-white text-center mb-12 tracking-wide uppercase relative"
            >
              Send a Message
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-black p-8 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-lg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-lg mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50"
                    placeholder="Your Message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-black text-white border-2 border-white/20 rounded-lg text-lg"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </motion.div>
        </section>

        <section ref={infoRef} className="min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
            />
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl text-white text-center mb-24 tracking-wide uppercase relative"
            >
              Contact Information
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Email", desc: "info@intasolutions.com" },
                { title: "Phone", desc: "+1 (555) 123-4567" },
                { title: "Address", desc: "123 Tech Street, Innovation City, 90210" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className="bg-black p-8 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center"
                >
                  <h3 className="text-2xl text-white mb-4 relative inline-block">
                    {item.title}
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    />
                  </h3>
                  <p className="text-white text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </motion.div>
        </section>

        <section ref={ctaRef} className="min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full text-center relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
            />
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl text-white mb-12 tracking-wide uppercase relative"
            >
              Ready to Connect?
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white text-xl max-w-3xl mx-auto mb-12"
            >
              Let’s work together to bring your ideas to life. Reach out today!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(formRef)}
              className="px-12 py-4 bg-black text-white border-2 border-white/20 rounded-lg text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </motion.button>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </motion.div>
        </section>
      </div>

      <div className="sticky top-0 bg-black z-20 py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-center gap-6">
          {[
            { name: "Home", ref: heroRef },
            { name: "Send a Message", ref: formRef },
            { name: "Contact Info", ref: infoRef },
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