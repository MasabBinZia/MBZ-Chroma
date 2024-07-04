import { Button } from "../ui/button";
import { BorderBeam } from "../magicui/border-beam";
import WordRotate from "../magicui/word-rotate";
import { Star } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center leading-6 mt-[3rem]">
      <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center max-w-[1120px] text-white">
        Stay Consistent with <br /> Your Prayers.
      </h1>
      <p className="mx-auto flex items-center text-gray-500 text-4xl text-center mt-2 dark:text-gray-400">
        Track your
        <WordRotate
          className="text-4xl text-primary font-bold px-2"
          words={["Fajr.", "Dhuhr.", "Asr.", "Maghrib.", "Isha."]}
        />
        prayers
      </p>
      <div className="flex justify-center items-center gap-3">
        <a href="/dashboard" className="mt-5">
          <Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
            Get Started
          </Button>
        </a>
        <a
          href="https://discord.gg/HUcHdrrDgY"
          target="_blank"
          className="mt-5"
        >
          <Button variant="outline" className="flex gap-1 ">
            Star on Github
            <Star className="w-4 h-4" />
          </Button>
        </a>
      </div>
      <div>
        <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
          <div className="relative rounded-xl">
            <img
              src="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
              alt="Hero Image"
              className="dark:block w-[1200px] rounded-[inherit] border object-contain shadow-lg "
            />
            <BorderBeam size={500} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
