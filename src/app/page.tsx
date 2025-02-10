import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3x1 font-bold underline">Welcome Home Bitch!</h1>
      <Link href="/blog">Blog</Link>
      <hr />
      <Link href="/products">products</Link>
    </>
  );
}
