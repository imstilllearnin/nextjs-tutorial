import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div>
      <Title>Welcome Home Bitch!!</Title>
      <ul>
        <li>
          <Link href="/blog">
            <Button className="m-1">Blog</Button>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <Button className="m-1">products</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
