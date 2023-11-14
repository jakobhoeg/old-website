"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const menuList = [
    { name: "Home", href: "/"},
  { name: "Projects", href: "/" },
    { name: "Blog", href: "/" },
  { name: "About", href: "/" },
];

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
      
        if (currentScrollY >= 120 && !isScrolling) {
          setIsScrolling(true);
        } else if (currentScrollY < 80 && isScrolling) {
          setIsScrolling(false);
        }
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
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="text-sm z-10 flex justify-between items-center w-full px-28 py-6 top-4">
      <Link href="/">
      <Image
        src="/logo.svg"
        alt="logo"
        width={38}
        height={38}
        className="dark:invert"
      />
      </Link>
      <ul className="flex items-center/50 items-center space-x-4 mx-auto">
        <Button size="sm" className="rounded-full">
          Get in touch
        </Button>
        {menuList.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ModeToggle />
    </nav>
  );
}

interface NavbarScrollProps {
  isScrolling: boolean;
}

function NavbarScroll({ isScrolling }: NavbarScrollProps) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="text-sm bg-muted/30 backdrop-blur fixed z-10 flex justify-between items-center px-4 py-2 rounded-full ts-bg left-1/2 top-10"
    >
      <ul className="flex items-center/50 items-center space-x-4">
      <Button size="sm" className="rounded-full">
          Get in touch
        </Button>
        {menuList.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
              <ModeToggle />

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