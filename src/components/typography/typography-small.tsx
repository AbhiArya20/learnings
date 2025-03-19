import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographySmall({ children, className }: ITypography) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}
