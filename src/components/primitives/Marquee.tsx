"use client";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-track]:paused",
        className
      )}
    >
      <div
        className="marquee-track flex shrink-0 animate-marquee gap-4"
        style={{
          ["--marquee-duration" as string]: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
