"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const nav_links = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path_name = usePathname();
  const [input, setinput] = useState("");
  return (
    <div className="flexbox flex-row">
      <div>
        <input
          type="text"
          name=""
          value={input}
          onChange={(e) => setinput(e.target.value)}
          id=""
        />
      </div>
      {nav_links.map((link) => {
        const isActive = path_name.startsWith(link.href);

        return (
          <div className="flex p-1" key={link.name}>
            <Button
              className={
                isActive
                  ? "bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-500 hover:from-blue-500 hover:to-red-500"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg transition-all duration-500 hover:from-pink-500 hover:to-purple-500"
              }
            >
              <Link href={link.href}>
                <p>{link.name}</p>
              </Link>
            </Button>
          </div>
        );
      })}
      {children}
    </div>
  );
}
