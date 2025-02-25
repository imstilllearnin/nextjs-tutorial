"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const [LoggedIn, setLoggedIn] = useState(false);

  return LoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        <div className="flex lg:flex-row sm:flex-col">{notifications}</div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      {login}
      <Button
        onClick={() => {
          setLoggedIn(true);
        }}
      >
        Login
      </Button>
    </div>
  );
}
