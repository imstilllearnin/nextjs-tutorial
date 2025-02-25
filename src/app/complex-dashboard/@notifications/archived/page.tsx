import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">
        <Button>Default</Button>
      </Link>
    </Card>
  );
}
