import { Title } from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog", // you can like turn this into an object and like set the absolute: to whatever to ignore the template purrrr
};

export default function Blog() {
  return <Title>My Blog</Title>;
}
