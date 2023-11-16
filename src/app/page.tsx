import Cursor from "@/components/cursor";
import Hero from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import MyProjects from "@/components/my-projects";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <Cursor />
      <div className="scrollable-content -mt-10 md:mt-0 flex flex-col justify-center items-center h-screen">
      <Navbar />
        <Hero />
      </div>
      <div className="h-[45vh] flex flex-col items-center ">
        <Skills />
      </div>
      <div className="scrollable-content h-screen ">
        <MyProjects />
      </div>
    </main>
  );
}
