import { Text } from "@react-three/drei";
// import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import * as THREE from 'three'

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="black"
          // anchorX={"left"}
          // anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          // lineHeight={1}
          // font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"black"}
            // onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="black"
        // anchorX={"left"}
        // anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        // font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"black"}
          side={THREE.DoubleSide}
          // onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};