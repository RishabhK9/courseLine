import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  path: string;
  viewBox: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ path, viewBox }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className="w-16 h-16 text-[#0d3362]"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d={path}
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  );
};

export default AnimatedIcon;
