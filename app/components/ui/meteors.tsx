import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <div className="absolute inset-0 overflow-hidden">
    {meteors.map((el, idx) => (
      <span
        key={"meteor" + idx}
        className={cn(
          "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
          "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
          className
        )}
        style={{
          top: Math.floor(Math.random() * 100) + "%", // Random vertical position between 0% and 100%
          left: Math.floor(Math.random() * 100) + "%", // Random horizontal position between 0% and 100%
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s", // Random delay for each meteor
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s", // Random speed
        }}
      ></span>
    ))}
  </div>
  );
};
