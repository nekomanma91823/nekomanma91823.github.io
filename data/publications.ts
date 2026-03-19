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

export type Locale = "ja" | "en";

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

export const getPublicationTypeLabel = (
  type: PublicationType,
  locale: Locale = "ja",
): string => {
  if (locale === "en") {
    switch (type) {
      case "award":
        return "Award";
      case "paper":
        return "Paper / Book";
      case "conference":
        return "International Conference (Peer-Reviewed)";
      default:
        return "Publication";
    }
  }

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

export const publicationsDataByLocale: Record<Locale, PublicationItem[]> = {
  ja: [
    {
      id: "icicic-2025",
      type: "conference",
      year: 2025,
      month: 8,
      title:
        "The 19th International Conference on Innovative Computing, Information and Control (ICICIC2025)",
      link: "http://www.icicconference.org/icicic2025/",
      linkText: "公式サイト",
    },
    {
      id: "omu-biz-2024",
      type: "award",
      year: 2024,
      link: "https://www.omu.ac.jp/las/jinzai/info/report/entry-66407.html",
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
  ],
  en: [
    {
      id: "icicic-2025",
      type: "conference",
      year: 2025,
      month: 8,
      title:
        "The 19th International Conference on Innovative Computing, Information and Control (ICICIC 2025)",
      link: "http://www.icicconference.org/icicic2025/",
      linkText: "Official Site",
    },
    {
      id: "omu-biz-2024",
      type: "award",
      year: 2024,
      link: "https://www.omu.ac.jp/las/jinzai/info/report/entry-66407.html",
      title: "Osaka Metropolitan University Business Contest 2024, irori Award",
    },
    {
      id: "pizza-2024",
      type: "award",
      year: 2024,
      title: "Pizza no Kai 2024, Encouragement Award",
      link: "https://w-pizza.com/contest-info/winner/",
      linkText: "View Details",
    },
  ],
};
