export interface ResearchItem {
  id: string;
  stage: string; // 修士 / 学部
  title: string;
  description: string;
  // 発表や掲載などの成果。==…== で囲むと蛍光ペンが引かれる
  outcomes?: Array<{ text: string; link?: string; linkText?: string }>;
  current?: boolean;
}

export interface ResearchData {
  lead: string;
  items: ResearchItem[];
}

export type Locale = "ja" | "en";

// 新しい順に並べる
export const researchDataByLocale: Record<Locale, ResearchData> = {
  ja: {
    lead: "自然言語処理研究室（柳本研究室）で、大規模言語モデル（LLM）の研究をしています。",
    items: [
      {
        id: "master",
        stage: "修士",
        title: "生成文書による小規模言語モデルの組み合わせ",
        description:
          "複数の小規模言語モデルを、生成した文書を介して組み合わせる方法を研究しています。",
        outcomes: [
          {
            text: "国際会議 AROB 2027 に投稿中（審査中）",
            link: "https://isarob.org/symposium/",
            linkText: "学会",
          },
        ],
        current: true,
      },
      {
        id: "undergrad",
        stage: "学部",
        title: "LLMの複雑な推論",
        description: "大規模言語モデルの複雑な推論について研究しました。",
        outcomes: [
          { text: "国際会議 ICICIC2025 で論文発表" },
          {
            text: "==論文誌 ICIC Express Letters に掲載==",
            link: "https://doi.org/10.24507/icicel.20.10.1103",
            linkText: "論文",
          },
        ],
      },
    ],
  },
  en: {
    lead: "I research large language models (LLMs) in the Natural Language Processing Lab (Yanagimoto Lab).",
    items: [
      {
        id: "master",
        stage: "Master's",
        title: "Combining small language models through generated documents",
        description:
          "Studying how to combine several small language models through the documents they generate.",
        outcomes: [
          {
            text: "Submitted to AROB 2027 (international symposium), under review",
            link: "https://isarob.org/symposium/",
            linkText: "Symposium",
          },
        ],
        current: true,
      },
      {
        id: "undergrad",
        stage: "Undergraduate",
        title: "Complex reasoning in LLMs",
        description: "Studied complex reasoning in large language models.",
        outcomes: [
          { text: "Presented a paper at ICICIC2025 (international conference)" },
          {
            text: "==Published in ICIC Express Letters (journal)==",
            link: "https://doi.org/10.24507/icicel.20.10.1103",
            linkText: "Paper",
          },
        ],
      },
    ],
  },
};
