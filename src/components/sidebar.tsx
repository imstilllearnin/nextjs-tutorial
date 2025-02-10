"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarContent, setSidebarContent] = useState([
    ["DL", "Default Text", "/"],
  ]);
  return (
    <>
      <div className="top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg">
        {sidebarContent.map((item, index) => (
          <SidebarIcon
            key={index}
            icon={item[0]}
            text={item[1]}
            href={item[2]}
          />
        ))}
      </div>
    </>
  );
}

export function SidebarIcon({ icon, text, href = "tooltip" }) {
  return (
    <div className="sidebar-icon group">
      <Link href={href}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </Link>
    </div>
  );
}
