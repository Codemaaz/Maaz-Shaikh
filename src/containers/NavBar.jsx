import React from "react";
import { Menus } from "../utils/helper";
import MenuItem from "../components/MenuItem";

const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 flex justify-center items-end w-full h-auto z-50 pb-8 md:h-screen md:w-32 md:items-center md:pb-0 md:top-0">
      <div className="px-4 py-3 md:py-12 rounded-full border border-[rgba(255,255,255,0.6)] flex flex-row md:flex-col items-center justify-center gap-8 duration-200 backdrop-blur-xl ">
        {Menus &&
          Menus.map((item, index) => (
            <MenuItem key={index} menu={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Header;
