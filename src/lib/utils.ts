import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const removeItemAtIndex = (
  array: unknown[],
  indexToRemove: number,
  allowEmpty: boolean = true,
) => {
  const copy = [...array];

  if (indexToRemove >= 0 && indexToRemove < copy.length) {
    copy.splice(indexToRemove, 1);
  }

  if (!allowEmpty && copy.length === 0) {
    return array;
  }

  return copy;
};
