"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, Zap, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              We Tell Stories That Matter.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              NextBlog is where ideas find their voice. A community-driven platform for thinkers, creators, and innovators.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/register"
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Join the Community <ArrowRight size={18} />
              </Link>
              <Link
                href="/blogs"
                className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-800 dark:text-gray-200 font-semibold transition-all shadow-sm hover:shadow-md"
              >
                Read Blogs
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 dark:opacity-10 pointer-events-none">
           <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400 blur-3xl filter" />
           <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400 blur-3xl filter" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                 {/* Placeholder for a real image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-9xl font-bold opacity-30">
                    NB
                 </div>
                 {/* Decorative Image Fallback or Real Image */}
                 <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We believe that everyone has a story worth telling. Our mission is to provide a seamless, beautiful, and powerful platform for writers to share their perspectives with the world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're a seasoned journalist, a tech enthusiast, or a creative storyteller, NextBlog gives you the tools to reach your audience and make an impact.
              </p>
              
              <div className="flex gap-4">
                  <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg min-w-[100px]">
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">10k+</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Writers</span>
                  </div>
                   <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg min-w-[100px]">
                      <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">5M+</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Readers</span>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose NextBlog?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with modern technology associated with a clean, distraction-free reading experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
             className="text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Meet the Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate minds behind NextBlog.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 relative overflow-hidden bg-blue-600 dark:bg-blue-700">
         <div className="absolute inset-0 opacity-10 pattern-dots"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                Start Your Journey Today
            </motion.h2>
            <motion.p 
                className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                Join thousands of writers who are already sharing their stories on NextBlog. 
                It's free, easy, and designed for you.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Link
                    href="/register"
                    className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
                >
                    Create Your Account
                </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

// Feature Data
const features = [
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast",
    description: "Powered by Next.js 15, ensuring your blog loads instantly for readers around the globe."
  },
  {
    icon: <Users size={28} />,
    title: "Community First",
    description: "Connect with like-minded individuals, comment, share, and grow your network effortlessly."
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Rich Content",
    description: "Support for markdown, code blocks, and media embeds to make your stories really pop."
  }
];

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Alex is a visionary leader with over 10 years of experience in digital publishing."
  },
  {
    name: "Sarah Williams",
    role: "Head of Content",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Sarah ensures that every story on NextBlog meets our high standards of quality."
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Michael is the technical wizard ensuring the platform runs smoothly and securely."
  }
];

export default AboutPage;