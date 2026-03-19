export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  problem: string;
  role: string;
  implementation: string;
  result: string;
  learning: string;
  status?: "ongoing";
}

export type Locale = "ja" | "en";

export const projectsDataByLocale: Record<Locale, ProjectItem[]> = {
  ja: [
    {
      id: "sql-rag-agent",
      title: "SQL-RAG Agent",
      category: "業務効率化 / DataOps / AI活用",
      tags: ["Next.js", "AWS", "Text-to-SQL", "RAG"],
      problem:
        "アルバイト先の大手塾コンテンツ本部 商品企画開発チームでは、1テーブル10万件規模のデータ不整合を修正する業務が発生していた一方、情報システム部管理の本番DBを直接閲覧できず、Excelベースでの確認に依存していたため、調査の速度と精度に課題があった。",
      role:
        "フロントエンドからバックエンドまで一貫してSQL-RAGアプリを設計・実装。加えて、データ修正時の判断基準や手順など、担当者の暗黙知をプロンプトと運用ルールとして明文化した。",
      implementation:
        "Next.jsで操作UIを実装し、AWS側でCSV由来テーブルをDB化。自然言語入力をText-to-SQLへ変換して調査可能にし、必要な照会を非エンジニアでも実行できる構成にした（アーキテクチャ図は別途追加予定）。",
      result:
        "SQL知識がないメンバーでもデータ調査を進められる環境を構築し、DBを直接扱わない他チームでも現状把握が可能になった。さらに、修正案のドラフト生成をAIで自動化し、年間約120万円のコスト削減を実現。",
      learning:
        "AI導入では速度向上だけでなく、精度保証の設計が本質的に重要だと学んだ。中間表現としてSQLを採用したことで、回答の妥当性確認と運用の再現性を両立できた。",
    },
    {
      id: "picotouch",
      title: "ピコタッチ（NFCボードゲーム）",
      category: "新規事業 / 企画開発 / エンタメ",
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      problem:
        "役員として経営に携わるシーみるにおいて、取引先企業がNFCカードの販売拡大に課題を抱えていた。既存のNFC名刺などはビジネス層中心で、利用シーンの広がりに限界があった。",
      role:
        "ターゲットをファミリー層へ拡張する方針を立案し、NFCカードを活用したHit&Blow形式のボードゲームを企画。iOSアプリでゲーム体験、Webで履歴閲覧という役割分担を設計した。",
      implementation:
        "Flutterでゲーム画面を実装し、GCPでバックエンドと履歴管理を構築。NFCならではの物理インタラクションを軸に、短時間でも盛り上がるUI/UXを設計した。",
      result:
        "2025年12月に幕張メッセ開催のボードゲームマーケットで展示し、海外来場者からファミリー層まで幅広く好評を得た。2026年4月よりAmazonで販売開始予定。",
      learning:
        "既存ゲームのルールに新技術を掛け合わせることで、体験価値は大きく再設計できると実感した。アイデア自体の新規性だけでなく、組み合わせの設計が差別化の鍵になる。",
    },
    {
      id: "ml-learning-site",
      title: "機械学習を学ぶWebサイト（進行中）",
      category: "EdTech / ナレッジ基盤 / 個人開発",
      tags: ["Next.js", "Supabase", "教育コンテンツ"],
      problem:
        "機械学習を初学者から中級者まで一貫して学べる、体系的かつ日本語で使いやすい学習サイトが不足している。",
      role:
        "学習項目を一覧で見渡せる情報設計と、理解度に応じて進められる学習導線の設計・実装を担当。",
      implementation:
        "Next.jsでフロントエンドを構築し、Supabaseでコンテンツと進捗データを管理。検索性・可読性・継続学習を重視したUIを設計している。",
      result:
        "主要ページとコンテンツ管理基盤の初期実装を完了し、公開版に向けて機能検証と教材拡充を進行中。",
      learning:
        "教育プロダクトでは、内容の正確性だけでなく、途中離脱を防ぐ情報設計と導線設計が成果を左右することを学んでいる。",
      status: "ongoing",
    },
  ],
  en: [
    {
      id: "sql-rag-agent",
      title: "SQL-RAG Agent",
      category: "Workflow Automation / DataOps / Applied AI",
      tags: ["Next.js", "AWS", "Text-to-SQL", "RAG"],
      problem:
        "At a curriculum planning team of a major cram school (part-time role), reconciling inconsistencies in large tables (about 100K rows each) was inefficient because direct access to the production DB managed by the IT department was restricted, forcing investigation through Excel files.",
      role:
        "Built the SQL-RAG application end-to-end (frontend to backend). Also translated domain tacit knowledge into explicit prompts and operational rules.",
      implementation:
        "Implemented the UI with Next.js and built AWS-side services to convert CSV-held tables into a queryable database. Added a text-to-SQL flow so non-SQL users could investigate data through natural language queries.",
      result:
        "Enabled non-SQL members to investigate data confidently and improved cross-team visibility for teams that did not directly use databases. AI-assisted draft generation for correction plans delivered an estimated annual cost reduction of JPY 1.2M.",
      learning:
        "In AI-driven efficiency projects, preserving answer quality is as important as speed. Using SQL as an intermediate layer was critical for accuracy and auditability.",
    },
    {
      id: "picotouch",
      title: "PicoTouch (NFC Board Game)",
      category: "New Business / Product Planning / Entertainment",
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      problem:
        "A partner company was struggling to expand NFC card sales beyond business-oriented use cases such as digital name cards.",
      role:
        "Proposed a family-focused direction and planned a Hit&Blow-style board game using NFC cards. Designed the experience split between an iOS gameplay app and a web-based history view.",
      implementation:
        "Developed gameplay with Flutter and built backend/history management on GCP. Focused on tactile, NFC-driven interactions for fast and engaging sessions.",
      result:
        "Showcased at Board Game Market in Makuhari Messe (Dec 2025), receiving strong traction from both international visitors and families. Planned to launch on Amazon in Apr 2026.",
      learning:
        "Even familiar game mechanics can generate new value when combined with the right technology and interaction design.",
    },
    {
      id: "ml-learning-site",
      title: "Web Platform for Learning Machine Learning (In Progress)",
      category: "EdTech / Knowledge Platform / Personal Project",
      tags: ["Next.js", "Supabase", "Learning Content"],
      problem:
        "There are limited platforms that provide structured, end-to-end learning paths for machine learning in an accessible format.",
      role:
        "Designing and building an overview-first learning website with clear progression paths by learner level.",
      implementation:
        "Building the frontend with Next.js and managing content/progress with Supabase, with emphasis on readability, searchability, and retention.",
      result:
        "Core pages and content management foundation are implemented; currently iterating toward a public release.",
      learning:
        "For education products, information architecture and learning flow matter as much as content correctness.",
      status: "ongoing",
    },
  ],
};