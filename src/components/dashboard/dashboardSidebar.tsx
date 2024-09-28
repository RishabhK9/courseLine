"use client";

import React, { useState, lazy, Suspense } from 'react';
import { format, getDaysInMonth, startOfMonth, addMonths, subMonths } from 'date-fns';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Images from '../../assets/images';
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from '../../app/fonts';

const DashboardSidebar = () => {

    /** State to store the current date (month/year) */
    const [currentDate, setCurrentDate] = useState(new Date());

    /** Get details for the current month */
    const monthName = format(currentDate, 'MMMM'); // Full month name
    const year = format(currentDate, 'yyyy'); // Year
    const daysInMonth = getDaysInMonth(currentDate); // Number of days in the current month
    const firstDayOfMonth = startOfMonth(currentDate); // Get the first day of the month
    const startDay = format(firstDayOfMonth, 'i'); // Day of the week as a number (1=Monday, 7=Sunday)

    /** Create an array of days to render in the calendar */
    const daysArray = Array.from({ length: daysInMonth }, (_, day) => day + 1);
    
    return (
    <>
        <div className="w-1/4 p-6 flex flex-col">
          {/* Sidebar Header */}
          <div className="flex justify-between mt-5 items-center mb-4">
            <h3 className="text-xl text-gray-800 font-bold">Tasks</h3>
          </div>

          {/* Calendar Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-700 mb-2">{monthName} {year}</p>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
              {/* Days of the week */}
              <span className="font-bold">S</span>
              <span className="font-bold">M</span>
              <span className="font-bold">T</span>
              <span className="font-bold">W</span>
              <span className="font-bold">T</span>
              <span className="font-bold">F</span>
              <span className="font-bold">S</span>
              {/* Empty slots for days before the 1st */}
              {Array.from({ length: Number(startDay) - 1 }).map((_, index) => (
                <span key={index}></span>
              ))}
              {/* Days of the month */}
              {daysArray.map((day) => (
                <span
                  key={day}
                  className={`p-2 ${
                    day === new Date().getDate() ? 'bg-[#EADAA2] text-white rounded-full' : 'text-gray-400'
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-[#EADAA2] rounded-full flex items-center justify-center">A</span>
                <p className="ml-4 font-medium text-gray-700">List item</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">100+</span>
                <input type="checkbox" className="form-checkbox text-[#EADAA2]" />
              </div>
            </div>

            {/* Repeat for additional tasks */}
          </div>
        </div>
    </>
  );
};

export default DashboardSidebar;
