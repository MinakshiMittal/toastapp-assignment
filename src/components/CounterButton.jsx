import MinusIcon from "../assets/MinusIcon.svg";
import PlusIcon from "../assets/PlusIcon.svg";

export const CounterButton = ({ handleIncrease, handleDecrease, quantity }) => {
  return (
    <div className="flex items-center justify-center p-1 rounded-xl shadow-default text-sm font-medium text-gray-200">
      <button>
        <img
          src={MinusIcon}
          alt="minus icon"
          className="shadow-inner-default rounded-full py-3 px-2 mr-2"
          onClick={handleDecrease}
        />
      </button>
      {quantity}
      <button>
        <img
          src={PlusIcon}
          alt="plus icon"
          className="shadow-inner-default rounded-full p-2 ml-2"
          onClick={handleIncrease}
        />
      </button>
    </div>
  );
};
