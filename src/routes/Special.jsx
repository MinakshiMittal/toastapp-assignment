import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, ProductCard } from "../components";
import { BaseLayout } from "../layout";
import { apiFetchSpecialProducts } from "../services/apiFetchSpecialProducts";
import { fetchProducts, productsSelector } from "../store/slices/productsSlice";
import Welcome from "../assets/Welcome.png";

export const Special = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const [specialProducts, setSpecialProducts] = useState(products.products);

  useEffect(() => {
    (async () => {
      const productsResponse = await apiFetchSpecialProducts();
      dispatch(fetchProducts({ products: productsResponse }));
      setSpecialProducts(products.products);
    })();
  }, [specialProducts, products.products, dispatch]);

  const [todaysSpecialAccordionOpen, setTodaysSpecialAccordionOpen] =
    useState(true);

  return (
    <BaseLayout menuOption="Special">
      <div className="shadow-default rounded-xl w-full px-2">
        <img src={Welcome} alt="welcome" className="rounded-xl p-1 w-full" />
      </div>
      <div className="mt-8 bg-white-400">
        <Accordion
          text="Today's Special"
          accordionOpen={todaysSpecialAccordionOpen}
          onClick={() =>
            setTodaysSpecialAccordionOpen(!todaysSpecialAccordionOpen)
          }
        />
        {todaysSpecialAccordionOpen && (
          <div className="flex items-center justify-center flex-wrap w-full mt-4">
            {specialProducts?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};
