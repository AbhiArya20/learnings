import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyLarge({ children, className }: ITypography) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}
