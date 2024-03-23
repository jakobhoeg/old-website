"use client";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GitHubLogoIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { useHover } from "@/lib/hover-context";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CardType {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAlt?: string;
  showcaseUrl?: string;
  skills?: string[];
  github?: string;
}

export default function MyProjects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMobileTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleMobileTouchMove = (e: React.TouchEvent) => {
    if (dragStart !== null && containerRef.current) {
      const delta = dragStart - e.touches[0].clientX;
      containerRef.current.scrollLeft += delta;
      setDragStart(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== null && containerRef.current) {
      const delta = dragStart - e.clientX;
      containerRef.current.scrollLeft += delta;
      setDragStart(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  const theme = useTheme();

  return (
    <section className="relative w-full h-full flex justify-center overflow-hidden ">
      <div className="flex flex-col w-full items-center  ">
        <div className="text-center w-full space-y-1 md:space-y-4  px-2">
          <h1 className="text-4xl md:text-6xl font-bold max-w-prose">
            Projects I&apos;ve worked on
          </h1>

          <p className="md:text-2xl prose text-zinc-400">
            Some of the projects I&apos;ve worked on, I am more proud of than
            others. These will be showcased here.
          </p>
          <div
            ref={containerRef}
            className="relative lg:pl-72 flex overflow-x-scroll sm:overflow-x-hidden snap-x py-5 snap-mandatory snap-always sm:snap-none "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMobileTouchStart}
            onTouchMove={handleMobileTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Card() {
  const { setHovered } = useHover();

  const handleMouseEnter: React.MouseEventHandler<HTMLButtonElement> = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cards: CardType[] = [
    {
      id: 1,
      title: "Proglio",
      description:
        "A full-stack collaborative task management platform coded in React with NextJS, MongoDB & TypeScript.",
      videoSrc:
        "https://utfs.io/f/5b16af86-9095-4aae-a7d1-8b1c5bb0a9b1-mew4t3.MP4",
      videoAlt: "Proglio",
      showcaseUrl: "https://www.proglio.app/",
      skills: ["/nextdotjs.svg", "/typescript.svg", "/mongodb.svg", "/tailwindcss.svg"],
    },
    {
      id: 2,
      title: "shadcn-chat",
      description:
        "Open source chat components for NextJS. Built on top of the very popular UI library, shadcn.",
      videoSrc:
        "https://utfs.io/f/3c7ba35d-d065-4e10-ac80-54bb7bd1f6bb-62d9he.MP4",
      videoAlt: "Moodle Lazy DL Bot",
      showcaseUrl: "https://shadcn-chat.vercel.app/",
      github: "https://github.com/jakobhoeg/shadcn-chat",
      skills: ["/nextdotjs.svg", "typescript.svg", "/tailwindcss.svg"],
    },
    {
      id: 3,
      title: "Web app for Ollama LLMs",
      description:
        "Open source web interface for Ollama. Run open-source large language models (LLMs) locally on your pc. The web interface is coded in NextJS with TypeScript.",
      videoSrc:
        "https://utfs.io/f/afb47c2a-6f2d-4b45-8e16-d9cd484b3221-grr6xm.MP4",
      videoAlt: "Web UI for Ollama LLMs",
      github: "https://github.com/jakobhoeg/nextjs-ollama-llm-ui",
      skills: ["/nextdotjs.svg", "typescript.svg", "/tailwindcss.svg"],
    },
    {
      id: 4,
      title: "Unity Game",
      description:
        "A 2D rougelike, bullet hell top-down game created in Unity Game Engine, coded in C# and designed by me. (Still a WIP).",
      videoSrc:
        "https://utfs.io/f/343d1d89-90b6-440c-93b9-863ad9e32d9e-56ywvu.mp4",
      videoAlt: "Unity Game",
      skills: ["/unity.svg", "/csharp.svg", "/aseprite.svg"],
    },
  ];


  return (
    <div className="flex gap-5 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="box flex flex-col items-center border rounded-lg p-8 w-11/12 md:w-auto flex-shrink-0 snap-center sm:snap-none"
        >
          <video
            autoPlay = {false}
            muted
            controls
            title="Video of project"
            loop
            playsInline
            preload="metadata"
            className="object-cover rounded-lg h-64 md:h-96 "
            src={card.videoSrc}
          ></video>
          <div className="text-left items-start pt-3 w-full ">
            <div className="flex items-center justify-between ">
              <p>{card.title}</p>
              <div className="flex items-center gap-5">
              <div >
                  {card.skills && (
                    <div className="flex gap-2">
                      {card.skills.map((skill) => (
                        <Image alt={skill} key={skill} width="24" height="24" src={skill} className="w-4 h-4 md:w-5 md:h-5 dark:invert opacity-40" />
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-x-2">
                {card.showcaseUrl && (
                  <Button
                  key={card.showcaseUrl}
                  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="rounded-full"
                    variant="outline"
                    onClick={() => window.open(card.showcaseUrl, "_blank")}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Button>
                )}
                {card.github && (
                  <Button
                  key={card.github}
                  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="rounded-full relative"
                    variant="outline"
                    onClick={() => window.open(card.github, "_blank")}
                  >
                    <GitHubLogoIcon className="w-4 h-4" />
                    <span className="sr-only">Github link</span>
                  </Button>
                )}
                </div>
              </div>
            </div>
            <p className="pt-2 md:w-96 lg:w-[450px] text-muted-foreground">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
