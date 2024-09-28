import React, { useEffect, useRef } from "react";

const ParallaxSection = ({ children, speed = 0.5 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const section = sectionRef.current;
      if (section) {
        section.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className="relative">
      {children}
    </div>
  );
};

export default ParallaxSection;
