"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useHover } from "@/lib/hover-context";
import { GithubBtn } from "./github_btn";

const menuList = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "", section: "projects" },
  { name: "Blog", href: "/" },
  { name: "About", href: "/" },
];

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 40;
    setIsScrolling(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <>
      <AnimatePresence>
        <NavbarFixed />
        {isScrolling && <NavbarScroll isScrolling={isScrolling} />}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <nav className="absolute text-sm z-10  flex justify-between items-center w-full px-8 py-5 md:px-28 md:py-6 top-4">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="logo"
          width={38}
          height={38}
          className="dark:invert cursor-hover "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
      <ul className="flex items-center/50 items-center space-x-4 mx-auto">
        <Button
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          size="sm"
          className="cursor-hover rounded-full hidden md:flex"
        >
          Get in touch
        </Button>
        {menuList.map((item) => (
          <li key={item.name} className="hidden md:flex">
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-hover"
              href={item.href}
              onClick={() =>
                document.getElementById(item.section!)?.scrollIntoView()
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <GithubBtn />
      </div>
    </nav>
  );
}

interface NavbarScrollProps {
  isScrolling: boolean;
}

function NavbarScroll({ isScrolling }: NavbarScrollProps) {
  const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="text-xs md:text-sm bg-muted/30 backdrop-blur fixed z-10 flex justify-between items-center px-4 py-2 rounded-full ts-bg left-1/2 top-10"
    >
      <ul className="flex items-center/50 items-center space-x-4">
        <Button
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          size="sm"
          className="rounded-full"
        >
          Get in touch
        </Button>
        {menuList.map((item) => (
          <li key={item.name}>
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href={item.href}
              onClick={() =>
                document.getElementById(item.section!)?.scrollIntoView()
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <GithubBtn />
        </div>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
