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
  url?: string;
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
        "アルバイト先の大手予備校のチームでは、大規模なデータの不整合を修正する業務が発生していた一方、データベースを直接閲覧できず、Excelベースでの確認に依存していたため、調査の速度と精度に課題があった。",
      role:
        "フロントエンドからバックエンドまで一貫してSQL-RAGアプリを設計・実装。加えて、データ修正時の判断基準や手順など、担当者の暗黙知をプロンプトと運用ルールとして明文化した。",
      implementation:
        "Next.jsで操作UIを実装し、AWS側でCSV由来テーブルをDB化。自然言語入力をText-to-SQLへ変換して調査可能にし、必要な照会を非エンジニアでも実行できる構成にした（アーキテクチャ図は別途追加予定）。",
      result:
        "SQL知識がないメンバーでもデータ調査を進められる環境を構築し、DBを直接扱わない他チームでも現状把握が可能になった。さらに、修正案のドラフト生成をAIで自動化し、==修正作業の手間を削減==した。",
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
        "2025年12月に==幕張メッセ開催のボードゲームマーケットで展示==し、海外来場者からファミリー層まで幅広く好評を得た。2026年4月よりAmazonで販売開始予定。",
      learning:
        "既存ゲームのルールに新技術を掛け合わせることで、体験価値は大きく再設計できると実感した。アイデア自体の新規性だけでなく、組み合わせの設計が差別化の鍵になる。",
    },
    {
      id: "yes-or-no",
      title: "YES or NO（匿名YES/NOパーティーゲーム）",
      category: "Webサービス / リアルタイム通信 / エンタメ",
      tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "WebSocket", "BigQuery"],
      problem:
        "飲み会や学校・職場のアイスブレイクでは、本音を聞きたくても人前では答えにくい質問がある。一方、既存の匿名アンケートツールは事前準備が必要で、その場で質問を出し合って盛り上がる用途には向いていなかった。",
      role:
        "株式会社シーみるのプロダクトとして、開発メンバーとともにサービスの方向性を検討。バックエンドのCloudflare移行や本番切り替え、プライバシーポリシー改定などのプルリクエストをレビューし、リリース判断を担当した。",
      implementation:
        "登録不要のモバイルWebアプリとしてNext.jsで画面を構築。スマホからルームコード（QRコード）で参加し、参加者が投稿した質問に順番に匿名でYES/NO回答する。質問と投票は利用者から読めないようにし、匿名化した集計結果だけを配信する設計にした。当初のFirebase構成では大人数の一斉回答で書き込みの競合が起きたため、Cloudflare Workers + Durable Objectsへ移行し、ルームごとに処理を1本化。WebSocketで状態を配信し、Turnstileとレート制限で不正利用を防いでいる。利用データはD1にためてBigQueryへ日次転送し、お題の改善に活用している。",
      result:
        "yesno.cmiru.com で一般公開。99人・10問の負荷試験では、一斉参加・一斉回答で==失敗した操作0件・集計の不一致0件==を確認し、Firebase版で発生していた競合を解消した。iPhoneのSafari/Chromeでアプリを裏に回して戻しても、自動で最新状態に復帰することも実機で確認した。",
      learning:
        "リアルタイムの多人数ゲームでは、機能よりも「同時アクセス時に状態が壊れないこと」が体験の土台になると学んだ。負荷試験で問題を定量的に示し、アーキテクチャごと見直す判断の重要性を実感した。",
      url: "https://yesno.cmiru.com",
    },
    {
      id: "machinaka-bingo",
      title: "街なかビンゴ（街歩きビンゴアプリ）",
      category: "モバイルアプリ / 企画開発 / 地域・おでかけ",
      tags: ["Flutter", "Firebase", "iOS", "Android"],
      problem:
        "散歩やおでかけ、旅行先のまち歩きは、目的がないと単調になりがちで、いつもの道の新しい発見に気づきにくい。既存のビンゴアプリは抽選型のゲームが中心で、街歩きと組み合わせて遊べるものは少なかった。",
      role:
        "株式会社シーみるのプロダクトとして、開発メンバーとともに企画・サービス設計に関わった。",
      implementation:
        "FlutterでiOS/Androidアプリを開発。好きな言葉を入れる手動作成、おすすめテーマからの作成、単語群からのランダム生成の3通りでカードをつくれ、3×3〜5×5のサイズやFREEマスも選べる。見つけたマスは写真付きで記録でき、完成したカードは画像として保存できる。Firestoreを使ったリンク共有で友達にカードを送れ、受け取った人はWeb版からも遊べる。Remote Configによる更新案内、GA4による同意ベースの計測、Cloudflare Pagesでのランディングページ（bingo.cmiru.com）も整備した。",
      result:
        "==App StoreとGoogle Playでアプリを公開==。ランディングページから各ストアへの導線を用意し、散歩・おでかけ・旅行の場面で気軽に遊べるサービスとして提供している。",
      learning:
        "「歩く」という日常の行動にビンゴという分かりやすいルールを重ねることで、新しい体験をつくれると学んだ。初めての人でも迷わず遊べるよう、チュートリアルやカード作成の導線設計が重要になる。",
      url: "https://bingo.cmiru.com",
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
        "At a team of a major cram school (part-time role), reconciling inconsistencies in large tables was inefficient because the database could not be accessed directly, forcing investigation through Excel files.",
      role:
        "Built the SQL-RAG application end-to-end (frontend to backend). Also translated domain tacit knowledge into explicit prompts and operational rules.",
      implementation:
        "Implemented the UI with Next.js and built AWS-side services to convert CSV-held tables into a queryable database. Added a text-to-SQL flow so non-SQL users could investigate data through natural language queries.",
      result:
        "Enabled non-SQL members to investigate data confidently and improved cross-team visibility for teams that did not directly use databases. AI-assisted draft generation for correction plans ==reduced the manual correction work==.",
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
        "==Showcased at Board Game Market in Makuhari Messe== (Dec 2025), receiving strong traction from both international visitors and families. Planned to launch on Amazon in Apr 2026.",
      learning:
        "Even familiar game mechanics can generate new value when combined with the right technology and interaction design.",
    },
    {
      id: "yes-or-no",
      title: "YES or NO (Anonymous Yes/No Party Game)",
      category: "Web Service / Real-time Communication / Entertainment",
      tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "WebSocket", "BigQuery"],
      problem:
        "At parties or icebreakers at school and work, some questions are hard to answer honestly in front of others. Existing anonymous survey tools require advance setup and are not designed for asking questions on the spot and enjoying the results together.",
      role:
        "As a CMIRU product, worked with the development team on the service direction. Reviewed pull requests for the backend migration to Cloudflare, the production cutover, and the privacy policy revision, and made release decisions.",
      implementation:
        "Built a sign-up-free mobile web app with Next.js. Players join a room with a room code (or QR code) and anonymously answer YES/NO to questions posted by participants in turn. Questions and votes are never readable by clients; only anonymized aggregate results are delivered. Because the initial Firebase setup suffered write contention when many players answered at once, the backend was migrated to Cloudflare Workers + Durable Objects so each room is processed sequentially. State is pushed over WebSocket, abuse is prevented with Turnstile and rate limiting, and usage data is buffered in D1 and exported daily to BigQuery to improve question content.",
      result:
        "Publicly launched at yesno.cmiru.com. A load test with 99 players and 10 questions showed ==zero failed operations and zero result mismatches== for simultaneous joins and answers, resolving the contention seen in the Firebase version. Also verified on real iPhones (Safari/Chrome) that the app recovers to the latest state automatically after returning from the background.",
      learning:
        "In real-time multiplayer games, keeping state consistent under concurrent access is the foundation of the experience. Quantifying the problem through load testing made it possible to justify rethinking the architecture itself.",
      url: "https://yesno.cmiru.com",
    },
    {
      id: "machinaka-bingo",
      title: "Machinaka Bingo (Town-Walking Bingo App)",
      category: "Mobile App / Product Planning / Local & Outings",
      tags: ["Flutter", "Firebase", "iOS", "Android"],
      problem:
        "Walks, outings, and sightseeing strolls can feel monotonous without a goal, making it easy to miss new discoveries on familiar streets. Most bingo apps are draw-based games, and few are designed to be played while walking around town.",
      role:
        "As a CMIRU product, took part in planning and service design together with the development team.",
      implementation:
        "Developed an iOS/Android app with Flutter. Cards can be created in three ways (entering your own words, choosing from recommended themes, or random generation from word sets), with sizes from 3x3 to 5x5 and an optional FREE cell. Found cells can be recorded with photos, and completed cards can be saved as images. Cards can be shared with friends via links backed by Firestore, and recipients can also play on the web. Also set up update prompts with Remote Config, consent-based GA4 tracking, and a landing page on Cloudflare Pages (bingo.cmiru.com).",
      result:
        "==Released on the App Store and Google Play==, with a landing page linking to both stores, offered as a casual way to enjoy walks, outings, and trips.",
      learning:
        "Layering a simple, familiar rule like bingo onto an everyday activity like walking can create a new experience. Onboarding, such as tutorials and a clear card-creation flow, is key for first-time users.",
      url: "https://bingo.cmiru.com",
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