"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MapPin } from "lucide-react";
import { EmailContact } from "@/components/email-contact";
import { contactEmail, profileDataByLocale } from "@/data/profile";
import { uiTextByLocale } from "@/data/ui-text";
import { useLocale } from "@/lib/locale";

// ================= サイドバー (左カラム) =================
export function Sidebar() {
  const { locale, setLocale } = useLocale();
  const t = uiTextByLocale[locale];
  const profileData = profileDataByLocale[locale];

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto px-6 py-12 lg:py-24 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-zinc-50 z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            並崎 功真
          </h1>
          <p className="mt-3 text-lg font-semibold text-neutral-800">
            {profileData.tagline}
          </p>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-medium whitespace-pre-line [word-break:auto-phrase]">
            {t.profileHeadline}
          </p>
          <div className="mt-4 inline-flex rounded-md border border-neutral-200 p-1 bg-white">
            <button
              onClick={() => setLocale("ja")}
              className={`px-3 py-1.5 text-xs font-semibold rounded ${locale === "ja" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              JP
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 text-xs font-semibold rounded ${locale === "en" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-neutral-500">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Osaka, Japan
          </span>
          <a
            href="https://cmiru.com/member/namisakitakuma"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-blue-600 transition-colors w-fit"
          >
            <ExternalLink className="w-4 h-4 mr-2" /> {t.cmiruProfile}
          </a>
          <a
            href="https://github.com/nekomanma91823"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-blue-600 transition-colors w-fit"
          >
            <Github className="w-4 h-4 mr-2" /> GitHub (@nekomanma91823)
          </a>
          <EmailContact {...contactEmail} labels={t.email} />
        </div>

        {/* ナビゲーション */}
        <nav className="mt-8 flex flex-col gap-4">
          {t.nav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors w-fit"
            >
              <span className="w-8 h-px bg-neutral-300 mr-4 group-hover:w-12 group-hover:bg-neutral-900 transition-all duration-300"></span>
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>
    </aside>
  );
}
