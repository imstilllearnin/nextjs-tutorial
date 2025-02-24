"use client";

import { Button } from "@/components/ui/button";
import "./global.css";
import { useState } from "react";

const ErrorSimulator = ({
  message = "Error simulated.",
}: {
  message?: string;
}) => {
  const [error, seterror] = useState(false);

  if (error) {
    throw new Error(message);
  }
  return (
    <Button title="Simulate an error" onClick={() => seterror(true)}>
      Simulate Error
    </Button>
  );
};

interface WrapperProps {
  children: React.ReactNode;
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg relative p-4 border border-neutral-300 ">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
