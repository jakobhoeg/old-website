import Cursor from "@/components/cursor";
import Hero from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <video 
      autoPlay
      muted
      loop
      className="hidden dark:inline-block absolute top-0 left-0 w-full h-full opacity-10 repeat-0 object-cover z-0"
      src="https://utfs.io/f/954c88aa-b3a0-4f34-8abf-f28a0e8b3bac-pqmaey.mp4"></video>
      <Cursor />
      <Navbar />
      <div className="scrollable-content -mt-20 flex flex-col justify-center items-center h-screen">
        <Hero />
      </div>
      <div className="scrollable-content flex flex-col justify-center items-center h-screen">
        DAMNS
      </div>
    </main>
  );
}
