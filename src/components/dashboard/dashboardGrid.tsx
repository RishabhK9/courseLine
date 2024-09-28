"use client";

import React, { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Images from '../../assets/images';
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from '../../app/fonts';

const DashboardGrid = () => {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            {/* Example Card */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                <span className="w-8 h-8 bg-[#EADAA2] rounded-full flex items-center justify-center">A</span>
                <div className="ml-4">
                    <p className="font-bold text-gray-700">Header</p>
                    <p className="text-sm text-gray-500">Subhead</p>
                </div>
                </div>
                <div className="text-gray-400">•••</div>
            </div>
            <div className="h-48 bg-gray-300 rounded-xl flex justify-center items-center">
                <div className="w-20 h-20 bg-gray-400"></div>
            </div>
            </div>

            {/* Repeat for additional cards */}
        </div>
    );
};

export default DashboardGrid;
