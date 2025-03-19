import { ChevronLast, Command, Plus, Search } from "lucide-react";
import * as React from "react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { TypographyLarge } from "@/components/typography/typography-large";
import { TypographySmall } from "@/components/typography/typography-small";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const { state } = useSidebar();
  const [open, setOpen] = React.useState(false);
  return (
    <form {...props}>
      <SidebarGroup className="p-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder={state === "expanded" ? "Search the docs..." : null}
            disabled
            className={cn(
              "disabled:cursor-pointer",
              state === "expanded" && "pl-8"
            )}
          />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div className="w-full h-full absolute top-0 left-0 flex justify-between items-center px-2 cursor-pointer">
                <Search className="size-4 select-none opacity-50" />
                {state === "expanded" && (
                  <div className="flex items-center justify-end  select-none opacity-50">
                    <Command className="size-4" />
                    <Plus className="size-3" strokeWidth={3} />
                    <TypographySmall className="font-sans">K</TypographySmall>
                  </div>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px] ">
              <DialogTitle className="sr-only">Settings</DialogTitle>
              <DialogDescription className="sr-only">
                Customize your settings here.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
