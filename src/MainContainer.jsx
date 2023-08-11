import { useHelper } from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";
import Earth from "../public/assets/Earth";
import { useRef } from "react";
import * as THREE from "three";

const MainContainer = () => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();
  //   number is size of helper
  //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  //   useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");

  return (
    <>
      <color attach="background" args={["black"]} />

      <AnimatedStars />
      <directionalLight
        castShadow
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={3}
        // color={0xff0000}
      />
      <directionalLight
        castShadow
        ref={directionalLightRefTwo}
        position={[0, 0, -10]}
      />
      <Earth displacementScale={0.15} />
    </>
  );
};

export default MainContainer;
