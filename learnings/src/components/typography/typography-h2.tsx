import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH2({ children, className }: ITypography) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
