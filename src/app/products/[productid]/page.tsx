import { Metadata } from "next";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    productid: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productid } = await params;

  return {
    title: `Product ${productid}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productid } = await params;

  return (
    <>
      <h1>Details About Product {productid}</h1>
    </>
  );
}
