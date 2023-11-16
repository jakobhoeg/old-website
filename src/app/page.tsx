import Cursor from "@/components/cursor";
import Hero from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <Cursor />
      <Navbar />
      <div className="scrollable-content -mt-20 flex flex-col justify-center items-center h-screen">
        <Hero />
      </div>
      <div className="scrollable-content flex flex-col items-center h-screen">
        <Skills />
        
      </div>
    </main>
  );
}
