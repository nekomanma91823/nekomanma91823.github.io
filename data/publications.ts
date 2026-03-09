import { Award, BookOpen, LucideIcon } from "lucide-react";

export type PublicationType = "award" | "paper" | "conference";

export interface PublicationItem {
  id: string;
  type: PublicationType;
  year: number;
  month?: number; // Optional since some awards might only have a year
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
}

export const getPublicationIcon = (type: PublicationType): LucideIcon => {
  switch (type) {
    case "award":
      return Award;
    case "paper":
    case "conference":
      return BookOpen;
    default:
      return BookOpen;
  }
};

export const getPublicationTypeLabel = (type: PublicationType): string => {
  switch (type) {
    case "award":
      return "受賞";
    case "paper":
      return "論文 / 著書";
    case "conference":
      return "国際会議 (査読付)";
    default:
      return "発表";
  }
};

export const publicationsData: PublicationItem[] = [
  {
    id: "icicic-2025",
    type: "conference",
    year: 2025,
    month: 8,
    title: "The 19th International Conference on Innovative Computing, Information and Control (ICICIC2025)",
    link: "http://www.icicconference.org/icicic2025/",
    linkText: "公式サイト",
  },
  {
    id: "omu-biz-2024",
    type: "award",
    year: 2024,
    title: "大阪公立大学ビジネスコンテスト2024 irori賞",
  },
  {
    id: "pizza-2024",
    type: "award",
    year: 2024,
    title: "ピザの会2024 奨励賞",
    link: "https://w-pizza.com/contest-info/winner/",
    linkText: "詳細を見る",
  },
];
