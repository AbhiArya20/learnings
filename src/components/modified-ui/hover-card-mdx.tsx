import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TypographyP } from "../typography/typography-p";
import { cn } from "@/lib/utils";

type HoverCardProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
};
export default function HoverCardMDX({
  children,
  trigger,
  className,
}: HoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="inline cursor-pointer">
        <TypographyP className="font-bold text-blue-500 ">
          {trigger}
        </TypographyP>
      </HoverCardTrigger>
      <HoverCardContent
        className={cn("bg-accent w-auto max-w-screen-sm", className)}
      >
        <div className="space-x-4">{children}</div>
      </HoverCardContent>
    </HoverCard>
  );
}
