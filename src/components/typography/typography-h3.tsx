import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH3({ children, className }: ITypography) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight scroll-m-20",
        className
      )}
    >
      {children}
    </h3>
  );
}
