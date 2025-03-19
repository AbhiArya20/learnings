"use client";
import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography/typography-small";
import { TypographyMuted } from "@/components/typography/typography-muted";

type Team = {
  name: string;
  logo: React.ElementType;
  plan: string;
  bgColor: string;
  textColor: string;
};

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const [activeTeam, setActiveTeam] = React.useState(0);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <TeamSwitch
                team={teams[activeTeam]}
                icon={<ChevronsUpDown className="ml-auto" />}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-card"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Topic
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(index)}
                className="gap-0 p-0"
              >
                <TeamSwitch
                  team={team}
                  icon={
                    index === activeTeam ?
                      <Check className="text-lime-500" />
                    : null
                  }
                />
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2 cursor-pointer">
              <div className="bg-background size-6 flex justify-center items-center rounded-md border">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add Topic</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

type TeamSwitchProps = {
  team: Team;
  icon?: React.ReactNode;
};

const TeamSwitch: React.FC<TeamSwitchProps> = ({ team, icon }) => {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div
        className={cn(
          "bg-sidebar-primary text-sidebar-primary-foreground aspect-square size-8 flex justify-center items-center rounded-lg",
          team.bgColor
        )}
      >
        <team.logo className={cn("size-4", team.textColor)} />
      </div>
      <div
        className={cn(
          "grid flex-1 text-sm leading-tight text-left text-nowrap"
        )}
      >
        <TypographySmall>{team.name}</TypographySmall>
        <TypographyMuted className="text-xs truncate">
          {team.plan}
        </TypographyMuted>
      </div>
      {icon}
    </SidebarMenuButton>
  );
};
