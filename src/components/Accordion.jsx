import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";

export const Accordion = ({ text, accordionOpen, onClick }) => {
  return (
    <div className="flex items-center justify-between px-4 cursor-pointer" onClick={onClick}>
      <p className="font-medium text-gray-200 text-sm">{text}</p>
      <div className="h-[1px] border border-gray-200 opacity-10 w-2/3"></div>
      <img
        src={accordionOpen ? ArrowDown : ArrowUp}
        alt={`${accordionOpen ? "arrow down icon" : "arrow up icon"}`}
      />
    </div>
  );
};
