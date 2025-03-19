import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyLead({ children, className }: ITypography) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}
