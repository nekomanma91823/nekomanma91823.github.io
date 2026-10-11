"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { catLinesByLocale, type Locale } from "@/data/cat-lines";

// 猫好きなのに猫アレルギー、というプロフィールにちなんだ飾り。
// 画面の右上のふちにずっと隠れていて（前足だけ見えている）、カーソルが近づく（スマホではタップする）と
// 逆さまに顔を出し、いま読んでいる項目についてひとこと話して、また隠れる。

const NOTICE_RADIUS = 90; // 前足からこの距離(px)までカーソルが近づくと顔を出す
const TALK_MS = 3500;
const HIDDEN_Y = -48; // 隠れているときに頭を上へずらす量（SVGの座標。画面の外に出る）

// いま読んでいる項目（画面の上から1/3の高さにある data-cat-topic）を探す
function findTopic(): string {
  // ページの一番下まで来たら、お礼を言う
  const footer = document.querySelector('[data-cat-topic="footer"]');
  if (footer && footer.getBoundingClientRect().bottom <= window.innerHeight) {
    return "footer";
  }

  const readingLine = window.innerHeight / 3;
  let topic = "about";
  let nearest = Infinity;
  document.querySelectorAll<HTMLElement>("[data-cat-topic]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const distance =
      rect.top <= readingLine && rect.bottom >= readingLine
        ? 0
        : Math.min(
            Math.abs(rect.top - readingLine),
            Math.abs(rect.bottom - readingLine),
          );
    if (distance < nearest) {
      nearest = distance;
      topic = el.dataset.catTopic ?? topic;
    }
  });
  return topic;
}

interface HidingCatProps {
  locale: Locale;
  className?: string;
}

export function HidingCat({ locale, className }: HidingCatProps) {
  // 話している項目。null のときは隠れている
  const [topic, setTopic] = useState<string | null>(null);
  const catRef = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const lines = catLinesByLocale[locale];

  const popOut = () => setTopic((current) => current ?? findTopic());

  // ひとこと話したら隠れる
  useEffect(() => {
    if (topic === null) return;
    const timer = setTimeout(() => setTopic(null), TALK_MS);
    return () => clearTimeout(timer);
  }, [topic]);

  // マウスが前足に近づいた瞬間に顔を出す（近くに居続けても、もう一度は出ない）
  useEffect(() => {
    let wasNear = false;
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const pawsX = rect.left + rect.width / 2;
      const pawsY = rect.top + rect.height * 0.1;
      const near =
        Math.hypot(e.clientX - pawsX, e.clientY - pawsY) < NOTICE_RADIUS;
      if (near && !wasNear) popOut();
      wasNear = near;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  // タップでも顔を出す
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.pointerType !== "mouse") popOut();
  };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <div className="relative">
        {/* 猫の絵。前足と頭だけがタップを受け、その下の本文の操作は邪魔しない */}
        <svg
          ref={catRef}
          viewBox="0 0 64 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none block h-9 w-12 text-neutral-700 lg:h-10.5 lg:w-14"
          onPointerDown={handlePointerDown}
        >
          {/* 首と、逆さまの頭（画面の上の外から下りてくる） */}
          <motion.g
            className="pointer-events-auto"
            initial={false}
            animate={{ y: topic !== null ? 0 : HIDDEN_Y }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 240, damping: 16 }
            }
          >
            <path className="fill-white" d="M25 -24 V16 H39 V-24" />
            <g transform="rotate(180 32 27)">
              <path
                className="fill-white"
                d="M18 33 C16.5 25 17.5 18 20 12 L27.5 19.5 C30.5 18.5 33.5 18.5 36.5 19.5 L44 12 C46.5 18 47.5 25 46 33 C44.5 39.5 38.5 43 32 43 C25.5 43 19.5 39.5 18 33 Z"
              />
              <path d="M23.5 28 q2.5 2 5 0 M35.5 28 q2.5 2 5 0" />
              <path d="M29 32.5 q1.5 1.8 3 0 q1.5 1.8 3 0" />
              <path d="M13 30 l6 1.5 M13 34.5 l6 -0.5 M51 30 l-6 1.5 M51 34.5 l-6 -0.5" />
            </g>
          </motion.g>

          {/* 画面のふちにかかった前足（いつも見えている） */}
          <g className="pointer-events-auto">
            {/* タップしやすいよう、前足のまわりを少し広めに当たり判定にする */}
            <rect x="4" y="0" width="56" height="16" fill="transparent" stroke="none" />
            <path className="fill-white" d="M7 -2 V5 a6 6 0 0 0 12 0 V-2" />
            <path className="fill-white" d="M45 -2 V5 a6 6 0 0 0 12 0 V-2" />
            <path d="M11 11 v-2.5 M15 11 v-2.5 M49 11 v-2.5 M53 11 v-2.5" />
          </g>
        </svg>

        <AnimatePresence>
          {topic !== null && (
            <motion.p
              className="absolute top-full right-0 mt-1 w-max max-w-[17rem] text-balance [word-break:auto-phrase] rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs leading-relaxed text-neutral-700 shadow-sm"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, delay: reduceMotion ? 0 : 0.2 }}
            >
              {lines[topic] ?? lines.about}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
