import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-2">Product List</h1>
      <Link href="/products/1">
        <Button className="m-1">Product 1</Button>
      </Link>
      <Link href="/products/2">
        <Button className="m-1">Product 2</Button>
      </Link>
      <Link href="/products/3">
        <Button className="m-1">Product 3</Button>
      </Link>
    </>
  ); // "replace" in the link component replaces the current page with the linked one in the tab history instead of adding to it. so when user tries to go back theyll be presented w the home page instead of products.
}
