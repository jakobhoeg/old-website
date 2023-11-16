import { useHover } from "@/lib/hover-context";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

interface Props {
  imageSrc: string;
  mouseX: MotionValue;
}

export default function SkillsIcon({ imageSrc, mouseX }: Props) {
  const { setHovered } = useHover();
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-140, 0, 140], [50, 100, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 140, damping: 12 });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex flex-wrap flex-shrink-0 "
      whileHover={{ scale: 1.3, rotate: -4, transition: { duration: 0.2 } }}
    >
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt={imageSrc}
        src={imageSrc}
        width={60}
        height={60}
        className="shake shake:hover dark:invert w-16 h-16 "
      ></Image>
    </motion.div>
  );
}
