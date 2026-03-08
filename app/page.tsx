"use client";

import { motion } from "framer-motion";
import { Github, BookOpen, MapPin, ExternalLink, Newspaper, Award, User, Briefcase, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { careerData } from "@/data/career";

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "Career", href: "#career", icon: Briefcase },
  { name: "Publications", href: "#publications", icon: Award },
  { name: "Articles", href: "#articles", icon: Newspaper },
  { name: "Projects", href: "#projects", icon: Code },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-foreground font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        
        {/* ================= サイドバー (左カラム) ================= */}
        <aside className="lg:w-1/3 lg:fixed lg:h-screen lg:overflow-y-auto px-6 py-12 lg:py-24 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-zinc-50 z-10">
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
            <nav className="mt-8 hidden lg:flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="group flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors w-fit"
                >
                  <span className="w-8 h-[1px] bg-neutral-300 mr-4 group-hover:w-12 group-hover:bg-neutral-900 transition-all duration-300"></span>
                  {link.name}
                </a>
              ))}
            </nav>

            {/* SP用ナビゲーション (横並びスクロール) */}
            <nav className="mt-4 flex lg:hidden overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="whitespace-nowrap flex items-center gap-1.5 snap-start hover:text-blue-600 transition-colors bg-white px-3 py-1.5 rounded-full border border-neutral-200 shadow-sm"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </aside>

        {/* ================= メインコンテンツ (右カラム) ================= */}
        <main className="lg:ml-[33.333333%] lg:w-2/3 px-6 py-12 lg:py-24 space-y-24">
          
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
              <p className="text-neutral-600 leading-relaxed">
                大阪公立大学 現代システム科学域 知識情報システム学類（情報学研究科 自然言語処理研究室）所属。<br/>
                株式会社Cmiruでエンジニアとして活動しています。<br/>
                好奇心旺盛でマイブームがころころ入れ替わります。よく食べ、よく遊び、夜更かしをします。
                猫が好きなのに、猫アレルギーなところが弱点です。
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['NLP', '自然言語処理', 'UI/UX', '猫'].map((kw) => (
                    <Badge key={kw} variant="secondary">{kw}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Web Development', 'Software Engineering', 'React', 'TypeScript', 'Python'].map((kw) => (
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
            <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b border-neutral-200 pb-2 inline-block">
              Career
            </h2>
            <div className="space-y-8 border-l border-neutral-200 ml-3 pl-6 relative">
              {careerData.map((item) => (
                <div key={item.id} className="relative">
                  <div className={`absolute w-3 h-3 rounded-full -left-[31px] top-1.5 ring-4 ring-zinc-50 ${item.current ? "bg-blue-500" : "bg-neutral-300"}`} />
                  <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
                  {item.role && <p className="text-sm text-neutral-600 mt-1">{item.role}</p>}
                  <div className="text-xs text-neutral-500 mt-2 font-mono">
                    {item.year}.{item.month.toString().padStart(2, '0')} {item.current && ' - Present'}
                  </div>
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
              
              <Card className="hover:border-neutral-300 transition-colors shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-xs text-blue-600 font-mono">
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      国際会議 (査読付)
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">2025.08</span>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                    The 19th International Conference on Innovative Computing, Information and Control (ICICIC2025)
                  </h3>
                  <div className="mt-4">
                    <a href="http://www.icicconference.org/icicic2025/" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-neutral-500 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" /> 公式サイト
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neutral-300 transition-colors shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-xs text-blue-600 font-mono">
                      <Award className="w-3.5 h-3.5 mr-1" />
                      受賞
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">2024</span>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                    大阪公立大学ビジネスコンテスト2024 irori賞
                  </h3>
                </CardContent>
              </Card>

              <Card className="hover:border-neutral-300 transition-colors shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-xs text-blue-600 font-mono">
                      <Award className="w-3.5 h-3.5 mr-1" />
                      受賞
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">2024</span>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 leading-snug">
                    ピザの会2024 奨励賞
                  </h3>
                  <div className="mt-4">
                    <a href="https://w-pizza.com/contest-info/winner/" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-neutral-500 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" /> 詳細を見る
                    </a>
                  </div>
                </CardContent>
              </Card>

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
    </div>
  );
}
