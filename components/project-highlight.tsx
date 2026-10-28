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
    <p className={cn("text-sm text-neutral-800", className)}>
      <MarkedText text={text} />
    </p>
  );
}
