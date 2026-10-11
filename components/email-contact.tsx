"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

// メールアドレスは bot に拾われないよう、@ を含む形でページにもコードにも書かない。
// 表示は @ の代わりに肉球にし、コピーボタンを押したときだけ正しい形に組み立てる。

interface EmailContactProps {
  user: string;
  domain: string;
  labels: {
    copy: string;
    copied: string;
    hint: string; // 「🐾 を @ に置き換えてください」
  };
}

export function EmailContact({ user, domain, labels }: EmailContactProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${user}@${domain}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使えない環境では、表示されたアドレスを見て打ってもらう
    }
  };

  return (
    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="flex items-center" title={labels.hint}>
        <Mail className="w-4 h-4 mr-2" />
        {user} 🐾 {domain}
        <span className="sr-only">（{labels.hint}）</span>
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        {copied ? (
          <Check className="w-3 h-3" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
        {copied ? labels.copied : labels.copy}
      </button>
    </span>
  );
}
