import {
  Award,
  Briefcase,
  Code,
  Newspaper,
  User,
  type LucideIcon,
} from "lucide-react";

export type Locale = "ja" | "en";

// 見出し・ボタン・ラベルなど、画面の文言
export interface UiText {
  nav: Array<{ name: string; href: string; icon: LucideIcon }>;
  profileHeadline: string;
  cmiruProfile: string;
  aboutTitle: string;
  interestsTitle: string;
  skillsTitle: string;
  careerTitle: string;
  publicationTitle: string;
  articleTitle: string;
  projectTitle: string;
  projectStatusOngoing: string;
  projectProblemLabel: string;
  projectRoleLabel: string;
  projectImplementationLabel: string;
  projectResultLabel: string;
  projectLearningLabel: string;
  publicationLinkFallback: string;
  articleSource: string;
  articleDate: string;
  articleHeading: string;
  articleSummary: string;
  readArticle: string;
  openMenu: string;
  closeMenu: string;
  email: { copy: string; copied: string; hint: string };
}

const nav: UiText["nav"] = [
  { name: "About", href: "#about", icon: User },
  { name: "Career", href: "#career", icon: Briefcase },
  { name: "Publications", href: "#publications", icon: Award },
  { name: "Articles", href: "#articles", icon: Newspaper },
  { name: "Projects", href: "#projects", icon: Code },
];

export const uiTextByLocale: Record<Locale, UiText> = {
  ja: {
    nav,
    profileHeadline:
      "大阪公立大学 情報学研究科 修士1年\n株式会社Cmiru 共同創業者・エンジニア",
    cmiruProfile: "Cmiru Profile",
    aboutTitle: "About Me",
    interestsTitle: "Interests",
    skillsTitle: "Skills",
    careerTitle: "Career",
    publicationTitle: "Publications & Awards",
    articleTitle: "Articles & Blog",
    projectTitle: "Projects",
    projectStatusOngoing: "進行中",
    projectProblemLabel: "背景課題",
    projectRoleLabel: "担当",
    projectImplementationLabel: "実装",
    projectResultLabel: "結果",
    projectLearningLabel: "学び",
    publicationLinkFallback: "リンク",
    articleSource: "Cmiru Blog",
    articleDate: "2025.10",
    articleHeading: "GitHub Spec-kitの内部動作から学ぶ、仕様駆動開発（SDD）",
    articleSummary:
      "GitHub CopilotのようなAIツールを活用しつつ、どのように仕様を中心においた開発サイクルを回していくかについての考察。",
    readArticle: "記事を読む",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    email: {
      copy: "コピー",
      copied: "コピーしました",
      hint: "🐾 を @ に置き換えてください",
    },
  },
  en: {
    nav,
    profileHeadline:
      "M1, Graduate School of Informatics, Osaka Metropolitan University\nCo-founder & Engineer at Cmiru Inc.",
    cmiruProfile: "Cmiru Profile",
    aboutTitle: "About Me",
    interestsTitle: "Interests",
    skillsTitle: "Skills",
    careerTitle: "Career",
    publicationTitle: "Publications & Awards",
    articleTitle: "Articles & Blog",
    projectTitle: "Projects",
    projectStatusOngoing: "In Progress",
    projectProblemLabel: "Problem",
    projectRoleLabel: "My Role",
    projectImplementationLabel: "Implementation",
    projectResultLabel: "Result",
    projectLearningLabel: "Learning",
    publicationLinkFallback: "Link",
    articleSource: "Cmiru Blog",
    articleDate: "2025.10",
    articleHeading:
      "Learning Specification-Driven Development (SDD) from the Internals of GitHub Spec-kit",
    articleSummary:
      "A practical discussion on how to run a specification-centered development cycle while leveraging AI tools such as GitHub Copilot.",
    readArticle: "Read Article",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    email: {
      copy: "Copy",
      copied: "Copied",
      hint: "Replace 🐾 with @",
    },
  },
};
