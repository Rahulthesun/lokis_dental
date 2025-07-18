import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines Tailwind CSS class names with support for conditional logic.
 * Prioritizes right-most values when merging conflicting classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
