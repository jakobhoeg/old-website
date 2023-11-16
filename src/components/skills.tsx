"use client";

import { useHover } from "@/lib/hover-context";
import Image from "next/image";
import React from "react";
import SkillsIcon from "./skills-icon";

export default function Skills() {
  return (
    <div className=" w-full ">
      <div className="flex flex-col items-center space-y-8">
        <p className="text-lg text-zinc-400">
          Technologies I enjoy working with:
        </p>
        <div
          id="light-theme"
          className="flex flex-wrap justify-center md:justify-between gap-10 lg:gap-20 px-5  items-center dark:hidden"
        >
          <SkillsIcon imageSrc="/dotnet-color.svg" />
          <SkillsIcon imageSrc="/react-color.svg" />
          <SkillsIcon imageSrc="/typescript-color.svg" />
          <SkillsIcon imageSrc="/javascript-color.svg" />
          <SkillsIcon imageSrc="/css3-color.svg" />
          <SkillsIcon imageSrc="/html5-color.svg" />
          <SkillsIcon imageSrc="/docker-color.svg" />
        </div>
        <div
          id="dark-theme"
          className="dark:flex flex-wrap justify-center md:justify-between gap-10 lg:gap-20 px-5  items-center hidden"
        >
          <SkillsIcon imageSrc="/dotnet.svg" />
          <SkillsIcon imageSrc="/react.svg" />
          <SkillsIcon imageSrc="/typescript.svg" />
          <SkillsIcon imageSrc="/javascript.svg" />
          <SkillsIcon imageSrc="/css3.svg" />
          <SkillsIcon imageSrc="/html5.svg" />
          <SkillsIcon imageSrc="/docker.svg" />
        </div>
      </div>
    </div>
  );
}
