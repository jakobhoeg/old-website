"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDownIcon, RocketIcon } from "@radix-ui/react-icons";
import debounce from "lodash/debounce";
import { useHover } from "@/lib/hover-context";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Image from "next/image";
import ButtonRotatingBackgroundGradient from "./ui/button-rotating-bg-gradient";

export default function Hero() {
  const [showArrowButton, setShowArrowButton] = useState(true);
  const { setHovered } = useHover();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const spring = {
    stiffness: 150,

    damping: 15,

    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),

    y: useSpring(0, spring),
  };

  const { x, y } = mousePosition;

  const mouseMove = (e: MouseEvent) => {
    if (!isMobile) {
    const { clientX, clientY } = e;

    const targetX = clientX - (window.innerWidth / 2) * -0.15;

    const targetY = clientY - (window.innerWidth / 2) * 0.2;

    mousePosition.x.set(targetX);

    mousePosition.y.set(targetY);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
    setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
    setHovered(false);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollThreshold = 20;
      setShowArrowButton(window.scrollY < scrollThreshold);
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: "-10%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 1, // Change the duration to your desired value
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: "-10%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full overflow-hidden  ">
      <div className="absolute hidden dark:sm:flex top-0 z-[-2] h-screen w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.20),rgba(255,255,255,0))]" ></div>
      <div className="absolute hidden dark:hidden sm:flex top-0 z-[-2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,90,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <AnimatePresence>
      {isHovered && (
          <motion.div
            className="vignette"
            key="vignette"
            style={{ x, y }}
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            exit={{
              scale: 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div className="">
              {/* <p className="absolute top-0 z-50">this is me</p> */}
              <Image
                src="/avatar.jpg"
                alt="image"
                fill
                className="pointer-events-none"
              />
            </div>
          </motion.div>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen gap-6"
        >

          <motion.h1
            variants={itemVariants}
            onMouseEnter={() => {
              if (!isMobile) {
              handleMouseEnter();
              window.addEventListener("mousemove", mouseMove);
              setIsHovered(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
              handleMouseLeave();
              window.removeEventListener("mousemove", mouseMove);
              setIsHovered(false);
              }
            }}
            className=" text-center text-5xl lg:text-7xl max-w-5xl prose font-bold"
          >
            Software <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">developer</span> with a <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">passion</span> for design
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-center text-lg md:text-2xl text-muted-foreground"
          >
            Trying to create cool stuff since 1995*
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="rounded-full gap-2 lightbg-btn dark:hidden"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              <p>Get in touch</p>
              <RocketIcon className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="rounded-full gap-2 hidden dark:flex darkbg-btn"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              <p>Get in touch</p>
              <RocketIcon className="w-4 h-4" />
            </Button>
            {/* <ButtonRotatingBackgroundGradient
            text="Get in touch"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView()
            }
            icon={<RocketIcon />}
            >
              
            </ButtonRotatingBackgroundGradient> */}
          </motion.div>
          {showArrowButton && (
            <motion.div
              className="fixed bottom-28 flex w-full  items-center justify-center "
              variants={itemVariants}
              key="arrow-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                size="icon"
                variant="ghost"
                className=" rounded-full animate-bounce"
              >
                <ArrowDownIcon className="w-5 h-5 mx-auto text-muted-foreground" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
