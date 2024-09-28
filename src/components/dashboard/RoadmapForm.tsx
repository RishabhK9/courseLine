"use client";

import React, { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Images from '../../assets/images';
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from '../../app/fonts';


interface RoadmapFormProps {
  setShowRoadmapForm: (show: boolean) => void;
}

const RoadmapForm: React.FC<RoadmapFormProps> = ({ setShowRoadmapForm }) => {

    const [roadmapData, setRoadmapData] = useState({
      careerPath: "",
      targetCompanies: "",
      interests: "",
      skillLevel: "",
    });

    /** Handle input change in form */
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setRoadmapData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    /** Handle roadmap form submission */
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Here you would typically send the data to your backend
      console.log("Roadmap data submitted:", roadmapData);
      
      // For now, we'll just log it and show an alert
      alert("Roadmap creation initiated! Check the console for details.");
      setShowRoadmapForm(false); // Close form after submission
    };


    return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 mt-14">
        <div>
          <label htmlFor="careerPath" className="block text-gray-700 mb-2">
            What career path are you interested in?
          </label>
          <input
            type="text"
            id="careerPath"
            name="careerPath"
            value={roadmapData.careerPath}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
            placeholder="e.g., Software Engineering, AI Research, Data Science"
            required
          />
        </div>
        <div>
          <label
            htmlFor="targetCompanies" className="block text-gray-700 mb-2">
            Which companies are you targeting?
          </label>
          <input
            type="text"
            id="targetCompanies"
            name="targetCompanies"
            value={roadmapData.targetCompanies}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
            placeholder="e.g., Google, Meta, Netflix (comma-separated)"
            required
          />
        </div>
        <div>
          <label htmlFor="interests" className="block text-gray-700 mb-2">
            What are your interests or skills?
          </label>
          <textarea
            id="interests"
            name="interests"
            value={roadmapData.interests}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
            placeholder="e.g., AI, Machine Learning, Web Development"
            rows={3}
            required
          />
        </div>
        <div>
          <label htmlFor="skillLevel" className="block text-gray-700 mb-2">
            What is your current experience in this field?
          </label>
          <input
            id="skillLevel"
            name="skillLevel"
            value={roadmapData.skillLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
            placeholder="e.g., beginner, knowledgeable, experienced, pro"
            required
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-[#eadaa2] text-white px-6 py-3 rounded-full hover:bg-[#d8c88f] transition duration-300"
          >
            Generate Roadmap
          </button>

          {/* Exit Button */}
          <button
            type="button"
            onClick={() => setShowRoadmapForm(false)}
            className="text-gray-800 px-6 py-3 hover:text-red-400 transition duration-300">
            Exit
          </button>
        </div>
      </form>
    </>
  );
};

export default RoadmapForm;
