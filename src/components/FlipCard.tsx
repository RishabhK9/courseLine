import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedIcon from "./AnimatedIcon";

interface FlipCardProps {
  title: string;
  description: string;
  iconPath: string;
  iconViewBox: string;
  backContent: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  description,
  iconPath,
  iconViewBox,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flip-card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <AnimatedIcon path={iconPath} viewBox={iconViewBox} />
          <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
        <div
          className="flip-card-back absolute w-full h-full backface-hidden flex items-center justify-center p-6 bg-[#eadaa2] rounded-lg shadow-lg"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-gray-800 text-center">{backContent}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
