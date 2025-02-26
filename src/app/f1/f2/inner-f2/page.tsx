import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InnerF2() {
  return (
    <div>
      <Title>Inner F2 Page</Title>
      <Link href="/f5">
        <Button className="m-1">F5</Button>
      </Link>
    </div>
  );
}
