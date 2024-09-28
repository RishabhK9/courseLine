"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import GradientBackground from "../../components/GradientBackground";

interface RoadmapItem {
  title: string;
  description: string;
  links: string[];
}

interface Roadmap {
  projects: RoadmapItem[];
  mentors: RoadmapItem[];
  clubs: RoadmapItem[];
  courses: RoadmapItem[];
}

const RoadmapPage = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to generate roadmap
    const generateRoadmap = async () => {
      // In a real scenario, you'd make an API call here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating delay

      setRoadmap({
        projects: [
          {
            title: "Build a Personal Portfolio Website",
            description:
              "Create a website to showcase your projects and skills.",
            links: [
              "https://www.youtube.com/watch?v=_xkSvufmjEs",
              "https://www.freecodecamp.org/news/how-to-build-a-portfolio-website/",
            ],
          },
          // Add more project suggestions
        ],
        mentors: [
          {
            title: "John Doe - Software Engineer at Google",
            description: "GT Alumni, specializes in machine learning",
            links: ["https://www.linkedin.com/in/johndoe"],
          },
          // Add more mentor suggestions
        ],
        clubs: [
          {
            title: "GT Web Development Club",
            description:
              "Learn web development skills and work on real projects",
            links: ["https://wdcgt.com"],
          },
          // Add more club suggestions
        ],
        courses: [
          {
            title: "CS 1331 - Introduction to Object-Oriented Programming",
            description: "Fundamental course for computer science majors",
            links: ["https://www.cc.gatech.edu/~stasko/1331/"],
          },
          // Add more course suggestions
        ],
      });
      setLoading(false);
    };

    generateRoadmap();
  }, []);

  const RoadmapSection = ({
    title,
    items,
  }: {
    title: string;
    items: RoadmapItem[];
  }) => (
    <div className="mb-8">
      <h2 className={`text-2xl ${plus_jakarta_sans_bold} text-[#0d3362] mb-4`}>
        {title}
      </h2>
      {items.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3
            className={`text-lg ${plus_jakarta_sans_bold} text-[#0d3362] mb-2`}
          >
            {item.title}
          </h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <div className="flex flex-wrap">
            {item.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eadaa2] hover:text-[#d8c88f] mr-4"
              >
                Resource {linkIndex + 1}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <GradientBackground>
      <div className={`min-h-screen ${plus_jakarta_sans_regular}`}>
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <Link
            href="/dashboard"
            className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300"
          >
            honeycomb.
          </Link>
          <button className="text-gray-600 hover:text-gray-800">Logout</button>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <h1
            className={`text-4xl ${plus_jakarta_sans_bold} text-center text-[#0d3362] mb-8`}
          >
            Your Personalized Roadmap
          </h1>

          {loading ? (
            <div className="text-center">
              <p className="text-xl text-gray-600">
                Generating your roadmap...
              </p>
            </div>
          ) : roadmap ? (
            <>
              <RoadmapSection
                title="Recommended Projects"
                items={roadmap.projects}
              />
              <RoadmapSection
                title="Potential Mentors"
                items={roadmap.mentors}
              />
              <RoadmapSection title="Relevant Clubs" items={roadmap.clubs} />
              <RoadmapSection
                title="Suggested Courses"
                items={roadmap.courses}
              />
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-600">
                Failed to generate roadmap. Please try again.
              </p>
            </div>
          )}
        </main>
      </div>
    </GradientBackground>
  );
};

export default RoadmapPage;
