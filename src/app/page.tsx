import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-2">Welcome Home Bitch!</h1>
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
