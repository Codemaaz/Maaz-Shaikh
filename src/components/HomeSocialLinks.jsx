import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeSocialLinks = ({ data }) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Link
      to={data.uri}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[1.2px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <motion.div className="absolute inset-1 blur-md -z-10 bg-gradient-to-br from-primary to-secondary" />
      )}
      <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
        <data.Icon className={`text-lg text-WHITE`} />
      </div>
    </Link>
  );
};

export default HomeSocialLinks;


{
  /*
  import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HomeSocialLinks = ({ data, index }) => {
  const [isHoverred, setHoverrd] = useState(false);
  return (
    <Link
    to={data.uri}
      // href={data.uri}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[1.2px] cursor-pointer"
      onMouseEnter={() => setHoverrd(true)}
      onMouseLeave={() => setHoverrd(false)}
    >
      {isHoverred && (
        <motion.div
          className={`absolute inset-1 blur-md -z-10 bg-gradient-to-br from-primary to-secondary `}
        ></motion.div>
      )}
      <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
        <data.Icon className=' text-lg text-WHITE' />
      </div>
    </Link>
  );
};

export default HomeSocialLinks;
*/
}

