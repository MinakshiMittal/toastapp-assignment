import { AddToCartButton, CounterButton } from "../components";
import VegIcon from "../assets/VegIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  cartSelector,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";

export const HorizontalProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(cartSelector);
  const [cart, setCart] = useState(itemsInCart.itemsInCart);

  useEffect(() => {
    setCart(itemsInCart.itemsInCart);
  }, [itemsInCart.itemsInCart]);

  const handleDecrease = () => {
    const item = cart?.filter((item) => item.id === product.id)[0];
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ item: product }));
    } else {
      dispatch(
        removeFromCart([...cart?.filter((item) => item.id !== product.id)])
      );
    }
  };

  const isItemInCart = () => {
    return cart?.find((item) => item.id === product.id) !== undefined;
  };
  return (
    <div className="flex items-center w-full shadow-inner-default rounded-xl my-4 bg-white-300">
      <img
        src={product.image}
        alt="product cover"
        className="rounded-xl m-2 h-20 w-20"
      />
      <div className="flex-col justify-start w-full">
        <p className="text-gray-200 font-medium">{product.name}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={VegIcon} alt="veg icon" />
            <p className="pl-2 font-medium text-sm text-gray-200">₹{product.price}</p>
          </div>
          <div>
            {!isItemInCart() ? (
              <AddToCartButton
                onClick={() =>
                  dispatch(addToCart([...cart, { ...product, quantity: 1 }]))
                }
              />
            ) : (
              <CounterButton
                handleDecrease={handleDecrease}
                handleIncrease={() =>
                  dispatch(increaseQuantity({ item: product }))
                }
                quantity={
                  isItemInCart()
                    ? cart?.filter((item) => item.id === product.id)[0].quantity
                    : 0
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
