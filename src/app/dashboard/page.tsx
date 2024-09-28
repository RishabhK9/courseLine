"use client";

import React, { useState } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const RoadmapForm = dynamic(() => import('@/components/dashboard/RoadmapForm'), { ssr: false });
  const DashboardSidebar = dynamic(() => import('@/components/dashboard/dashboardSidebar'), { ssr: false });
  const DashboardGrid = dynamic(() => import('@/components/dashboard/dashboardGrid'), { ssr: false });

  /** States for handling the roadmap form and pages */
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);

  /** Redirect to landing page on signout */
  const handleSignout = () => {
    router.push('/'); /** Replace with the landing page route */
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col ${plus_jakarta_sans_regular}`}>
      {/* Header Section */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <Link
          href="/dashboard"
          className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300">
          honeycomb.
        </Link>
        <button onClick={handleSignout} className="text-gray-600 hover:text-gray-800">Signout</button>
      </nav>

      {/* Main Dashboard Section */}
      <div className="flex flex-row w-full h-full flex-grow">
        {/* Main Content (Dashboard and Cards) */}
        <div className="w-3/4 p-8 border-r pt-5 border-gray-300"> {/* Vertical Divider Here */}
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-[#0d3362]">Dashboard</h2>
            <button
              onClick={() => setShowRoadmapForm(true)}
              className="bg-[#EADAA2] text-gray-800 px-4 py-2 rounded-full hover:bg-[#d1b074] transition duration-300"
            >
              Generate New Roadmap
            </button>
          </div>

          {!showRoadmapForm ? (
            //Dashboard card views
            <DashboardGrid/>
            
          ) : (

            //New Roadmap Form
            <RoadmapForm setShowRoadmapForm={setShowRoadmapForm}/>
          )}
        </div>

        {/* Sidebar Right (Tasks and Calendar) */}
        <DashboardSidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
