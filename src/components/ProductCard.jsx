import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VegIcon from "../assets/VegIcon.svg";
import { AddToCartButton } from "../components";
import {
  addToCart,
  cartSelector,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import { CounterButton } from "./CounterButton";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(cartSelector);
  const [cart, setCart] = useState(itemsInCart.itemsInCart);

  useEffect(() => {
    setCart(itemsInCart.itemsInCart);
    console.log(itemsInCart.itemsInCart);
  }, [itemsInCart.itemsInCart]);

  const isItemInCart = () => {
    return cart?.find((item) => item.id === product.id) !== undefined;
  };

  const handleDecrease = () => {
    console.log("ko");
    const item = cart?.filter((item) => item.id === product.id)[0];
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ item: product }));
    } else {
      dispatch(
        removeFromCart([...cart?.filter((item) => item.id !== product.id)])
      );
    }
  };

  return (
    <div className="shadow-inner-default w-48 m-1 rounded-lg bg-white-300">
      <img src={product.image} alt="product cover" className="w-48 h-32" />
      <div className="flex items-start m-2">
        <img src={VegIcon} alt="veg icon" className="mt-[2px] mr-1" />
        <p className="text-sm text-gray-200 font-medium">{product.name}</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-sm text-gray-200 font-medium">₹ {product.price}</p>
        {!isItemInCart() ? (
          <AddToCartButton
            onClick={() =>
              dispatch(addToCart([...cart, { ...product, quantity: 1 }]))
            }
          />
        ) : (
          <CounterButton
            handleDecrease={handleDecrease}
            handleIncrease={() => dispatch(increaseQuantity({ item: product }))}
            quantity={
              isItemInCart()
                ? cart?.filter((item) => item.id === product.id)[0].quantity
                : 0
            }
          />
        )}
      </div>
    </div>
  );
};
