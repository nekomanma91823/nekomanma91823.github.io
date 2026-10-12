"use client";

import { motion } from "framer-motion";

interface RevealSectionProps {
  id: string;
  // 隠れている猫が話す話題（data/cat-lines.ts のキー）
  catTopic?: string;
  children: React.ReactNode;
}

// スクロールして画面に入ったときに、下からふわっと表示するセクション
export function RevealSection({ id, catTopic, children }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      data-cat-topic={catTopic}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-6 scroll-mt-24"
    >
      {children}
    </motion.section>
  );
}
