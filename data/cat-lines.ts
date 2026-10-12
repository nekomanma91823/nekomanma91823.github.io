export type Locale = "ja" | "en";

// 右上に隠れている猫のセリフ。
// キーは page.tsx の data-cat-topic（セクション名、またはプロジェクトの id）で、
// 顔を出したときに読んでいる項目（画面の上から1/3の高さにある項目）のセリフを話す。
export const catLinesByLocale: Record<Locale, Record<string, string>> = {
  ja: {
    about: "この人、猫好きなのに猫アレルギーなんだって",
    research: "AIが知識にどれだけ忠実に答えられるか、調べてるんだって",
    career: "大学院に通いながら、会社も一緒に立ち上げたらしい",
    publications: "国際会議でも発表したんだって",
    articles: "AIと仕様駆動開発の記事を書いたらしい",
    "sql-rag-agent": "SQLが書けない人でも調べられるようにしたらしい",
    picotouch: "NFCカードをタッチして遊ぶボードゲームなんだって",
    "yes-or-no": "99人で一斉に押しても壊れなかったって",
    "machinaka-bingo": "散歩がちょっと楽しくなるビンゴらしい",
    footer: "最後まで読んでくれてありがとう",
  },
  en: {
    about: "This human loves cats. And is allergic to them.",
    research: "Checking how faithfully AI sticks to what it is told.",
    career: "Grad school, and co-founded a startup on the side.",
    publications: "Presented at an international conference, too.",
    articles: "Wrote about spec-driven development with AI.",
    "sql-rag-agent": "Made data searchable without writing SQL.",
    picotouch: "A board game you play by tapping NFC cards.",
    "yes-or-no": "99 players at once, and nothing broke.",
    "machinaka-bingo": "Bingo that makes a walk a little more fun.",
    footer: "Thanks for reading all the way.",
  },
};
