import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        <h1 className="text-center text-7xl max-w-5xl font-bold">
          Software developer with a passion for design
        </h1>
        <h2 className="text-center text-2xl text-muted-foreground">
          Trying to create cool stuff <br />
          since 1995.
        </h2>
        <Button
        className="rounded-full"
        >
            Get in touch
        </Button>
      </div>
    </section>
  );
}