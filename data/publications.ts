import { Award, BookOpen, LucideIcon } from "lucide-react";

export type PublicationType = "award" | "paper" | "journal" | "conference";

export interface PublicationItem {
  id: string;
  type: PublicationType;
  year: number;
  month?: number; // Optional since some awards might only have a year
  title: string;
  // 論文のタイトル（国際会議のように、title が会議名のとき）
  paperTitle?: string;
  // 著者（論文の表記のまま。selfAuthorName は太字になる）
  authors?: string[];
  // 掲載誌・巻号・ページ
  venue?: string;
  description?: string;
  link?: string;
  linkText?: string;
}

export type Locale = "ja" | "en";

export const selfAuthorName = "Takuma Namisaki";

export const getPublicationIcon = (type: PublicationType): LucideIcon => {
  switch (type) {
    case "award":
      return Award;
    case "paper":
    case "journal":
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
      case "journal":
        return "Journal Paper (Peer-Reviewed)";
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
    case "journal":
      return "論文誌 (査読付)";
    case "conference":
      return "国際会議 (査読付)";
    default:
      return "発表";
  }
};

export const publicationsDataByLocale: Record<Locale, PublicationItem[]> = {
  ja: [
    {
      id: "icic-el-2026",
      type: "journal",
      year: 2026,
      month: 10,
      title: "Retrieval Augmented Prompt Based on Few-Shot Reasoning",
      authors: ["Takuma Namisaki", "Hidekazu Yanagimoto", "Kiyota Hashimoto"],
      venue: "ICIC Express Letters, Vol.20, No.10, pp.1103–1109",
      link: "https://doi.org/10.24507/icicel.20.10.1103",
      linkText: "DOI: 10.24507/icicel.20.10.1103",
    },
    {
      id: "icicic-2025",
      type: "conference",
      year: 2025,
      month: 8,
      title:
        "The 19th International Conference on Innovative Computing, Information and Control (ICICIC2025)",
      paperTitle: "Retrieval Augmented Prompt Based on Few-Shot Reasoning",
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
      id: "icic-el-2026",
      type: "journal",
      year: 2026,
      month: 10,
      title: "Retrieval Augmented Prompt Based on Few-Shot Reasoning",
      authors: ["Takuma Namisaki", "Hidekazu Yanagimoto", "Kiyota Hashimoto"],
      venue: "ICIC Express Letters, Vol.20, No.10, pp.1103–1109",
      link: "https://doi.org/10.24507/icicel.20.10.1103",
      linkText: "DOI: 10.24507/icicel.20.10.1103",
    },
    {
      id: "icicic-2025",
      type: "conference",
      year: 2025,
      month: 8,
      title:
        "The 19th International Conference on Innovative Computing, Information and Control (ICICIC 2025)",
      paperTitle: "Retrieval Augmented Prompt Based on Few-Shot Reasoning",
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
