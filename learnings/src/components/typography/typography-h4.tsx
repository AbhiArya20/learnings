import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyH4({ children, className }: ITypography) {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-tight scroll-m-20",
        className
      )}
    >
      {" "}
      {children}
    </h4>
  );
}
