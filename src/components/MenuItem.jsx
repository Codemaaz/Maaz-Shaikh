import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MenuItem = ({ menu, index }) => {
  const [isHoverred, setIsHoverred] = useState(false);
  return (
    <NavLink
      className={({ isActive }) =>
        ` w-8 h-8 rounded-full flex items-center justify-center group cursor-pointer relative ${
          isActive
            ? "text-bgPrimary bg-gradient-to-br from-primary to-secondary "
            : " text-texlight "
        }`
      }
      to={menu.uri}
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
    >
      <menu.Icon className=" text-xl" />
      <AnimatePresence>
        {isHoverred && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className=" absolute bg-white rounded-md py-2 px-4 -top-16 after:absolute  after:-bottom-1  after:left-8 after:w-3 after:h-3 after:bg-white after:rotate-45"
          >
            <p className=" text-bgPrimary">{menu.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </NavLink>
  );
};

export default MenuItem;
