import React from 'react';
import { BackgroundLines } from '@/components/ui/background-lines';

export function Hero() {
  return (
    <BackgroundLines className="m-0 flex w-full flex-col items-center justify-center px-4 py-0">
      <h2 className="relative z-20 bg-gradient-to-b from-[#F5AF19] to-[#F12711] bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl">
        Get Free UI Resources <br />
        with MBZ Chroma.
      </h2>
      <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
        Get the best UI Resources in one place for developers.You can request a
        resource and it added in MBZ Chroma.
      </p>
    </BackgroundLines>
  );
}
