"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

export const Meteors = ({
  number = 15, // Reduced default number
  minDelay = 0.5, // Increased min delay
  maxDelay = 1.5, // Increased max delay
  minDuration = 3, // Increased min duration
  maxDuration = 8, // Decreased max duration
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--meteor-angle": "-45deg", // Fixed angle
      top: `${Math.random() * -20 - 5}%`, // Start further off-screen
      left: `${Math.random() * 120 - 10}%`, // Wider horizontal spread, allowing some to start off-screen
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute w-0.5 h-0.5 rotate-[var(--meteor-angle)] animate-meteor rounded-full bg-slate-400 shadow-[0_0_0_1px_#ffffff10]", // Simplified color and removed meteor-glow
            className,
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[40px] -translate-y-1/2 bg-gradient-to-r from-slate-400 to-transparent" /> {/* Simplified color and removed meteor-glow */}
        </span>
      ))}
    </>
  );
};
