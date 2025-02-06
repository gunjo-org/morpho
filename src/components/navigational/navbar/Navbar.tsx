"use client";

import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

import {
  BiHome,
  BiSolidHome,
  BiPlanet,
  BiSolidPlanet,
  BiCog,
  BiSolidCog,
  BiDonateHeart,
  BiSolidDonateHeart,
} from "react-icons/bi";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";
import { FaBell, FaRegBell } from "react-icons/fa6";
import { getUnreadNotificationsCount } from "@/lib/api/bsky/notification";
import { useQuery } from "@tanstack/react-query";
import { useAgent } from "@/app/providers/agent";

export default function Navbar() {
  const agent = useAgent();
  const pathname = usePathname();

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
    <nav className="inline-flex flex-col gap-5 lg:ml-1.5">
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
        href="/i/settings"
        icon={<BiCog className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidCog className="text-2xl md:text-3xl" />}
        title="Settings"
        isActive={pathname.includes("settings")}
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
