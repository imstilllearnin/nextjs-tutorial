import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function F2() {
  return (
    <div>
      <Title>F2 Page</Title>

      <Link href="/f4">
        <Button className="ml-1">F4</Button>
      </Link>
    </div>
  );
}
