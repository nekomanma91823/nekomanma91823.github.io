export type Locale = "ja" | "en";

// 右上に隠れている猫のセリフ。
// キーは page.tsx の data-cat-topic（セクション名、またはプロジェクトの id）で、
// 顔を出したときに読んでいる項目（画面の上から1/3の高さにある項目）のセリフを話す。
export const catLinesByLocale: Record<Locale, Record<string, string>> = {
  ja: {
    about: "この人、猫好きなのに猫アレルギーなんだって",
    research: "小さなAIどうしを、書いた文書で組み合わせてるんだって",
    career: "大学院に通いながら、会社も一緒に立ち上げたらしい",
    publications: "国際会議で発表して、論文誌にも載ったんだって",
    articles: "AIと仕様駆動開発の記事を書いたらしい",
    "sql-rag-agent": "人が入れ替わっても、知恵が残るようにしてるんだって",
    picotouch: "NFCカードをタッチして遊ぶボードゲームなんだって",
    "yes-or-no": "99人で一斉に押しても壊れなかったって",
    "machinaka-bingo": "散歩がちょっと楽しくなるビンゴらしい",
    footer: "最後まで読んでくれてありがとう",
  },
  en: {
    about: "This human loves cats. And is allergic to them.",
    research: "Teaming up small AIs through the notes they write.",
    career: "Grad school, and co-founded a startup on the side.",
    publications: "Presented at a conference, then published in a journal.",
    articles: "Wrote about spec-driven development with AI.",
    "sql-rag-agent": "Know-how that stays, even when people leave.",
    picotouch: "A board game you play by tapping NFC cards.",
    "yes-or-no": "99 players at once, and nothing broke.",
    "machinaka-bingo": "Bingo that makes a walk a little more fun.",
    footer: "Thanks for reading all the way.",
  },
};
