import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Moon = () => {
  const moonRef = useRef();
  const [moonTexture] = useTexture(["./public/assets/moonTexture.jpg"]);

  const xAxis = 4;

  useFrame(({ clock }) => {
    //orbit rotation
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis;
    //axis rotation
    moonRef.current.rotation.y += 0.002;
  });

  return (
    <mesh castShadow ref={moonRef} position={[4, 0, 0]}>
      {/* args are radius, x-axis and y axis */}
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;
