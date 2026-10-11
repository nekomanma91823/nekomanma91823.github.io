"use client";

import { createContext, useContext, useState } from "react";
import type { Locale } from "@/data/profile";

// 表示言語（JP / EN）。ページを移動しても切り替えた言語のままになるよう、レイアウトで持つ

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");
  return <LocaleContext value={{ locale, setLocale }}>{children}</LocaleContext>;
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale は LocaleProvider の中で使ってください");
  }
  return value;
}
