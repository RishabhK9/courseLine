import React from "react";

const AnimatedHoneycomb = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="honeycomb"
          x="0"
          y="0"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(0)"
        >
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="rgba(234, 218, 162, 0.2)"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="240,1000"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#honeycomb)">
          <animate
            attributeName="x"
            from="-56"
            to="0"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            from="-100"
            to="0"
            dur="30s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default AnimatedHoneycomb;
