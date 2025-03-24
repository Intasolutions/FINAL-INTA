"use client";
import Navbar from "@/components/Navbar";
import { useRef, useState, useEffect } from "react";
import "@/app/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const expertiseRef = useRef(null);
  const processRef = useRef(null);
  const milestonesRef = useRef(null);
  const galleryRef = useRef(null);
  const workRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom;
      const missionTop = missionRef.current?.getBoundingClientRect().top;

      if (heroBottom <= 0 && activeSection === 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveSection(2);
          setIsTransitioning(false);
        }, 400);
      } else if (missionTop >= 0 && activeSection === 2) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveSection(1);
          setIsTransitioning(false);
        }, 400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  const shadowVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 0.8, y: "0%", transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, y: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen relative overflow-hidden">
      <Navbar />

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-40 pointer-events-none"
            variants={shadowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeSection === 1 && (
          <motion.section
            key="hero"
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative z-10"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.h1
              className="text-5xl md:text-7xl tracking-wide text-white uppercase"
              variants={typingVariants}
              initial="hidden"
              animate="visible"
            >
              {"INTA SOLUTIONS".split("").map((char, idx) => (
                <motion.span key={idx} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="text-white text-xl md:text-2xl mt-8 max-w-3xl"
            >
              Innovating the digital landscape with cutting-edge technology and creative solutions.
            </motion.p>
            <motion.div
              className="absolute bottom-16"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
              onClick={() => scrollToSection(missionRef)}
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
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeSection === 2 && (
          <motion.section
            key="mission"
            ref={missionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center px-8 py-32 relative z-10 bg-black overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="max-w-6xl w-full relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 2, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-6xl text-white text-center mb-20 tracking-wide uppercase"
              >
                Mission & Vision
              </motion.h2>
              <div className="relative flex flex-col items-center gap-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full max-w-2xl bg-black p-8 rounded-lg border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10"
                >
                  <h3 className="text-3xl text-white mb-4 relative inline-block">
                    Mission
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    To craft transformative solutions that empower businesses, enhance user experiences, and drive technological progress worldwide.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-full max-w-2xl bg-black p-8 rounded-lg border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10"
                >
                  <h3 className="text-3xl text-white mb-4 relative inline-block">
                    Vision
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    To lead the digital revolution, creating a future where technology is intuitive, impactful, and accessible to all.
                  </p>
                </motion.div>
                <motion.div
                  className="absolute top-1/4 bottom-1/4 left-1/2 w-px bg-white/10"
                  initial={{ height: 0 }}
                  whileInView={{ height: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-8 py-32 space-y-32 relative z-10">
        <section ref={expertiseRef} className="min-h-screen flex items-center justify-center px-8 py-32 relative z-10 bg-black overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-6xl relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl text-white text-center mb-24 tracking-wide uppercase relative"
            >
              Our Expertise
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="relative grid md:grid-cols-3 gap-12">
              {[
                { title: "Development", desc: "Building robust, scalable applications with modern frameworks.", offset: "translate-y-0" },
                { title: "Design", desc: "Crafting intuitive, visually stunning user interfaces.", offset: "translate-y-12" },
                { title: "Strategy", desc: "Planning and executing digital transformation roadmaps.", offset: "translate-y-0" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 100, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.3)", transition: { duration: 0.4 } }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className={`bg-black p-8 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center transform ${item.offset}`}
                >
                  <h3 className="text-3xl text-white mb-4 relative inline-block">
                    {item.title}
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    />
                  </h3>
                  <p className="text-white text-lg leading-relaxed">{item.desc}</p>
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

        <section ref={processRef} className="min-h-screen flex items-center justify-center relative">
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
              Our Process
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "Discover", desc: "Understanding your needs and goals." },
                { step: "Design", desc: "Creating prototypes and wireframes." },
                { step: "Develop", desc: "Building the solution with precision." },
                { step: "Deliver", desc: "Launching and supporting your success." },
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
                  <p className="text-3xl text-white mb-4">{idx + 1}</p>
                  <h3 className="text-2xl text-white mb-4 relative inline-block">
                    {item.step}
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

        <section ref={milestonesRef} className="min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-3xl relative text-center"
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
              className="text-3xl md:text-5xl text-white mb-24 tracking-wide uppercase relative"
            >
              Our Journey
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="relative space-y-12">
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              {[
                "2020: Founded with a vision for innovation.",
                "2021: Launched our first product.",
                "2022: Secured key partnerships.",
                "2023: Expanded to 50+ clients.",
                "2024: Global reach achieved.",
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className={`flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`bg-black p-6 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-72 relative ${
                      idx % 2 === 0 ? "mr-12" : "ml-12"
                    }`}
                  >
                    <motion.div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full ${
                        idx % 2 === 0 ? "right-[-2.25rem]" : "left-[-2.25rem]"
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
                    />
                    <p className="text-white text-lg">{milestone}</p>
                  </div>
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

        <section ref={galleryRef} className="min-h-screen flex items-center justify-center relative">
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
              Gallery
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[1, 2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className="bg-black rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden"
                >
                  <img src={`/gallery-image-${idx}.jpg`} alt={`Gallery Image ${idx}`} className="w-full h-64 object-cover" />
                  <p className="p-6 text-white text-lg text-center">Image {idx} Description</p>
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

        <section ref={workRef} className="min-h-screen flex items-center justify-center relative">
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
              Our Work
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Project A", img: "/work-image-1.jpg", desc: "A groundbreaking app for seamless connectivity." },
                { title: "Project B", img: "/work-image-2.jpg", desc: "An AI-powered platform for smarter decisions." },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className="bg-black rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden"
                >
                  <img src={project.img} alt={project.title} className="w-full h-72 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl text-white mb-4 relative inline-block">
                      {project.title}
                      <motion.span
                        className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                      />
                    </h3>
                    <p className="text-white text-lg">{project.desc}</p>
                  </div>
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

        <section ref={teamRef} className="min-h-screen flex items-center justify-center relative">
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
              Our Team
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
                { name: "Jane Doe", role: "CEO", desc: "Visionary leader with 15+ years in tech." },
                { name: "John Smith", role: "CTO", desc: "Expert in scalable systems and innovation." },
                { name: "Emma Lee", role: "Lead Designer", desc: "Creative mind behind our UI/UX." },
              ].map((member, idx) => (
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
                  <h3 className="text-2xl text-white mb-2 relative inline-block">
                    {member.name}
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    />
                  </h3>
                  <p className="text-white text-lg mb-2">{member.role}</p>
                  <p className="text-white text-md">{member.desc}</p>
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

        <section ref={testimonialsRef} className="min-h-screen flex items-center justify-center relative">
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
              Testimonials
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { name: "Client A", quote: "INTA transformed our business with their innovative approach." },
                { name: "Client B", quote: "Their team delivered beyond expectations—truly exceptional!" },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                  className="bg-black p-8 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <p className="text-white text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-white text-lg relative inline-block">
                    {testimonial.name}
                    <motion.span
                      className="absolute left-0 bottom-[-8px] h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    />
                  </p>
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
              Join Us
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
              Ready to shape the future? Partner with us to bring your vision to life.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-black text-white border-2 border-white/20 rounded-lg text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Contact Us
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
            { name: "Mission", ref: missionRef },
            { name: "Expertise", ref: expertiseRef },
            { name: "Process", ref: processRef },
            { name: "Milestones", ref: milestonesRef },
            { name: "Gallery", ref: galleryRef },
            { name: "Our Work", ref: workRef },
            { name: "Team", ref: teamRef },
            { name: "Testimonials", ref: testimonialsRef },
            { name: "Join Us", ref: ctaRef },
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