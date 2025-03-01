import { cn } from "@/lib/utils";
import { ITypographyList } from "@/types/typography-list-interface";

export function TypographyUL({ children, className }: ITypographyList) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyOL({ children, className }: ITypographyList) {
  return (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}>
      {children}
    </ol>
  );
}

export function TypographyLI({ children, className }: ITypographyList) {
  return <li className={cn("mt-2", className)}>{children}</li>;
}
