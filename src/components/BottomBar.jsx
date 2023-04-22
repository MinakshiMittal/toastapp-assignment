import { IconWithShadow } from "../elements";
import BoltIcon from "../assets/BoltIcon.svg";
import CartIcon from "../assets/CartIcon.svg";
import BookIcon from "../assets/BookIcon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/slices/cartSlice";

export const BottomBar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("book");
  const itemsInCart = useSelector(cartSelector);

  useEffect(() => setActiveButton("book"), []);

  const handleCart = () => {
    navigate("/place-order");
    setActiveButton("cart");
  };

  return (
    <div className="flex items-center justify-center fixed bottom-0 w-full px-8 py-4 bg-white-100">
      <IconWithShadow
        src={BoltIcon}
        alt="bolt icon"
        onClick={() => setActiveButton("bolt")}
        className={`mr-24 ${
          activeButton === "bolt" ? "shadow-inner-default" : ""
        }`}
      />
      <IconWithShadow
        src={BookIcon}
        alt="book icon"
        onClick={() => setActiveButton("book")}
        className={`mr-24 ${
          activeButton === "book" ? "shadow-inner-default" : ""
        }`}
      />
      <div className="relative">
        {itemsInCart.itemsInCart.length ? (
          <div className="absolute text-white rounded-full w-5 h-5 text-xs flex items-center bg-red justify-center z-40 bottom-6 left-6">
            {itemsInCart.itemsInCart.length}
          </div>
        ) : (
          <></>
        )}

        <IconWithShadow
          src={CartIcon}
          alt="cart icon"
          onClick={handleCart}
          className={`${activeButton === "cart" ? "shadow-inner-default" : ""}`}
        />
      </div>
    </div>
  );
};
