export default async function Page({
  params,
}: {
  params: Promise<{
    productid: string;
  }>;
}) {
  const { productid } = await params;

  return (
    <>
      <h1>Details About Product {productid}</h1>;
    </>
  );
}
