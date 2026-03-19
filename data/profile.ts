export interface ProfileData {
  about: string;
  interests: string[];
  skills: string[];
}

export type Locale = "ja" | "en";

export const profileDataByLocale: Record<Locale, ProfileData> = {
  ja: {
    about: `大阪公立大学 現代システム科学域 知識情報システム学類（情報学研究科 自然言語処理研究室）所属。
株式会社Cmiruでエンジニアとして活動しています。
好奇心旺盛でマイブームがころころ入れ替わります。よく食べ、よく遊び、夜更かしをします。猫が好きなのに、猫アレルギーなところが弱点です。`,
    interests: ["NLP", "自然言語処理", "UI/UX", "猫"],
    skills: [
      "Web Development",
      "Software Engineering",
      "React",
      "TypeScript",
      "Python",
    ],
  },
  en: {
    about: `I belong to the School of Knowledge and Information Systems at Osaka Metropolitan University and work with a Natural Language Processing lab in graduate school.
I am also working as an engineer at Cmiru.
I am highly curious and frequently dive into new interests. I enjoy good food, having fun, and staying up late. I love cats, but unfortunately I am allergic to them.`,
    interests: ["NLP", "Natural Language Processing", "UI/UX", "Cats"],
    skills: [
      "Web Development",
      "Software Engineering",
      "React",
      "TypeScript",
      "Python",
    ],
  },
};
