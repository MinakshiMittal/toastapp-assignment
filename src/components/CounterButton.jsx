import MinusIcon from "../assets/MinusIcon.svg";
import PlusIcon from "../assets/PlusIcon.svg";

export const CounterButton = () => {
  return (
    <button className="shadow-default text-sm font-medium text-gray-200">
      <img
        src={MinusIcon}
        alt="minus icon"
        className="shadow-inner-default rounded-full py-3 px-2"
      />
      1
      <img
        src={PlusIcon}
        alt="plus icon"
        className="shadow-inner-default rounded-full p-2"
      />
    </button>
  );
};
