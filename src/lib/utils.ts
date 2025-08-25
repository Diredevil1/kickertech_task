import type { Scores } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sum = (scores: Scores): number => {
  return scores.wins * 3 + scores.draws * 1 + scores.losses * 0;
};
