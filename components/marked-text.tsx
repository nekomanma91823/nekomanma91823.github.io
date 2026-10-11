"use client";

import { motion, useReducedMotion } from "framer-motion";

// data/ の文章中で ==…== で囲んだ部分に蛍光ペンを引く
const MARKER_PATTERN = /==(.+?)==/g;

export function MarkedText({ text }: { text: string }) {
  // split にキャプチャを渡すと、奇数番目が ==…== の中身になる
  const parts = text.split(MARKER_PATTERN);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <Marker key={i}>{part}</Marker> : part,
      )}
    </>
  );
}

function Marker({ children }: { children: string }) {
  const reduceMotion = useReducedMotion();

  // 見た目は globals.css の .marker。ここではペンを引く幅だけを動かす
  return (
    <motion.mark
      className="marker"
      initial={{ backgroundSize: "0% 55%" }}
      whileInView={{ backgroundSize: "100% 55%" }}
      viewport={{ once: true, amount: 0.9 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.8, ease: "easeOut", delay: 0.2 }
      }
    >
      {children}
    </motion.mark>
  );
}
