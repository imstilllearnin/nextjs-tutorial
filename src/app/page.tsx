import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="rounded-md">
      <h1 className="text-3x1 font-bold underline mb-1">Welcome Home Bitch!</h1>
      <ul>
        <li>
          <Button className="m-1">
            <Link href="/blog">Blog</Link>
          </Button>
        </li>
        <li>
          <Button className="m-1">
            <Link href="/products">products</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
