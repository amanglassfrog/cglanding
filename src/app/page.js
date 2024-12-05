"use client";
import Image from "next/image";
import React from "react";
import Home from "@/components/Home";
import ResumeTemplates from "@/components/Resume";
import ResumeSection from "@/components/Resumesection";
import GeniesSection from "@/components/GeniesSection";
import Footer from "@/components/footer";

export default function P() {
  return (
    <>
      <Home />
      <ResumeTemplates />
      <ResumeSection />
      <GeniesSection />
      <Footer />
    </>
  );
}
