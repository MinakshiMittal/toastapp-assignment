import { MainNav, BottomBar } from "../components";

export const BaseLayout = ({children, menuOption}) => {
  return (
    <div className="w-full bg-white-400 h-screen">
      <MainNav menuOption={menuOption} />
      {children}
      <BottomBar />
    </div>
  );
};
