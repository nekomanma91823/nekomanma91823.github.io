export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  // 一覧のカードに出す、ひとことの説明
  summary: string;
  // 一覧のカードで目立たせる成果。==…== で囲むと蛍光ペンが引かれる
  highlight?: string;
  // 一覧のカードの上に出す画像（1200:630 にそろえて public/images/projects/ に置く）。ないときは薄いアイコンだけの枠になる
  image?: { src: string; alt: string };
  tags: string[];
  // 始まり方。課題から始まったものは「背景課題」、人の声から始まったものは「きっかけ」という見出しになる
  originKind: "problem" | "trigger";
  origin: string;
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
      // URL を変えないよう、id は SQL アプリだったころのまま
      id: "sql-rag-agent",
      title: "業務ナレッジRAG",
      category: "業務効率化 / ナレッジマネジメント / AI活用",
      summary:
        "チームの業務の知識を1か所に集めて、誰でも探して使えるようにするナレッジ基盤。確かめ済みのSQLも、その場で実行できる。",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "AWS", "RAG"],
      originKind: "problem",
      origin:
        "所属する大手予備校の過去問データ整備チームでは、大学入試の過去問の配点や正解などをデータベースに登録するマスタ業務を担っている。アルバイトが中心のチームで、卒業や退職のたびに人が入れ替わる。例外的な業務の判断や失敗の経験はベテランの頭の中にだけ残り、新しい人は質問して覚えるしかなかった。手順を書いた文書も何か所にも散らばり、古い手順が残ったり、直し忘れが出たりしていた。",
      role:
        "チームの統括者として、まずAIが日本語の質問からSQLを作るアプリを発案した。試作を作って社員への定例報告の場で提案し、開発から導入研修までを主導した。そこから、SQLだけでなく業務の手順やよく聞かれることの答えまで残せるナレッジ基盤へと広げ、知識の種類、担当、見直しの決まりを設計した。",
      implementation:
        "Next.jsとFastAPIで作り、知識はAWS上のPostgreSQLにためる。知識は「部品・業務手順・QA・SQL・備忘録・挑戦/失敗/振り返り」の6種類に分け、業務手順とQAは部品を組み合わせて作る。部品を1か所直せば、それを使う手順とQAがすべて新しくなるので、直し忘れが起きない。登録した知識は機械のチェックと管理者の承認を経て公開され、読んだ人からの「古い・違う」の知らせや見直しの期限で担当者に戻る。AIが意味で探し、根拠を示して答える機能と、下書きを作る機能も実装した（構成図は別途追加予定）。",
      result:
        "最初に作ったSQLアプリでは、Excelでは扱えない規模のデータも処理できるようになり、マスタ業務の工数を減らせた。ナレッジ基盤（RAG）は作り終え、書く、確かめる、承認する、探す、SQLを実行するといった基本の流れは、すでに本番で動いている。AIによる検索と回答を含めた本格的な運用は、これから始める。",
      learning:
        "知識は集めるだけでは残らず、書く手間を減らし、直す場所を1か所にまとめて、初めて続くと学んだ。書く人の気持ちも大切で、失敗だけを集めると責められる記録に見えて書きにくくなるため、挑戦も一緒に残すようにした。",
      status: "ongoing",
    },
    {
      id: "picotouch",
      title: "アニマル ピコタッチ（NFCボードゲーム）",
      category: "新規事業 / 企画開発 / エンタメ",
      summary:
        "NFCカードをタッチして遊ぶ、家族向けのHit&Blow形式のボードゲーム。iOSアプリと連動する。",
      highlight: "==ボードゲームマーケット（幕張メッセ）で展示==、Amazonで販売中",
      image: {
        src: "/images/projects/picotouch.webp",
        alt: "アニマル ピコタッチのロゴと、動物が描かれたカード",
      },
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      originKind: "problem",
      origin:
        "役員として経営に携わるシーみるに、取引先企業から、NFCカードの販売を広げたいという相談があった。既存のNFC名刺などはビジネス層向けが中心で、使われる場面が限られていた。私たちも自分たちのゲームを作ってみたいと考えていたため、NFCカードで遊ぶゲームとして形にすることにした。",
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
      image: { src: "/images/projects/yes-or-no.webp", alt: "YES or NO のロゴ" },
      tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "WebSocket", "BigQuery"],
      originKind: "trigger",
      origin:
        "友人から、みんなで集まる場で遊べるゲームがほしいという声を聞いたのが始まり。飲み会や学校・職場のアイスブレイクでは、本音を聞きたくても人前では答えにくい質問がある。既存の匿名アンケートツールは事前準備が必要で、その場で質問を出し合って盛り上がる用途には向いていなかったため、登録なしですぐに遊べるゲームとして作ることにした。",
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
      image: {
        src: "/images/projects/machinaka-bingo.webp",
        alt: "街なかビンゴのアプリ画面と、街並みのイラスト",
      },
      tags: ["Flutter", "Firebase", "iOS", "Android"],
      originKind: "trigger",
      origin:
        "友人たちは普段から、街で見つけたものでマスを埋めていく手作りのビンゴで遊んでいた。その友人たちから、この遊びのアプリがほしいという声があり、アプリにすることにした。既存のビンゴアプリは抽選型のゲームが中心で、街歩きと組み合わせて遊べるものは少なかった。",
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
      title: "Team Knowledge RAG",
      category: "Workflow Automation / Knowledge Management / Applied AI",
      summary:
        "A knowledge base that gathers the team's know-how in one place so anyone can find and use it. Verified SQL can be run on the spot.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "AWS", "RAG"],
      originKind: "problem",
      origin:
        "I work on the past-exam data team at a major cram school, handling the master data work of registering scores, answers, and other details of past university entrance exam questions into a database. The team is mostly part-timers, and members change whenever someone graduates or leaves. Judgment calls on unusual tasks and lessons from mistakes stayed only in veterans' heads, so newcomers could only learn by asking. Written procedures were scattered across several places, leaving outdated steps and missed updates.",
      role:
        "As the team lead, first proposed an app where AI turns questions in Japanese into SQL: built a prototype, pitched it at a regular progress meeting with staff, and led everything from development to onboarding training. Then expanded it into a knowledge base that keeps not only SQL but also procedures and answers to common questions, and designed the knowledge types, owners, and review rules.",
      implementation:
        "Built with Next.js and FastAPI, storing knowledge in PostgreSQL on AWS. Knowledge is split into six types: parts, procedures, Q&A, SQL, notes, and challenges/failures/reflections. Procedures and Q&A are assembled from parts, so fixing a part in one place updates every procedure and answer that uses it, and nothing is left out of date. New entries go through automated checks and admin approval before they are published, and readers' \"outdated or wrong\" reports and review deadlines send them back to their owners. Also implemented AI features that search by meaning, answer with sources, and draft entries (architecture diagram coming soon).",
      result:
        "The first-stage SQL app made data at a scale Excel could not handle workable and reduced the master data workload. The knowledge base (RAG) is now built, and the core flow of writing, checking, approving, searching, and running SQL already works in production. Full operation, including AI search and answers, starts next.",
      learning:
        "Learned that collecting knowledge is not enough to keep it: it lasts only when writing is easy and every fix happens in one place. How writers feel matters too. A record of failures alone reads like blame and is hard to write, so challenges are kept alongside them.",
      status: "ongoing",
    },
    {
      id: "picotouch",
      title: "Animal PicoTouch (NFC Board Game)",
      category: "New Business / Product Planning / Entertainment",
      summary:
        "A family Hit&Blow-style board game played by tapping NFC cards, linked with an iOS app.",
      highlight:
        "==Showcased at Board Game Market (Makuhari Messe)==; now available on Amazon",
      image: {
        src: "/images/projects/picotouch.webp",
        alt: "The Animal PicoTouch logo and illustrated animal cards",
      },
      tags: ["Flutter", "GCP", "NFC", "iOS"],
      originKind: "problem",
      origin:
        "CMIRU, where I serve as an executive, was approached by a partner company that wanted to expand sales of its NFC cards. Existing products such as NFC business cards mainly targeted business users, which limited where the cards were used. Since our team had also wanted to make a game of our own, we decided to build one played with NFC cards.",
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
      image: { src: "/images/projects/yes-or-no.webp", alt: "The YES or NO logo" },
      tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "WebSocket", "BigQuery"],
      originKind: "trigger",
      origin:
        "It started when a friend told us they wanted a game to play when everyone gets together. At parties or icebreakers at school and work, some questions are hard to answer honestly in front of others. Existing anonymous survey tools require advance setup and are not designed for asking questions on the spot and enjoying the results together, so we built a game anyone can play right away without signing up.",
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
      image: {
        src: "/images/projects/machinaka-bingo.webp",
        alt: "The Machinaka Bingo app screen with an illustrated townscape",
      },
      tags: ["Flutter", "Firebase", "iOS", "Android"],
      originKind: "trigger",
      origin:
        "Some friends of ours already played a homemade bingo, filling in squares with things they found around town. When they told us they wanted an app for it, we decided to build one. Most bingo apps are draw-based games, and few are designed to be played while walking around town.",
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