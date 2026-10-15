import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { LocaleProvider } from "@/lib/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// トップの幕（components/opening-intro.tsx）の筆文字。「いつも考えています。並崎功真」の字だけを入れた
// Yuji Syuku（SIL Open Font License。app/fonts/YujiSyuku-OFL.txt）
const brush = localFont({
  src: "./fonts/YujiSyuku-intro.woff2",
  variable: "--font-brush",
  display: "block",
});

// トップの幕は、同じタブでは最初の1回だけ出す。幕が描かれる前に印をつけ、2回目以降は CSS で消す。
// 裏のタブで開かれたときは、表に出るまで幕の動きを止めておく
const introScript = `try{var r=document.documentElement;if(sessionStorage.getItem("intro-seen"))r.dataset.intro="seen";else{sessionStorage.setItem("intro-seen","1");if(document.hidden){r.dataset.intro="paused";document.addEventListener("visibilitychange",function f(){if(!document.hidden){delete r.dataset.intro;document.removeEventListener("visibilitychange",f)}})}}}catch(e){}`;

export const metadata: Metadata = {
  // 詳細ページでは「プロジェクト名 | Takuma | Portfolio」になる
  title: { default: "Takuma | Portfolio", template: "%s | Takuma | Portfolio" },
  description: "Portfolio of Takuma Namisaki, Graduate Student at Osaka Metropolitan University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // introScript が data-intro をつけるので、html の属性の食い違いは警告しない
    <html
      lang="ja"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${geistMono.variable} ${brush.variable} antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <div className="relative min-h-screen">
          <LocaleProvider>
            <SiteShell>{children}</SiteShell>
          </LocaleProvider>
        </div>
      </body>
    </html>
  );
}
