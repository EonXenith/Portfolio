"use client";
import { createContext, useContext } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const MotionContext = createContext(false);

export function useMotionSafe() {
  return !useContext(MotionContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <MotionContext.Provider value={reduced}>{children}</MotionContext.Provider>
  );
}
