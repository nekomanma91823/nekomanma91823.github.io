"use client";

import { FlaskConical } from "lucide-react";
import { MarkedText } from "@/components/marked-text";
import { RevealSection } from "@/components/sections/reveal-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { researchDataByLocale } from "@/data/research";
import { uiTextByLocale } from "@/data/ui-text";
import { useLocale } from "@/lib/locale";

// ========== Research セクション ==========
export function ResearchSection() {
  const { locale } = useLocale();
  const t = uiTextByLocale[locale];
  const research = researchDataByLocale[locale];

  return (
    <RevealSection id="research" catTopic="research">
      <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
        {t.researchTitle}
      </h2>
      <p className="text-neutral-600 leading-relaxed">{research.lead}</p>
      <div className="space-y-4">
        {research.items.map((item) => (
          <Card
            key={item.id}
            className="hover:border-neutral-300 transition-colors shadow-sm"
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center text-xs text-blue-600 font-mono">
                  <FlaskConical className="w-3.5 h-3.5 mr-1" />
                  {item.stage}
                </span>
                {item.current && (
                  <Badge variant="secondary">{t.researchOngoing}</Badge>
                )}
              </div>
              <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                {item.description}
              </p>
              {item.outcomes && (
                <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="text-neutral-400">—</span>
                      <span>
                        <MarkedText text={outcome} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </RevealSection>
  );
}
