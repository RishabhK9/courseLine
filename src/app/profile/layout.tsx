"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Sidebar from '@/components/dashboard/sidebar';
import Image from "next/image";
import Images from '../../assets/images';
import Link from 'next/link';

import { redirect } from 'next/navigation'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [selectedTab, setSelectedTab] = useState('profile');

  return (
    <>
    </>
  );
}
