import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function F1() {
  return (
    <>
      <Title>F1 Page</Title>
      <div className="flex gap-1">
        <Link href="/f1/f2">
          <Button>F2</Button>
        </Link>

        <Link href="/f3">
          <Button>F3</Button>
        </Link>
      </div>
    </>
  );
}
