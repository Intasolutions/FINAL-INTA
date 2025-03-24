"use client";
import Navbar from "@/components/Navbar";
import { useRef, useState } from "react";
import "@/app/globals.css";
import { motion } from "framer-motion";

export default function BlogPage() {
  const introRef = useRef(null);
  const postsRef = useRef(null);
  const ctaRef = useRef(null);

  const [selectedPost, setSelectedPost] = useState(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const postVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)", transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, borderColor: "#ffffff", transition: { duration: 0.3 } },
    tap: { scale: 0.98 },
  };

  const articleVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } },
  };

  const posts = [
    {
      id: 1,
      title: "The Art of Minimalism",
      excerpt: "Exploring the beauty of less in design and life.",
      date: "March 20, 2025",
      img: "https://via.placeholder.com/800x400?text=Minimalism",
      fullText: "Minimalism is more than just a design trend—it’s a philosophy. By stripping away the unnecessary, we uncover the essence of what truly matters. In this article, we explore how minimalism influences modern design, personal well-being, and even technology. From clean lines to intentional living, discover why less can indeed be more.",
    },
    {
      id: 2,
      title: "Tech in 2025",
      excerpt: "Predictions and trends shaping the future.",
      date: "March 15, 2025",
      img: "https://via.placeholder.com/800x400?text=Tech",
      fullText: "As we approach 2025, technology continues to evolve at a breakneck pace. This piece dives into the key trends to watch: AI integration, sustainable tech, and the rise of decentralized systems. We’ll break down what these shifts mean for businesses, consumers, and the planet, offering a glimpse into a future that’s already unfolding.",
    },
    {
      id: 3,
      title: "Writing for Clarity",
      excerpt: "How to craft messages that resonate.",
      date: "March 10, 2025",
      img: "https://via.placeholder.com/800x400?text=Writing",
      fullText: "Clear writing is an art form that connects ideas to people. In this article, we unpack strategies for effective communication—simplicity, structure, and empathy. Whether you’re drafting an email or a novel, learn how to cut through the noise and make your words stick with readers long after they’ve finished.",
    },
  ];

  const handleReadMore = (postId) => {
    setSelectedPost(selectedPost === postId ? null : postId); // Toggle the selected post
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Intro Section */}
      <section ref={introRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 relative z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-white/5 to-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl tracking-wide uppercase"
        >
          The Blog
        </motion.h1>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mt-6 max-w-xl text-gray-400"
        >
          Thoughtful articles, industry insights, and stories worth reading.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => scrollToSection(postsRef)}
            className="px-6 py-3 bg-transparent border-2 border-white/20 text-white rounded-md text-lg"
          >
            Read Now
          </motion.button>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section ref={postsRef} className="py-20 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 tracking-wide uppercase"
        >
          Latest Posts
        </motion.h2>
        <div className="space-y-16">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              variants={postVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-black p-6 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
            >
              <img src={post.img} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl text-white">{post.title}</h3>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleReadMore(post.id)}
                className="px-4 py-2 bg-transparent border border-white/20 text-white rounded-md"
              >
                {selectedPost === post.id ? "Collapse" : "Read More"}
              </motion.button>
              <motion.div
                variants={articleVariants}
                initial="hidden"
                animate={selectedPost === post.id ? "visible" : "hidden"}
                className="mt-4 text-gray-200"
              >
                <p>{post.fullText}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-white/5 to-black pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-8 tracking-wide uppercase"
        >
          Stay in the Loop
        </motion.h2>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          Subscribe for updates on our latest posts.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white/50"
          />
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="px-6 py-3 bg-transparent border-2 border-white/20 text-white rounded-md"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-black/90 z-20 py-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {[
            { name: "Intro", ref: introRef },
            { name: "Posts", ref: postsRef },
            { name: "Subscribe", ref: ctaRef },
          ].map((item, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              className="text-white text-lg"
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