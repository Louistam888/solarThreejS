import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({ displacementScale }) => {
  const earthRef = useRef();
  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      "./public/assets/earthDay.jpg",
      "./public/assets/earthNormal.jpg",
      "./public/assets/earthSpecular.jpg",
      "./public/assets/earthDisplacement.jpg",
    ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={earthRef}>
      {/* args are radius, x-axis and y axis */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
        displacementMap={earthDisplacementMap}
        displacementScale={displacementScale}
      />
    </mesh>
  );
};

export default Earth;
