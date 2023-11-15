import { useHover } from '@/lib/hover-context';
import Image from 'next/image'
import React from 'react'

interface Props {
    imageSrc: string;
    className?: React.ReactNode;
    }


export default function SkillsIcon({ imageSrc, className }: Props) {
    const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
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
    )
}
