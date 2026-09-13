import { PropertyType, ThemeColor } from "../consts";

export interface Speaker {
  name: string;
  role: string;
  organization?: string;
  themeColor: (typeof ThemeColor)[keyof typeof ThemeColor];
  propertyType: (typeof PropertyType)[keyof typeof PropertyType];
  photoUrl?: string;
  track?: string;
}

// The 2026 track deck contains content directions, not an approved speaker lineup.
// Keep this empty until the organising team supplies confirmed speaker records.
export const SPEAKERS: Speaker[] = [];
