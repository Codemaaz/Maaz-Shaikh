import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skillName, percentage, color, skillIcon }) => {
  return (
    <div className="grid grid-cols-2 border border-texlight/50 rounded-md px-4 py-2 cursor-pointer group w-full items-center justify-between relative gap-2 h-fit">
      <div className="flex-1 flex-col items-start justify-start flex gap-2">
        <div className="text-sm flex justify-start text-texlight">{skillName}</div>
      </div>
      <div className="flex justify-end text-xl" style={{ color: color }}>
        {skillIcon}
      </div>
      <div className=" col-span-2 w-full h-1 rounded-md overflow-hidden bg-[rgba(255,255,255,0.2)] relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: percentage }}
          transition={{ duration: 1.5 }}
          className="h-full absolute top-0 left-"
          style={{ background: color }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillCard;