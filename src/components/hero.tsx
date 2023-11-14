"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDownIcon, RocketIcon } from "@radix-ui/react-icons";
import debounce from "lodash/debounce";
import { useHover } from "@/lib/hover-context";
import { AnimatePresence, motion } from "framer-motion";


export default function Hero() {
  const [showArrowButton, setShowArrowButton] = useState(true);
  const { setHovered } = useHover();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
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
    hidden: { opacity: 0, y: '-10%' },
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
    hidden: { opacity: 0, y: '-10%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full ">
      <AnimatePresence>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center w-full h-full gap-6"
    >
      
       
     
      <motion.h1
        variants={itemVariants}
        className="text-center text-7xl max-w-5xl font-bold"
      >
        Software developer with a passion for design
      </motion.h1>
      <motion.h2
        variants={itemVariants}
        className="text-center text-2xl text-muted-foreground"
      >
        Trying to create cool stuff <br />
        since 1995.
      </motion.h2>
      <motion.div
      variants={itemVariants}
      >
      <Button
      size="lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-full gap-2"
      >
        <p>Get in touch</p>
        <RocketIcon className="w-4 h-4"/>
      </Button>

      </motion.div>
    </motion.div>
        {showArrowButton && (
          <motion.div
            className="flex w-full items-center justify-center mt-28"
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
              className="rounded-full animate-bounce"
            >
              <ArrowDownIcon className="w-5 h-5 mx-auto text-muted-foreground" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
