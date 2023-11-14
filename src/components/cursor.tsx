"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Console } from "console";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0,
      });
    };

    const onMouseEnterLink = (e: MouseEvent) => {
      const link = e.target as HTMLAnchorElement;
        gsap.to(cursor, {
          scale: 4,
        });
      
    };

    const onMouseLeaveLink = (e: MouseEvent) => {
      gsap.to(cursor, {
        scale: 1,
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const onMouseEnterButton = (e: MouseEvent) => {
        const button = e.target as HTMLButtonElement;
        gsap.to(cursor, {
            scale: 4,
        });
       
    }

    const onMouseLeaveButton = (e: MouseEvent) => {
        gsap.to(cursor, {
            scale: 1,
        });
        }

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterButton);
        button.addEventListener("mouseleave", onMouseLeaveButton);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
        buttons.forEach((button) => {
            button.removeEventListener("mouseenter", onMouseEnterButton);
            button.removeEventListener("mouseleave", onMouseLeaveButton);
        });
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">GG</span>
    </div>
  );
}
