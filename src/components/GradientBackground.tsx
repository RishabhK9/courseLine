import React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f5f0e0] to-[#eadaa2]">
      {children}
    </div>
  );
};

export default GradientBackground;
