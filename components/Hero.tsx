import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-0 m-0">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-[#F5AF19] to-[#F12711] text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Get Free UI Resources <br />
        with MBZ Chroma.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best UI Resources in one place for developers.You can request a
        resource and it added in MBZ Chroma.
      </p>
    </BackgroundLines>
  );
}
