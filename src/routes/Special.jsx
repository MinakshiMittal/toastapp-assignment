import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components";
import { BaseLayout } from "../layout";
import { apiFetchSpecialProducts } from "../services/apiFetchSpecialProducts";
import { fetchProducts, productsSelector } from "../store/slices/productsSlice";

export const Special = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const [specialProducts, setSpecialProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const productsResponse = await apiFetchSpecialProducts();
      dispatch(fetchProducts({ products: productsResponse }));
      setSpecialProducts(products.products);
    })();
  }, [specialProducts, products.products, dispatch]);

  return (
    <BaseLayout menuOption="Special">
      <div className="flex items-center justify-center flex-wrap w-full">
        {specialProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </BaseLayout>
  );
};
