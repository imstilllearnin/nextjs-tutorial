import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{
    productid: string;
    reviewid: string;
  }>;
}) {
  const { productid, reviewid } = await params;

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("error loading the rev.");
  }

  if (parseInt(reviewid) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewid} for product {productid}
    </h1>
  );
}
