import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Check,
  Command,
  Frame,
  GalleryVerticalEnd,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/components/nav-main";
import { NavProjects } from "@/components/sidebar/components/nav-projects";
import { NavUser } from "@/components/sidebar/components/nav-user";
import { TeamSwitcher } from "@/components/sidebar/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarOptInForm } from "./sidebar-opt-in-form";
import { NavSecondary } from "./nav-secondary";
import { SearchForm } from "./search-form";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
      bgColor: "bg-red-600/30",
      textColor: "text-red-600",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
      bgColor: "bg-orange-600/30",
      textColor: "text-orange-600",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
      bgColor: "bg-lime-600/30",
      textColor: "text-lime-600",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
      state: <Check className="size-4 text-lime-600" />,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="scrollbar-w-1 scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-foreground/5 scrollbar-track-rounded-full scrollbar-track-transparent">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className={state === "collapsed" ? "hidden" : "block"}>
          <SidebarOptInForm />
        </div>
        <NavSecondary items={data.navSecondary} />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
