"use client";
import React, { ReactElement, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { SiAseprite, SiCsharp, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiUnity } from "@icons-pack/react-simple-icons";
import { useHover } from "@/lib/hover-context";

interface CardType {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAlt?: string;
  showcaseUrl?: string;
  skills?: ReactElement[];
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

  return (
    <section className=" w-full h-full flex justify-center overflow-hidden ">
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
            className="relative lg:pl-72  flex overflow-x-hidden py-5"
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

  const handleMouseEnter = () => {
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
        "A full-stack collaborative task management tool created with NextJS, MongoDB & TypeScript.",
      videoSrc:
        "https://utfs.io/f/5b16af86-9095-4aae-a7d1-8b1c5bb0a9b1-mew4t3.MP4",
      videoAlt: "Proglio",
      showcaseUrl: "https://www.proglio.app/",
      skills: [<SiNextdotjs className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />, <SiTypescript  className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />, <SiMongodb  className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />, <SiTailwindcss  className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground"/>],
    },
    {
      id: 2,
      title: "Unity Game",
      description:
        "A 2D rougelike, bullet hell top-down game created in Unity Game Engine, coded in C# and designed by me.",
      videoSrc:
        "https://utfs.io/f/343d1d89-90b6-440c-93b9-863ad9e32d9e-56ywvu.mp4",
      videoAlt: "Unity Game",
      skills: [<SiUnity className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground"/>, <SiCsharp className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />, <SiAseprite className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground"/>],
    },
    {
      id: 3,
      title: "Unity Game",
      description:
        "A 2D rougelike, bullet hell top-down game created in Unity Game Engine, coded in C# and designed by me.",
      videoSrc:
        "https://utfs.io/f/343d1d89-90b6-440c-93b9-863ad9e32d9e-56ywvu.mp4",
      videoAlt: "Unity Game",
    },
  ];

  return (
    <div className="flex gap-5 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className=" flex flex-col items-center border rounded-lg p-8 w-full md:w-auto flex-shrink-0 scroll-snap-align-start"
        >
          <video
            autoPlay
            muted
            controls
            title="Video of project"
            loop
            playsInline
            className="object-cover rounded-lg h-64 md:h-96 "
            src={card.videoSrc}
          ></video>
          <div className="text-left items-start pt-3 w-full">
            <div className="flex items-center justify-between">
              <p>{card.title}</p>
              <div className="flex items-center gap-5">
                <div >
                  {card.skills && (
                   <div className="flex gap-2" key={card.id}>
                   {card.skills.map((skill, index) => (
                     <div key={index}>{skill}</div>
                     
                   ))}
                 </div>
                  )}
                </div>
                {card.showcaseUrl && (
                  <Button
                  key={card.id}
                  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="rounded-full"
                    variant="outline"
                    onClick={() => window.open(card.showcaseUrl, "_blank")}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
            <p className="pt-2 lg:w-96 text-muted-foreground">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
