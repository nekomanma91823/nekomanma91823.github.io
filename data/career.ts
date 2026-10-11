export interface CareerItem {
  id: string;
  year: number;
  month: number;
  // 終わった活動の終了年月（current のものには付けない）
  end?: { year: number; month: number };
  title: string;
  role?: string;
  description?: string;
  current?: boolean;
}

export type Locale = "ja" | "en";

// 新しい順に並べる
export const careerDataByLocale: Record<Locale, CareerItem[]> = {
  ja: [
    {
      id: "omu-grad",
      year: 2026,
      month: 4,
      title: "大阪公立大学 情報学研究科",
      role: "自然言語処理研究室 柳本研究室（修士1年）",
      current: true,
    },
    {
      id: "cmiru-engineer",
      year: 2024,
      month: 12,
      title: "株式会社Cmiru（シーみる）",
      role: "共同創業者・エンジニア",
      current: true,
    },
    {
      id: "prep-school",
      year: 2024,
      month: 8,
      title: "大手予備校 過去問データ整備チーム",
      role: "教材制作スタッフ（アルバイト）。2026年1月からチームの全体統括",
      current: true,
    },
    {
      id: "school-festival",
      year: 2022,
      month: 4,
      end: { year: 2024, month: 6 },
      title: "大阪公立大学 学園祭実行委員会",
      role: "広報部。ポスター・フライヤー・グッズを制作し、コロナ禍で縮小した配布先を広げた",
      current: false,
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
      id: "omu-grad",
      year: 2026,
      month: 4,
      title: "Graduate School of Informatics, Osaka Metropolitan University",
      role: "M1, Natural Language Processing Lab (Yanagimoto Lab)",
      current: true,
    },
    {
      id: "cmiru-engineer",
      year: 2024,
      month: 12,
      title: "Cmiru Inc.",
      role: "Co-founder & Engineer",
      current: true,
    },
    {
      id: "prep-school",
      year: 2024,
      month: 8,
      title: "Past-Exam Data Team, Major Cram School",
      role: "Teaching materials staff (part-time). Leading the team since Jan 2026",
      current: true,
    },
    {
      id: "school-festival",
      year: 2022,
      month: 4,
      end: { year: 2024, month: 6 },
      title: "University Festival Committee, Osaka Metropolitan University",
      role: "PR team. Made posters, flyers, and merchandise, and expanded distribution that had shrunk during COVID-19",
      current: false,
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
