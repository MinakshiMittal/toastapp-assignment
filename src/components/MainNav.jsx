import Logo from "../assets/Logo.svg";
import RecordVoiceIcon from "../assets/RecordVoiceIcon.svg";
import { IconWithShadow } from "../elements";
import TagIcon from "../assets/TagIcon.svg";
import { menuOptions } from "../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainNav = ({ menuOption }) => {
  const [activeTab, setActiveTab] = useState(menuOption);
  const navigate = useNavigate();

  const handleClick = (option) => {
    setActiveTab(option);
    if (option === "Special" || option === "Main") {
      navigate(`/${option.toLowerCase()}`);
    }
  };

  return (
    <div className="pt-8 px-4 shadow-default rounded-b-xl bg-white">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <p className="font-semibold leading-4 ml-2">Sacred Earth Cafe</p>
        </div>
        <div className="flex items-center">
          <IconWithShadow
            src={RecordVoiceIcon}
            alt="record voice icon"
            className="mr-4"
          />
          <IconWithShadow src={TagIcon} alt="tag icon" />
        </div>
      </div>
      <div className="overflow-hidden mt-8">
        <div className="overflow-x-auto flex items-center">
          {menuOptions.map((option) => {
            return (
              <p
                className={`w-1/4 mx-2 px-2 pb-3 text-sm font-semibold text-center cursor-pointer ${
                  activeTab === option.name
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-100"
                }`}
                key={option.id}
                onClick={() => handleClick(option.name)}
              >
                {option.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
