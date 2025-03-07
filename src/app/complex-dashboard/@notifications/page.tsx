import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">
        <Button>Archived</Button>
      </Link>
    </Card>
  );
}
