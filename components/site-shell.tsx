"use client";

import { HidingCat } from "@/components/hiding-cat";
import { MobileMenu } from "@/components/mobile-menu";
import { Sidebar } from "@/components/sidebar";
import { SiteFooter } from "@/components/site-footer";
import { useLocale } from "@/lib/locale";

// どのページにも共通の枠：左の欄、本文の列、右上の猫、スマホのメニュー
export function SiteShell({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-zinc-50 text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr]">
        <Sidebar />

        {/* ================= メインコンテンツ (右カラム) ================= */}
        <main className="min-w-0 px-6 lg:px-12 py-12 lg:py-24 space-y-24">
          {children}
          <SiteFooter />
        </main>
      </div>

      {/* ================= 右上に隠れている猫 ================= */}
      {/* PCでは右カラムの右端にそろえる */}
      <HidingCat
        locale={locale}
        className="fixed top-0 z-30 right-[calc(max(0px,(100vw_-_72rem)_/_2)_+_1.5rem)]"
      />

      <MobileMenu />
    </div>
  );
}
