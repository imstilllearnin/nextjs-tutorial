export default function ProductDetails({
    params,
}: {
    params: {productid: string};
}) {
    return(
        <>
            <h1>Details About Product {params.productid}</h1>;
        </>
    )
}