import { meshBounds, useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ISS = () => {
  const issRef = useRef();
  const memoizedISS = useMemo(() => {
    return useGLTF("./public/ISSmodel/ISS_stationary.gltf");
  });
  
  const xAxis = 2

  useFrame(({clock}) => {
    //orbit rotation
    issRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis;
    issRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis;

  });
  return (
    <mesh>
      <primitive
        object={memoizedISS.scene}
        position={[2, 0, 0]}
        scale={0.005}
        ref={issRef}
      />
    </mesh>
  );
};

export default ISS;
