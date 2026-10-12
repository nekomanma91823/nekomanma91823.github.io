export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  // 一覧のカードに出す、ひとことの説明
  summary: string;
  // 一覧のカードで目立たせる成果。==…== で囲むと蛍光ペンが引かれる
  highlight?: string;
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
      summary:
        "日本語で質問すると、AIがSQLを作ってデータベースを検索する、チーム向けの業務アプリ。",
      highlight: "==Excelでは扱えない規模のデータを処理可能に==",
      tags: ["Next.js", "AWS", "Text-to-SQL", "RAG"],
      problem:
        "所属する大手予備校の過去問データ整備チームでは、大学入試の過去問の配点や正解などをデータベースに登録するマスタ業務を担っている。多くのテーブルのデータをCSVで扱い、データベースを直接操作できない運用だったため、Excelでの作業が常態化していた。プログラムを書けるメンバーは一部で、Pythonでの効率化も業務量に追いついていなかった。",
      role:
        "チームの統括者として、AIを使ったSQLアプリを発案。試作を作って社員への定例報告の場で提案し、開発から導入研修までを主導した。データ修正時の判断基準や手順など、担当者の暗黙知もプロンプトと運用ルールとして明文化した。",
      implementation:
        "Next.jsで画面を作り、AWS上でCSVのデータをデータベース化。自然言語の質問からSQLを生成し、構文をチェックしてから実行する。過去に使われたSQLを検索して生成に活かす（RAG）ハイブリッド構成にし、使うほど意図どおりのSQLが出るようにした。AIの誤りをメンバー自身が見抜けるよう、SQL研修も実施した（構成図は別途追加予定）。",
      result:
        "Excelでは扱えない規模のデータを処理できるようになり、マスタ業務の工数を減らせた。生成したSQLが蓄積される仕組みで、作業の属人化も解消した。現在は、追加データの作成やバリデーションもAIが自律的に行えるよう機能を広げている。",
      learning:
        "AI導入では速度向上だけでなく、精度保証の設計が本質的に重要だと学んだ。中間表現としてSQLを採用したことで、回答の妥当性確認と運用の再現性を両立できた。",
    },
    {
      id: "picotouch",
      title: "アニマル ピコタッチ（NFCボードゲーム）",
      category: "新規事業 / 企画開発 / エンタメ",
      summary:
        "NFCカードをタッチして遊ぶ、家族向けのHit&Blow形式のボードゲーム。iOSアプリと連動する。",
      highlight: "==ボードゲームマーケット（幕張メッセ）で展示==、Amazonで販売中",
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      problem:
        "役員として経営に携わるシーみるにおいて、取引先企業がNFCカードの販売拡大に課題を抱えていた。既存のNFC名刺などはビジネス層中心で、利用シーンの広がりに限界があった。",
      role:
        "ターゲットをファミリー層へ拡張する方針を立案し、NFCカードを活用したHit&Blow形式のボードゲームを企画。iOSアプリでゲーム体験、Webで履歴閲覧という役割分担を設計した。",
      implementation:
        "Flutterでゲーム画面を実装し、GCPでバックエンドと履歴管理を構築。NFCならではの物理インタラクションを軸に、短時間でも盛り上がるUI/UXを設計した。",
      result:
        "2025年12月に==幕張メッセ開催のボードゲームマーケットで展示==し、海外来場者からファミリー層まで幅広く好評を得た。現在はAmazonで販売中。",
      learning:
        "既存ゲームのルールに新技術を掛け合わせることで、体験価値は大きく再設計できると実感した。アイデア自体の新規性だけでなく、組み合わせの設計が差別化の鍵になる。",
    },
    {
      id: "yes-or-no",
      title: "YES or NO（匿名YES/NOパーティーゲーム）",
      category: "Webサービス / リアルタイム通信 / エンタメ",
      summary:
        "その場で出し合った質問に、スマホから匿名でYES/NOを答えるパーティーゲーム。登録なしで遊べる。",
      highlight: "99人の一斉回答で==失敗した操作0件・集計の不一致0件==",
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
      summary:
        "街で見つけたものでマスを埋めていく、散歩やおでかけ向けのビンゴアプリ。",
      highlight: "==App StoreとGoogle Playで公開==",
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
  ],
  en: [
    {
      id: "sql-rag-agent",
      title: "SQL-RAG Agent",
      category: "Workflow Automation / DataOps / Applied AI",
      summary:
        "A team app where AI turns plain-language questions into SQL and searches the database.",
      highlight: "==Made data too large for Excel workable==",
      tags: ["Next.js", "AWS", "Text-to-SQL", "RAG"],
      problem:
        "I work on the past-exam data team at a major cram school, handling the master data work of registering scores, answers, and other details of past university entrance exam questions into a database. The data spanned many tables shared as CSV files, and without direct access to the database, Excel-based work had become the norm. Only some members could write code, and Python scripts could not keep up with the volume of work.",
      role:
        "As the team lead, proposed an AI-powered SQL app: built a prototype, pitched it at a regular progress meeting with staff, and led everything from development to onboarding training. Also turned tacit knowledge, such as how to judge and carry out data corrections, into explicit prompts and operational rules.",
      implementation:
        "Built the UI with Next.js and turned the CSV data into a database on AWS. Natural-language questions are converted into SQL, syntax-checked, and then executed. A hybrid design retrieves previously used SQL (RAG) to guide generation, so results get closer to what users intend the more the app is used. Also ran SQL training so members can spot AI mistakes themselves (architecture diagram coming soon).",
      result:
        "Made data at a scale Excel could not handle workable and reduced the master data workload. Because generated SQL accumulates over time, the work no longer depends on specific individuals. Now extending the app so AI can also create additional data and run validation on its own.",
      learning:
        "In AI-driven efficiency projects, preserving answer quality is as important as speed. Using SQL as an intermediate layer was critical for accuracy and auditability.",
    },
    {
      id: "picotouch",
      title: "Animal PicoTouch (NFC Board Game)",
      category: "New Business / Product Planning / Entertainment",
      summary:
        "A family Hit&Blow-style board game played by tapping NFC cards, linked with an iOS app.",
      highlight:
        "==Showcased at Board Game Market (Makuhari Messe)==; now available on Amazon",
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      problem:
        "A partner company was struggling to expand NFC card sales beyond business-oriented use cases such as digital name cards.",
      role:
        "Proposed a family-focused direction and planned a Hit&Blow-style board game using NFC cards. Designed the experience split between an iOS gameplay app and a web-based history view.",
      implementation:
        "Developed gameplay with Flutter and built backend/history management on GCP. Focused on tactile, NFC-driven interactions for fast and engaging sessions.",
      result:
        "==Showcased at Board Game Market in Makuhari Messe== (Dec 2025), receiving strong traction from both international visitors and families. Now available on Amazon.",
      learning:
        "Even familiar game mechanics can generate new value when combined with the right technology and interaction design.",
    },
    {
      id: "yes-or-no",
      title: "YES or NO (Anonymous Yes/No Party Game)",
      category: "Web Service / Real-time Communication / Entertainment",
      summary:
        "A party game where everyone answers on-the-spot questions with an anonymous YES or NO from their phone, with no sign-up needed.",
      highlight:
        "==Zero failed operations and zero result mismatches== with 99 players answering at once",
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
      summary:
        "A bingo app for walks and outings: fill in the squares with things you find around town.",
      highlight: "==Released on the App Store and Google Play==",
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
  ],
};