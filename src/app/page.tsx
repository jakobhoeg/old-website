import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className=" w-full items-center ">
        <Navbar />
        <div className="flex flex-col py-28 items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-40">
            <Image
              src="/logo.svg"
              alt="logo"
              width={256}
              height={256}
              className="dark:invert"
            />
            <h1 className="text-5xl dark:text-white">Jakob Hoeg</h1>
            <h2 className="text-2xl dark:text-white">Portfolio</h2>
          </div>


          <div className="flex flex-col items-center justify-center space-y-40">
            <Image
              src="/logo.svg"
              alt="logo"
              width={256}
              height={256}
              className="dark:invert"
            />
            <h1 className="text-5xl dark:text-white">Jakob Hoeg</h1>
            <h2 className="text-2xl dark:text-white">Portfolio</h2>
          </div>


          <div className="flex flex-col items-center justify-center space-y-40">
            <Image
              src="/logo.svg"
              alt="logo"
              width={256}
              height={256}
              className="dark:invert"
            />
            <h1 className="text-5xl dark:text-white">Jakob Hoeg</h1>
            <h2 className="text-2xl dark:text-white">Portfolio</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
