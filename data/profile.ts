export interface ProfileData {
  tagline: string;
  // アイコン（profileIcon）の代替テキスト
  iconAlt: string;
  about: string;
  interests: string[];
  skills: string[];
}

export type Locale = "ja" | "en";

// 連絡先のメールアドレス。bot に拾われないよう、@ を含む形ではどこにも書かない
// （表示は components/email-contact.tsx が肉球に置き換え、コピー時だけ組み立てる）
export const contactEmail = {
  user: "taku1899neko",
  domain: "gmail.com",
};

// 顔写真の代わりのアイコン。本人が描いた、ペンを持った猫のイラストの顔のあたりを切り抜いたもの
export const profileIcon = "/images/profile-icon.webp";

export const profileDataByLocale: Record<Locale, ProfileData> = {
  ja: {
    tagline: "いつも考えています。",
    iconAlt: "並崎 功真のアイコン（ペンを持った猫のイラスト）",
    about: `私は考えることが好きです。どうすればもっと面白くできるのか。どうすればもっと伝わりやすくなるのか。どうすればもっと皆が効率よく、負担が減るのか。ふとしたときにも考えてしまいます。
「もっとよくできる」に気づき、考え抜き、動いて、形になるまでもっていく。それが私の強みです。

大阪公立大学大学院 情報学研究科（自然言語処理研究室）修士1年。学生ベンチャーの株式会社Cmiru（シーみる）を共同創業し、エンジニアとしても活動しています。
好奇心旺盛でマイブームがころころ入れ替わります。よく食べ、よく遊び、夜更かしをします。猫が好きなのに、猫アレルギーなところが弱点です。`,
    interests: ["旅行", "登山", "ゲーム", "パズル", "筋トレ", "猫"],
    skills: [
      "自然言語処理（NLP）",
      "UI/UX",
      "Web Development",
      "Software Engineering",
      "React",
      "TypeScript",
      "Python",
    ],
  },
  en: {
    tagline: "Always thinking.",
    iconAlt: "Takuma Namisaki's icon, an illustrated cat holding a pen",
    about: `I love to think. How can this be more fun? How can it be easier to understand? How can everyone work more efficiently, with less burden? I find myself thinking about these questions even in idle moments.
Noticing where things could be better, thinking them through, taking action, and carrying them all the way to a finished result: that is my strength.

I am a first-year master's student at the Graduate School of Informatics, Osaka Metropolitan University (Natural Language Processing Lab), and a co-founder of and engineer at Cmiru, a student startup.
I am highly curious and frequently dive into new interests. I enjoy good food, having fun, and staying up late. I love cats, but unfortunately I am allergic to them.`,
    interests: ["Travel", "Hiking", "Games", "Puzzles", "Working out", "Cats"],
    skills: [
      "Natural Language Processing (NLP)",
      "UI/UX",
      "Web Development",
      "Software Engineering",
      "React",
      "TypeScript",
      "Python",
    ],
  },
};
