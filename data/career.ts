export interface CareerItem {
  id: string;
  year: number;
  month: number;
  title: string;
  role?: string;
  description?: string;
  current?: boolean;
}

export type Locale = "ja" | "en";

export const careerDataByLocale: Record<Locale, CareerItem[]> = {
  ja: [
    {
      id: "cmiru-engineer",
      year: 2024,
      month: 10,
      title: "株式会社Cmiru",
      role: "エンジニア",
      current: true,
    },
    {
      id: "omu-grad",
      year: 2025,
      month: 4,
      title: "大阪公立大学 情報学研究科",
      role: "自然言語処理研究室 柳本研究室（修士1年）",
      current: true,
    },
    {
      id: "omu-undergrad",
      year: 2021,
      month: 4,
      title: "大阪公立大学 現代システム科学域",
      role: "知識情報システム学類",
      current: false,
    },
  ],
  en: [
    {
      id: "cmiru-engineer",
      year: 2024,
      month: 10,
      title: "Cmiru Inc.",
      role: "Engineer",
      current: true,
    },
    {
      id: "omu-grad",
      year: 2025,
      month: 4,
      title: "Graduate School of Informatics, Osaka Metropolitan University",
      role: "M1, Natural Language Processing Lab (Yanagimoto Lab)",
      current: true,
    },
    {
      id: "omu-undergrad",
      year: 2021,
      month: 4,
      title:
        "College of Sustainable System Sciences, Osaka Metropolitan University",
      role: "School of Knowledge and Information Systems",
      current: false,
    },
  ],
};
