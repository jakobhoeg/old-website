import React from "react";

export default function MyProjects() {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="flex flex-col items-center px-5">
        <div className="text-center  space-y-1 md:space-y-4">
          <p className="text-4xl md:text-6xl font-bold max-w-prose">Projects I've worked on</p>
          <p className="md:text-2xl prose text-zinc-400">
            Some of the projects I've worked on, I am more proud of than others.
            These will be showcased here.
          </p>
          
        </div>
      </div>
    </section>
  );
}
