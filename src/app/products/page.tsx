import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  return (
    <>
      <h1 className="m-1">Product list</h1>
      <h2>
        <Button className="m-1">
          <Link href="/products/1">Product 1</Link>
        </Button>
      </h2>
      <h2>
        <Button className="m-1">
          <Link href="/products/2">Product 2</Link>
        </Button>
      </h2>
      <h2>
        <Button className="m-1">
          <Link href="/products/3" replace>
            Product 3
          </Link>
        </Button>
      </h2>
    </>
  ); // "replace" in the link component replaces the current page with the linked one in the tab history instead of adding to it. so when user tries to go back theyll be presented w the home page instead of products.
}
