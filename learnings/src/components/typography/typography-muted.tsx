import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyMuted({ children, className }: ITypography) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}
