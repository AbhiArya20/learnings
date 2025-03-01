import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

type TooltipProps = {
  content: string | ReactNode;
  children: React.ReactNode;
};

export default function TooltipDemo({ children, content }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          {typeof content === "string" ?
            <p>{content}</p>
          : content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
