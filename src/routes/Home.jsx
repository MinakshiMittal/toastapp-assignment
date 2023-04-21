import { useEffect, useState } from "react";
import { BottomBar, MainNav, ProductCard } from "../components";
import { apiFetchSpecialProducts } from "../services/apiFetchSpecialProducts";

export const Home = () => {
  const [specialProducts, setSpecialProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const productsResponse = await apiFetchSpecialProducts();
      setSpecialProducts(productsResponse);
    })();
  }, [specialProducts]);

  return (
    <div className="w-full bg-white-400">
      <MainNav />
      <div className="flex items-center justify-center flex-wrap w-full">
        {specialProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <BottomBar />
    </div>
  );
};
