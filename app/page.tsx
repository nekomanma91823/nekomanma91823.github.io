"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, BookOpen, MapPin, ExternalLink, Newspaper, Award, User, Briefcase, Code, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { careerData } from "@/data/career";
import { publicationsData, getPublicationIcon, getPublicationTypeLabel } from "@/data/publications";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "Career", href: "#career", icon: Briefcase },
  { name: "Publications", href: "#publications", icon: Award },
  { name: "Articles", href: "#articles", icon: Newspaper },
  { name: "Projects", href: "#projects", icon: Code },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // メニューが開いているときは背面のスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-zinc-50 text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr]">
        
        {/* ================= サイドバー (左カラム) ================= */}
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
              <p className="mt-4 text-base text-neutral-600 leading-relaxed font-medium">
                大阪公立大学 情報学研究科 修士1年
                <br />
                株式会社Cmiru エンジニア
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm text-neutral-500">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> Osaka, Japan
              </span>
              <a href="https://cmiru.com/member/namisakitakuma" target="_blank" rel="noreferrer" className="flex items-center hover:text-blue-600 transition-colors w-fit">
                <ExternalLink className="w-4 h-4 mr-2" /> Cmiru Profile
              </a>
              <a href="https://github.com/nekomanma91823" target="_blank" rel="noreferrer" className="flex items-center hover:text-blue-600 transition-colors w-fit">
                <Github className="w-4 h-4 mr-2" /> GitHub (@nekomanma91823)
              </a>
            </div>

            {/* ナビゲーション */}
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
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

        {/* ================= メインコンテンツ (右カラム) ================= */}
        <main className="min-w-0 px-6 lg:px-12 py-12 lg:py-24 space-y-24">
          
          {/* ========== About セクション ========== */}
          <motion.section 
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 scroll-mt-24"
          >
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">About Me</h2>
              <p className="text-neutral-600 leading-relaxed whitespace-pre-wrap">
                {profileData.about}
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.interests.map((kw) => (
                    <Badge key={kw} variant="secondary">{kw}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.skills.map((kw) => (
                    <Badge key={kw} variant="outline">{kw}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ========== Career セクション ========== */}
          <motion.section
            id="career"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 scroll-mt-24"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-200 pb-2 inline-block">
              Career
            </h2>
            <div className="space-y-8 border-l border-neutral-200 ml-20 sm:ml-28">
              {careerData.map((item) => (
                <div key={item.id} className="relative pl-5 sm:pl-8">
                  {/* ================= 年月表記 (左側) ================= */}
                  <div className="absolute top-0 right-full pr-4 sm:pr-6 w-24 sm:w-28 text-right">
                    <span className="text-sm font-mono text-neutral-500 tracking-tight">
                      {item.year}.{item.month.toString().padStart(2, '0')}
                    </span>
                    {item.current && (
                      <span className="block text-xs font-medium text-blue-500 font-mono mt-0.5">Present</span>
                    )}
                  </div>
                  
                  {/* ================= タイムラインの点 (中央) ================= */}
                  <div className={`absolute w-3 h-3 rounded-full -left-[6px] top-1.5 ring-4 ring-zinc-50 ${item.current ? "bg-blue-500" : "bg-neutral-300"}`} />
                  
                  {/* ================= コンテンツ (右側) ================= */}
                  <h3 className="text-lg font-medium text-neutral-900 leading-snug">{item.title}</h3>
                  {item.role && <p className="text-sm text-neutral-600 mt-1">{item.role}</p>}
                </div>
              ))}
            </div>
          </motion.section>

          {/* ========== Publications & Awards セクション ========== */}
          <motion.section
            id="publications"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 scroll-mt-24"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
              Publications & Awards
            </h2>
            <div className="space-y-4">
              {publicationsData.map((pub) => {
                const Icon = getPublicationIcon(pub.type);
                const typeLabel = getPublicationTypeLabel(pub.type);
                
                return (
                  <Card key={pub.id} className="hover:border-neutral-300 transition-colors shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center text-xs text-blue-600 font-mono">
                          <Icon className="w-3.5 h-3.5 mr-1" />
                          {typeLabel}
                        </div>
                        <span className="text-xs text-neutral-500 font-mono">
                          {pub.year}{pub.month ? `.${pub.month.toString().padStart(2, '0')}` : ''}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                        {pub.title}
                      </h3>
                      {pub.description && (
                         <p className="text-sm text-neutral-600 mt-2">{pub.description}</p>
                      )}
                      {pub.link && (
                        <div className="mt-4">
                          <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-neutral-500 hover:text-blue-600 transition-colors">
                            <ExternalLink className="w-4 h-4 mr-1" /> {pub.linkText || "リンク"}
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* ========== Articles セクション ========== */}
          <motion.section
            id="articles"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 scroll-mt-24"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
              Articles & Blog
            </h2>
            <div className="space-y-4">
              
              <Card className="hover:border-neutral-300 transition-colors shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-xs text-blue-600 font-mono">
                      <Newspaper className="w-3.5 h-3.5 mr-1" />
                      Cmiru Blog
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">2025.10</span>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                    GitHub Spec-kitの内部動作から学ぶ、仕様駆動開発（SDD）
                  </h3>
                  <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                    GitHub CopilotのようなAIツールを活用しつつ、どのように仕様を中心においた開発サイクルを回していくかについての考察。
                  </p>
                  <div className="mt-4">
                    <a href="https://cmiru.com/corporate/blog/b85328ba-7223-4fa3-a59a-4e3ca7cbb6fe" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-neutral-500 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" /> 記事を読む
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>
          </motion.section>

          {/* ========== Projects セクション ========== */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 scroll-mt-24"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <Card className="flex flex-col h-full hover:border-neutral-300 transition-colors shadow-sm">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start text-neutral-900">
                    Personal Work
                    <a href="https://github.com/nekomanma91823" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </CardTitle>
                  <CardDescription>Software Engineering / NLP</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-neutral-600">
                    自然言語処理や各種Web技術に関する個人的な開発物・検証コードなどをGitHub上で管理しています。
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pb-6">
                  <Badge variant="default">TypeScript</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Python</Badge>
                </CardFooter>
              </Card>

            </div>
          </motion.section>

          {/* ================= Footer ================= */}
          <footer className="pt-24 pb-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Takuma Namisaki. All rights reserved.</p>
          </footer>

        </main>
      </div>

      {/* ================= モバイル向け フローティング・ハンバーガーメニュー ================= */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-3 bg-neutral-900 text-white rounded-full shadow-lg hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
        aria-label="メニューを開く"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* メニューオーバーレイ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors focus:outline-none bg-neutral-100 rounded-full"
                    aria-label="メニューを閉じる"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="group flex flex-col items-center text-xl font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="w-6 h-6" />
                        {link.name}
                      </div>
                      <span className="h-0.5 w-0 bg-neutral-900 group-hover:w-full transition-all duration-300 mt-2"></span>
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
