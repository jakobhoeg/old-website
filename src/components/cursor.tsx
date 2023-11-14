"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useHover } from "@/lib/hover-context";

export default function Cursor() {
  const { isHovered } = useHover();

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    if (!cursor) {
      console.error("Cursor element not found.");
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0,
      });
    };

    const scale = isHovered ? 4 : 1;

    gsap.to(cursor, {
      scale,
      duration: 0.3,
      ease: "power2.out",
    });

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isHovered]);

  return (
    <div id="custom-cursor" className="custom-cursor hidden">
    </div>
  );
}
