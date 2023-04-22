import { IconWithShadow } from "../elements";
import ArrowLeft from "../assets/ArrowLeft.svg";
import FeedbackIcon from "../assets/FeedbackIcon.svg";
import { useNavigate } from "react-router-dom";
import { Accordion, CounterButton } from "../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelector,
  decreaseQuantity,
  removeFromCart,
  increaseQuantity,
  placeOrder,
} from "../store/slices/cartSlice";
import VegIcon from "../assets/VegIcon.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import {
  previousOrdersSelector,
  setPreviousOrders,
} from "../store/slices/previousOrderSlice";

export const PlaceOrder = () => {
  const navigate = useNavigate();
  const [currentOrderAccordionOpen, setCurrentOrderAccordionOpen] =
    useState(true);
  const [previousOrderAccordionOpen, setPreviousOrderAccordionOpen] =
    useState(false);

  const itemsInCart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const previousOrders = useSelector(previousOrdersSelector);

  const handleDecrease = (product) => {
    const item = itemsInCart.itemsInCart.filter(
      (item) => item.id === product.id
    )[0];
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ item: product }));
    } else {
      dispatch(
        removeFromCart([
          ...itemsInCart.itemsInCart?.filter((item) => item.id !== product.id),
        ])
      );
    }
  };

  const handleClick = () => {
    navigate("/special");
    dispatch(
      setPreviousOrders({
        previousOrders: [
          ...previousOrders.previousOrders,
          ...itemsInCart.itemsInCart,
        ],
      })
    );
    dispatch(placeOrder());
  };

  return (
    <div className="bg-white-400 h-screen">
      <div className="py-7 px-2 pr-4 shadow-default rounded-b-xl bg-white-100">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <IconWithShadow
              src={ArrowLeft}
              alt="back"
              className="shadow-deep"
              onClick={() => navigate("/special")}
            />
            <p className="font-semibold text-xl text-gray-200 leading-6 ml-4">
              Place Order
            </p>
          </div>
          <IconWithShadow src={FeedbackIcon} alt="feedback icon" />
        </div>
      </div>
      <div className="my-6">
        <Accordion
          text="Current Order"
          onClick={() =>
            setCurrentOrderAccordionOpen(!currentOrderAccordionOpen)
          }
          accordionOpen={currentOrderAccordionOpen}
        />
        {currentOrderAccordionOpen && (
          <div className="shadow-inner-default m-2 px-2 py-4 my-4 rounded-xl bg-white-100">
            {itemsInCart.itemsInCart.map((item) => {
              return (
                <div
                  className="flex items-center justify-between text-gray-200 mb-6"
                  key={item.id}
                >
                  <div className="flex">
                    <img src={VegIcon} alt="veg icon" />
                    <div className="flex-col ml-2">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs font-medium">₹{item.price}</p>
                    </div>
                  </div>
                  <CounterButton
                    handleDecrease={() => handleDecrease(item)}
                    handleIncrease={() => dispatch(increaseQuantity({ item }))}
                    quantity={item.quantity}
                  />
                </div>
              );
            })}
            {itemsInCart.itemsInCart.length ? (
              <p className="text-blue-100 font-semibold underline cursor-pointer text-xs">
                Add cooking instructions
              </p>
            ) : (
              <p className="text-gray-100 font-semibold underline cursor-pointer text-xs text-center">
                Cart is empty
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <Accordion
          text="Previous Order"
          onClick={() =>
            setPreviousOrderAccordionOpen(!previousOrderAccordionOpen)
          }
          accordionOpen={previousOrderAccordionOpen}
        />
        {previousOrderAccordionOpen && (
          <div className="shadow-inner-default m-2 px-2 py-4 my-4 rounded-xl bg-white-100">
            {previousOrders.previousOrders.map((item) => {
              return (
                <div
                  className="flex items-center justify-between text-gray-200 mb-6"
                  key={item.id}
                >
                  <div className="flex">
                    <img src={VegIcon} alt="veg icon" />
                    <div className="flex-col ml-2">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs font-medium">₹{item.price}</p>
                    </div>
                  </div>
                  <p className="pr-10">{item.quantity}</p>
                </div>
              );
            })}
            {!previousOrders.previousOrders.length ? (
              <p className="text-gray-100 font-semibold underline cursor-pointer text-xs text-center">
                No previous Orders
              </p>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="fixed rounded-xl w-[97%] bottom-4 bg-gradient-to-r from-blue-200 to-blue-300 text-white flex items-center justify-between p-4"
          onClick={handleClick}
          disabled={itemsInCart.itemsInCart.length > 0 ? false : true}
        >
          <p className="font-medium text-xs">
            {itemsInCart.itemsInCart.length} Items
          </p>
          <div className="flex items-center">
            <p className="font-semibold text-sm">PLACE ORDER</p>
            <img
              src={ArrowRight}
              alt="arrow right icon"
              className="rounded-full ml-2 p-2 shadow-inner-blue"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
