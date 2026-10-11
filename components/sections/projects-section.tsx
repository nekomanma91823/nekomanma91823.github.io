"use client";

import { ExternalLink } from "lucide-react";
import { MarkedText } from "@/components/marked-text";
import { RevealSection } from "@/components/sections/reveal-section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsDataByLocale } from "@/data/projects";
import { uiTextByLocale } from "@/data/ui-text";
import { useLocale } from "@/lib/locale";

// ========== Projects セクション ==========
export function ProjectsSection() {
  const { locale } = useLocale();
  const t = uiTextByLocale[locale];
  const projectsData = projectsDataByLocale[locale];

  return (
    <RevealSection id="projects">
      <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
        {t.projectTitle}
      </h2>
      <div className="space-y-5">
        {projectsData.map((project) => {
          // 背景課題 → 担当 → 実装 → 結果 → 学び の順に並べる
          const details = [
            { label: t.projectProblemLabel, text: project.problem },
            { label: t.projectRoleLabel, text: project.role },
            { label: t.projectImplementationLabel, text: project.implementation },
            { label: t.projectResultLabel, text: project.result },
            { label: t.projectLearningLabel, text: project.learning },
          ];

          return (
            <Card
              key={project.id}
              data-cat-topic={project.id}
              className="hover:border-neutral-300 transition-colors shadow-sm"
            >
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center gap-2 text-neutral-900">
                  <span>{project.title}</span>
                  {project.status === "ongoing" && (
                    <Badge variant="secondary">{t.projectStatusOngoing}</Badge>
                  )}
                </CardTitle>
                <CardDescription>{project.category}</CardDescription>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 underline-offset-4 hover:underline"
                  >
                    {project.url.replace(/^https?:\/\//, "")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {details.map(({ label, text }) => (
                  <div key={label}>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                      {label}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      <MarkedText text={text} />
                    </p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </RevealSection>
  );
}
