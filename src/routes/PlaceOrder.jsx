import { IconWithShadow } from "../elements";
import ArrowLeft from "../assets/ArrowLeft.svg";
import FeedbackIcon from "../assets/FeedbackIcon.svg";
import { useNavigate } from "react-router-dom";
import { Accordion, CounterButton } from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/slices/cartSlice";
import VegIcon from "../assets/VegIcon.svg";

export const PlaceOrder = () => {
  const navigate = useNavigate();
  const [currentOrderAccordionOpen, setCurrentOrderAccordionOpen] =
    useState(false);
  const [previousOrderAccordionOpen, setPreviousOrderAccordionOpen] =
    useState(false);

  const itemsInCart = useSelector(cartSelector);

  return (
    <>
      <div className="py-7 px-2 pr-4 shadow-default rounded-b-xl bg-white">
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
      <div>
        <Accordion
          text="Current Order"
          onClick={() =>
            setCurrentOrderAccordionOpen(!currentOrderAccordionOpen)
          }
          accordionOpen={currentOrderAccordionOpen}
        />
        <div className="shadown-inner-default">
          {itemsInCart.itemsInCart.map((item) => {
            return (
              <div>
                <img src={VegIcon} alt="veg icon" />
                <p>{item.name}</p>
                <CounterButton quantity={item.quantity} />
              </div>
            );
          })}
        </div>
      </div>
      <Accordion
        text="Previous Order"
        onClick={() =>
          setPreviousOrderAccordionOpen(!previousOrderAccordionOpen)
        }
        accordionOpen={previousOrderAccordionOpen}
      />
    </>
  );
};
