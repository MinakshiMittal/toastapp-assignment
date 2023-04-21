import VegIcon from "../assets/VegIcon.svg";
import { AddToCartButton } from "..";

export const ProductCard = ({ product }) => {
  return (
    <div className="shadow-inner-default w-48 m-1 rounded-lg bg-white-300">
      <img src={product.image} alt="product cover" className="w-48 h-32" />
      <div className="flex items-start m-2">
        <img src={VegIcon} alt="veg icon" className="mt-[2px] mr-1" />
        <p className="text-sm text-gray-200 font-medium">{product.name}</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-sm text-gray-200 font-medium">₹ {product.price}</p>
        <AddToCartButton />
      </div>
    </div>
  );
};
