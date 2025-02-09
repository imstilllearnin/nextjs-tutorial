import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h2>
    </>
  ); // "replace" in the link component replaces the current page with the linked one in the tab history instead of adding to it. so when user tries to go back theyll be presented w the home page instead of products.
}
