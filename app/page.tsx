import { AboutSection } from "@/components/sections/about-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { CareerSection } from "@/components/sections/career-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ResearchSection } from "@/components/sections/research-section";

// トップページ。左の欄・猫・メニューなどの共通部分は components/site-shell.tsx
export default function Home() {
  return (
    <>
      <AboutSection />
      <ResearchSection />
      <CareerSection />
      <PublicationsSection />
      <ProjectsSection />
      <ArticlesSection />
    </>
  );
}
