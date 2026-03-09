export interface ProfileData {
  about: string;
  interests: string[];
  skills: string[];
}

export const profileData: ProfileData = {
  about: `大阪公立大学 現代システム科学域 知識情報システム学類（情報学研究科 自然言語処理研究室）所属。
株式会社Cmiruでエンジニアとして活動しています。
好奇心旺盛でマイブームがころころ入れ替わります。よく食べ、よく遊び、夜更かしをします。猫が好きなのに、猫アレルギーなところが弱点です。`,
  interests: [
    "NLP",
    "自然言語処理",
    "UI/UX",
    "猫",
  ],
  skills: [
    "Web Development",
    "Software Engineering",
    "React",
    "TypeScript",
    "Python",
  ],
};
