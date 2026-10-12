export interface ResearchItem {
  id: string;
  stage: string; // 修士 / 学部
  title: string;
  description: string;
  // 発表や掲載などの成果。==…== で囲むと蛍光ペンが引かれる
  outcomes?: string[];
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
        title: "外部知識に忠実な文章生成",
        description:
          "LLMが外部から与えられた知識に、どれだけ忠実に文章を生成できるかを研究しています。",
        current: true,
      },
      {
        id: "undergrad",
        stage: "学部",
        title: "LLMの複雑な推論",
        description: "大規模言語モデルの複雑な推論について研究しました。",
        outcomes: [
          "国際会議 ICICIC2025 で論文発表",
          "==論文誌 ICIC Express Letters に掲載==",
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
        title: "Faithful generation from external knowledge",
        description:
          "Studying how faithfully LLMs can generate text based on knowledge given to them from outside.",
        current: true,
      },
      {
        id: "undergrad",
        stage: "Undergraduate",
        title: "Complex reasoning in LLMs",
        description: "Studied complex reasoning in large language models.",
        outcomes: [
          "Presented a paper at ICICIC2025 (international conference)",
          "==Published in ICIC Express Letters (journal)==",
        ],
      },
    ],
  },
};
