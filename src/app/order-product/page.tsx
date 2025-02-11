"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("purrr");
    router.push("/");
  };

  return (
    <>
      <h1 className="text-5xl m-4">Order Product</h1>
      <Button onClick={handleClick} className="m-4">
        Place Order
      </Button>
    </>
  );
}
