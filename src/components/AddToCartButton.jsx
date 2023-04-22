import PlusIcon from "../assets/PlusIcon.svg";

export const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className="shadow-default flex items-center justify-center font-medium text-gray-200 text-sm p-1 rounded-xl bg-white-500"
      onClick={onClick}
    >
      <img
        src={PlusIcon}
        alt="add icon"
        className="p-2 shadow-inner-default rounded-full mr-2"
      />
      ADD
    </button>
  );
};
