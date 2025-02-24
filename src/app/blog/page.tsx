import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog", // you can like turn this into an object and like set the absolute: to whatever to ignore the template purrrr
};

export default function Blog() {
  return <h1 className="text-3xl font-bold underline mb-2">My Blog</h1>;
}
