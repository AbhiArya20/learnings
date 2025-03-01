import { cn } from "@/lib/utils";

export function HorizontalLine({ className }: { className?: string }) {
  return <hr className={cn("my-6 border-t border-gray-300", className)} />;
}
