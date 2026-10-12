import { Sparkles } from "lucide-react";
import { MarkedText } from "@/components/marked-text";
import { cn } from "@/lib/utils";

// プロジェクトのいちばんの成果（一覧のカードと詳細ページで使う）
export function ProjectHighlight({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={cn("flex items-start gap-2 text-sm text-neutral-800", className)}>
      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
      <span>
        <MarkedText text={text} />
      </span>
    </p>
  );
}
