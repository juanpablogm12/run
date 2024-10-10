"use client";

import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  HomeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Inicio", href: "/protected/home", icon: HomeIcon },
    { name: "Vehiculos", href: "/protected/vehicles", icon: TruckIcon },
    {
      name: "Ordenes",
      href: "/protected/orders",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "Mecanicos",
      href: "/protected/mechanics",
      icon: WrenchScrewdriverIcon,
    },
    { name: "Ajustes", href: "/protected/settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="w-1/5 h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
