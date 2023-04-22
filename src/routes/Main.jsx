import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, HorizontalProductCard } from "../components";
import { BaseLayout } from "../layout";
import { productsSelector, fetchProducts } from "../store/slices/productsSlice";
import { apiFetchSpecialProducts } from "../services/apiFetchSpecialProducts";

export const Main = () => {
  const products = useSelector(productsSelector);
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();
  const [accordionOpen, setAccordionOpen] = useState(true);

  useEffect(() => {
    (async () => {
      const productsResponse = await apiFetchSpecialProducts();
      dispatch(fetchProducts({ products: productsResponse }));
      setProductsList(products.products);
    })();
  }, [productsList, products.products, dispatch]);

  return (
    <BaseLayout menuOption="Main">
      <div className="p-4">
        <Accordion
          text="Acai bowls"
          accordionOpen={accordionOpen}
          onClick={() => setAccordionOpen(!accordionOpen)}
        />
        {accordionOpen && (
          <div>
            {productsList.map((product) => {
              return (
                <HorizontalProductCard product={product} key={product.id} />
              );
            })}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};
