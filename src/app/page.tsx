import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home Bitch!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">products</Link>
    </>
  );
}
