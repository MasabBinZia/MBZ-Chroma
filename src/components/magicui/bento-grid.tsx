import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  className: string;
  background: string;
  Icon: any;
  description: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div className="absolute inset-0 z-0">
      <img
        src={background}
        className="h-full w-full object-cover"
        alt={`${name} background`}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className="p-6">
        <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      </div>
      <div className="flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="max-w-lg text-neutral-200 mb-4">{description}</p>
      </div>
    </div>
  </div>
);
export { BentoCard, BentoGrid };
