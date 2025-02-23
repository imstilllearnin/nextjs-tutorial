"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h1>{error.message}</h1>
      <Button onClick={reload}>Try Again</Button>
    </div>
  );
}
