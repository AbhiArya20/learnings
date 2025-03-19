import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyP({ children, className }: ITypography) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
