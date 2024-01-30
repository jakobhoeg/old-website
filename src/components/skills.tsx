"use client";

import { useHover } from "@/lib/hover-context";
import Image from "next/image";
import React, { useEffect } from "react";
import SkillsIcon from "./skills-icon";
import { motion, useMotionValue } from "framer-motion";

export default function Skills() {
  let mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = React.useState(false);


  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);



  return (
    <motion.div className="w-full relative">
      <motion.div className="flex flex-col items-center space-y-8">
        <motion.div
          id="light-theme"
          className="dark:hidden mx-auto flex flex-wrap justify-center items-end gap-x-12 lg:gap-x-20  gap-y-4 rounded-2xl px-4 pb-3"
        >
          <SkillsIcon mouseX={mouseX} imageSrc="/dotnet-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/react-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/typescript-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/javascript-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/css3-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/html5-color.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/docker-color.svg" />
        </motion.div>
        <motion.div
          id="dark-theme"
          className="hidden mx-auto dark:flex flex-wrap justify-center items-end gap-x-12 lg:gap-x-28 gap-y-4 rounded-2xl px-4 pb-3"
        >
          <SkillsIcon mouseX={mouseX} imageSrc="/dotnet.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/react.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/typescript.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/css3.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/tailwindcss.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/jenkins.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/docker.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/nextdotjs.svg" />
          <SkillsIcon mouseX={mouseX} imageSrc="/amazonaws.svg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
