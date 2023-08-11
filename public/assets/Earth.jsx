import { useTexture } from "@react-three/drei";

const Earth = () => {
  const [earthTexture] = useTexture(["./public/assets/earthDay.jpg"]);
  return (
    <mesh>
      {/* args are radius, x-axis and y axis */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

export default Earth;
