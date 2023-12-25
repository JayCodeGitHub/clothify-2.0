async function getProducts() {
  console.log("getProducts");
  return new Promise<{ id: number; title: string; }[]>((resolve) => {
    setTimeout(() => {
      const data = [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
        { id: 3, title: "Product 3" },
      ];
      resolve(data);
    }, 2000);
  });
}

export default async function Products() {
    const data: { id: number; title: string; }[] = await getProducts();
    return (
      <div>
        {data.map((product) => (
            <div key={product.id}>
                <h1>{product.title}</h1>
            </div>
            ))}
      </div>
    )
}