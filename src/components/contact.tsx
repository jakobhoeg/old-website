"use client";

import { useHover } from "@/lib/hover-context";
import {
  SiGithub,
  SiLinkedin,
  SiMaildotru,
} from "@icons-pack/react-simple-icons";
import React from "react";

export default function Contact() {
  const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-full h-full justify-center flex">
      <div className="text-center items-center w-full space-y-1 md:space-y-4  px-2">
        <h1 className="text-4xl md:text-6xl font-bold max-w-prose">
          Get in touch with me
        </h1>
        <div className="px-2">
          <p className="md:text-2xl prose text-zinc-400">
            If you want to contact me you can send me an{" "}
            <a href="mailto:jakobfsd@hotmail.dk">
              <strong
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="underline"
              >
                email
              </strong>
              , or get in touch with me here:

            </a>
          </p>
          
        </div>
        <div className="flex pt-2 gap-5 justify-center ">
          <SiGithub
            onClick={() => window.open("https://github.com/jakobhoeg")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-6 h-6 text-muted-foreground"
          />
          <SiLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/jakob-hoeg-moerk/")
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" w-6 h-6 text-muted-foreground"
          />
            <a href="mailto:jakobfsd@hotmail.dk">
            <SiMaildotru
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" w-6 h-6 text-muted-foreground"
            />
            </a>
        </div>
      </div>
    </div>
  );
}
