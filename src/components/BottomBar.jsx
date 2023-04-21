import { IconWithShadow } from "../elements";
import BoltIcon from "../assets/BoltIcon.svg";
import CartIcon from "../assets/CartIcon.svg";
import BookIcon from "../assets/BookIcon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const BottomBar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => setActiveButton(""), []);

  const handleCart = () => {
    navigate("/cart");
    setActiveButton("cart");
  };

  return (
    <div className="flex items-center fixed bottom-0 w-full px-8 py-4 bg-white-400">
      <IconWithShadow
        src={BoltIcon}
        alt="bolt icon"
        onClick={() => setActiveButton("bolt")}
        className={`${activeButton === "bolt" ? "shadow-inner-default" : ""}`}
      />
      <IconWithShadow
        src={BookIcon}
        alt="book icon"
        onClick={() => setActiveButton("book")}
        className={`${activeButton === "book" ? "shadow-inner-default" : ""}`}
      />
      <IconWithShadow
        src={CartIcon}
        alt="cart icon"
        onClick={handleCart}
        className={`${activeButton === "cart" ? "shadow-inner-default" : ""}`}
      />
    </div>
  );
};
