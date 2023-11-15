import { useHover } from '@/lib/hover-context';
import { motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'

interface Props {
    imageSrc: string;
    }


export default function SkillsIcon({ imageSrc }: Props) {
    const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
    whileHover={{ scale: 1.3, rotate: 4, transition: { duration: 0.2 } }}
    >

    <Image
    onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt={imageSrc}
            src={imageSrc}
            width={60}
            height={60}
            className="shake shake:hover dark:invert"
    >
    </Image>
    </motion.div>
    )
}
