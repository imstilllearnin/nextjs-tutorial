import { Home, ShoppingCart, Rss, LayoutDashboard } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  //  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: Rss,
  },
  {
    title: "Dashboard",
    url: "/complex-dashboard",
    icon: LayoutDashboard,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon" className="p-4 pr-0">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* <Collapsible defaultOpen className="group/collapsible"> */}
              {/*collapsing item       */}
              {/* <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub> */}
              {/*sidebarmenuitems go in here*/}
              {/* </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible> */}
              {/*collapsing item      */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
