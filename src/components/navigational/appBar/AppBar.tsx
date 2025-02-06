"use client";

import { usePathname } from "next/navigation";
import NavItem from "../navbar/NavItem";
import { getUnreadNotificationsCount } from "@/lib/api/bsky/notification";
import { useQuery } from "@tanstack/react-query";
import { BiHome, BiPlanet, BiSolidHome, BiSolidPlanet } from "react-icons/bi";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";
import { BiDonateHeart } from "react-icons/bi";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useAgent } from "@/app/providers/agent";

export default function AppBar() {
  const pathname = usePathname();
  const agent = useAgent();

  const {
    data: notificationsCount,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["notificationsCount"],
    queryFn: async () => {
      return getUnreadNotificationsCount(agent);
    },
    refetchInterval: 10000,
  });

  return (
    <nav className="bg-skin-base border-skin-base fixed bottom-0 z-40 flex w-full justify-between gap-6 overflow-auto border-t px-6 pb-8 pt-1 transition-all ease-linear md:hidden">
      <NavItem
        href="/i/home"
        icon={<BiHome className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidHome className="text-2xl md:text-3xl" />}
        title="Home"
        isActive={pathname === "/i/home"}
      />
      <NavItem
        href="/i/search"
        icon={<PiMagnifyingGlassBold className="text-2xl md:text-3xl" />}
        activeIcon={<PiMagnifyingGlassFill className="text-2xl md:text-3xl" />}
        title="Search"
        isActive={pathname.includes("search")}
      />
      <NavItem
        href="/i/feeds"
        icon={<BiPlanet className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidPlanet className="text-2xl md:text-3xl" />}
        title="Feeds"
        isActive={pathname === "/i/feeds"}
      />
      <NavItem
        href="/i/lists"
        icon={<HiOutlineClipboardList className="text-2xl md:text-3xl" />}
        activeIcon={<HiClipboardList className="text-2xl md:text-3xl" />}
        title="Lists"
        isActive={pathname === "/i/lists"}
      />
      <NavItem
        href="/i/notifications"
        icon={<FaRegBell className="text-2xl md:text-3xl" />}
        activeIcon={<FaBell className="text-2xl md:text-3xl" />}
        title="Notifications"
        isActive={pathname.includes("notifications")}
        badge={notificationsCount ?? 0}
      />
      <NavItem
        href="/i/sponsorship"
        icon={<BiDonateHeart className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidDonateHeart className="text-2xl md:text-3xl" />}
        title="Sponsorship"
        isActive={pathname === "/i/sponsorship"}
      />
    </nav>
  );
}
