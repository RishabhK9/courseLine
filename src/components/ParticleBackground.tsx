import React, { useCallback } from "react";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.default),
  {
    ssr: false,
  }
);
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={
        {
          // Your particle options here
        }
      }
    />
  );
};

export default ParticleBackground;
