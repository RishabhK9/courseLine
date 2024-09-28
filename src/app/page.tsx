"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "../components/header";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "./fonts";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import HoneycombPattern from "../components/FloatingHoneycomb";
import AnimatedIcon from "../components/AnimatedIcon";
// import HoneycombPattern from "../components/AnimatedHoneycomb";
import ParallaxSection from "../components/ParallaxSection";

const Home = () => {
  const { theme } = useTheme();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = [
    "design your future with",
    "get your first internship with",
    "build your network with",
    "launch your career with",
    "explore new opportunities with",
    "develop your skills with",
    "connect with mentors through",
    "accelerate your growth with",
    "discover your potential with",
    "shape your path with",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const BenefitCard = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="bg-[#f7f3e3] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-[#0d3362] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-[#0d3362]">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0 opacity-10">
        <HoneycombPattern />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-white to-[#f5f0e0]  pb-20"
        >
          <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-[#eadaa2] transition-colors duration-300 text-2xl font-bold"
                  >
                    honeycomb.
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-[#eadaa2] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-[#eadaa2] text-white hover:bg-[#d8c88f] px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <header className="relative z-20 flex flex-col items-center text-center px-4 pt-8 max-w-6xl mx-auto">
            <h1 className="text-[#0d3362] text-[58px] font-bold leading-tight h-[70px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {phrases[phraseIndex].split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.03 }}
                    >
                      {index === 0 ? char.toUpperCase() : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </h1>
            <motion.span
              className="text-[#eadaa2] text-[58px] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              honeycomb.
            </motion.span>
            <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl">
              Create an account, answer a few questions about your goals, and
              get a personalized roadmap. From projects to mentors and clubs,
              honeycomb guides you toward landing your dream internship.
            </p>
            <Link
              href="/signup"
              className="mt-8 bg-[#666a86] text-white px-10 py-3 rounded-full hover:bg-[#555872] transition duration-300"
            >
              Get Started
            </Link>
          </header>
        </motion.section>

        {/* Why Choose honeycomb? section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#f7f3e3] py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3362]">
              Why Choose honeycomb?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                icon={
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                }
                title="Experience"
                description="Gain real-world skills through hands-on projects and internships."
              />
              <BenefitCard
                icon={
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                }
                title="Mentors"
                description="Learn from industry experts who guide your professional growth."
              />
              <BenefitCard
                icon={
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                }
                title="Clubs"
                description="Join diverse communities to explore interests and build connections."
              />
            </div>
          </div>
        </motion.section>

        {/* How It Works section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-b from-[#f7f3e3] to-white py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3362]">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#eadaa2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                  Create Your Profile
                </h3>
                <p className="text-gray-800">
                  Answer questions about your career goals and interests
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#eadaa2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                  Get Your Roadmap
                </h3>
                <p className="text-gray-800">
                  Receive a personalized plan tailored to your goals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#eadaa2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                  Take Action
                </h3>
                <p className="text-gray-800">
                  Follow your roadmap to land your dream internship
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0d3362]">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    className="w-6 h-6 text-[#eadaa2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                    Personalized Roadmaps
                  </h3>
                  <p className="text-gray-800">
                    AI-generated plans tailored to your specific goals and
                    interests
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    className="w-6 h-6 text-[#eadaa2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                    Project Recommendations
                  </h3>
                  <p className="text-gray-800">
                    Curated list of projects and courses to enhance your skills
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    className="w-6 h-6 text-[#eadaa2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                    Mentor Matching
                  </h3>
                  <p className="text-gray-800">
                    Connect with industry professionals and alumni for guidance
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    className="w-6 h-6 text-[#eadaa2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0d3362]">
                    Club Recommendations
                  </h3>
                  <p className="text-gray-800">
                    Discover relevant student organizations to join and network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-[#0d3362] text-white py-20"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join honeycomb today and take the first step towards your dream
              internship
            </p>
            <Link
              href="/signup"
              className="bg-[#eadaa2] text-[#0d3362] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d8c88f] transition duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </motion.section>
      </div>

      <footer className="relative z-20 bg-white bg-opacity-90 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 honeycomb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
