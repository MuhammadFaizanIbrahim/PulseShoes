import React, { useRef, useEffect, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Shoe = forwardRef(
  ({ color = "black", colorForParts, startColorForParts }, ref) => {
    const { nodes, materials } = useGLTF("/model/basketball_shoe2.glb");

    const baseRef = useRef(); // GSAP will control this
    const floatRef = useRef(); // useFrame will animate this
    const isMobile = window.innerWidth <= 767; // adjust breakpoint as needed

    // Combine both refs for external access
    useEffect(() => {
      if (ref) ref.current = baseRef.current;
    }, [ref]);

    // FLOATING EFFECT
    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      if (floatRef.current) {
        if (isMobile) {
          floatRef.current.position.y = 1.5 + Math.sin(t * 1) * 0.2;
          floatRef.current.position.x = 3.6 + Math.sin(t * 0.2) * 0.1;
          floatRef.current.rotation.y =
            -Math.PI / 1.3 + Math.sin(t * 0.5) * 0.2;
        } else {
          floatRef.current.position.y = -1.6 + Math.sin(t * 1.5) * 0.2;
          floatRef.current.position.x = 1.3 + Math.sin(t * 0.5) * 0.2;
          floatRef.current.rotation.y =
            -Math.PI / 1.3 + Math.sin(t * 0.5) * 0.2;
        }
      }
    });

    useEffect(() => {
      if (materials.material) {
        materials.material.color.set("black");
      }
      if (materials.material_4) {
        materials.material_4.color.set("black");
      }
      if (materials.material_1) {
        materials.material_1.emissive.set("white");
        materials.material_1.emissiveIntensity = 0.3;
      }
      if (materials.material_6) {
        materials.material_6.emissive.set("white");
        materials.material_6.emissiveIntensity = 0.5;
      }
      if (materials.material_2) {
        materials.material_2.emissive.set("white");
        materials.material_2.emissiveIntensity = 0.8;
      }
      if (materials.material_3) {
        materials.material_3.emissive.set("white");
        materials.material_3.emissiveIntensity = 0.8;
      }
      if (materials.material_7) {
        materials.material_7.emissive.set("white");
        materials.material_7.emissiveIntensity = 0.8;
      }
      if (materials.material_8) {
        materials.material_8.emissive.set("white");
        materials.material_8.emissiveIntensity = 0.8;
      }
      if (materials.material_9) {
        materials.material_9.emissive.set("black");
        materials.material_9.emissiveIntensity = 0.8;
      }
    }, [materials]); // only on mount

    // 🎨 Dynamically update main color materials
    useEffect(() => {
      if (materials.material) {
        materials.material.color.set(color);
      }
      if (materials.material_2) {
        materials.material_2.emissive.set(color);
      }
      if (materials.material_10) {
        materials.material_10.emissive.set(color);
      }
      if (materials.material_4) {
        materials.material_4.color.set(color);
      }
      if (materials.material_9) {
        materials.material_9.emissive.set(color);
      }
    }, [color, materials]);

    useEffect(() => {
      if (startColorForParts == 1) {
        if (colorForParts.stripe != "aqua") {
          if (materials.material_7) {
            //stripe
            materials.material_7.emissive.set(colorForParts.stripe);
          }
          if (materials.material_8) {
            //stripe
            materials.material_8.emissive.set(colorForParts.stripe);
          }
          if (materials.material_3) {
            //stripe
            materials.material_3.emissive.set(colorForParts.stripe);
          }
        }
        if (colorForParts.front != "aqua") {
          if (materials.material) {
            //front
            materials.material.color.set(colorForParts.front);
            materials.material.emissiveIntensity = 0.8;
          }
          if (materials.material_2) {
            //front
            materials.material_2.emissive.set(colorForParts.front);
            materials.material_2.emissiveIntensity = 0.8;
          }
          if (materials.material_4) {
            //front
            materials.material_4.color.set(colorForParts.front);
            materials.material_4.emissiveIntensity = 0.8;
          }
          if (materials.material_9) {
            //front
            materials.material_9.emissive.set(colorForParts.front);
          }
          if (materials.material_10) {
            //front
            materials.material_10.emissive.set(colorForParts.front);
          }
        }
        if (colorForParts.sole != "aqua") {
          if (materials.material_1) {
            //sole
            materials.material_1.emissive.set(colorForParts.sole);
            materials.material_1.emissiveIntensity = 0.6;
          }
        }
        if (colorForParts.lace != "aqua") {
          if (materials.material_5) {
            //lace
            materials.material_5.color.set(colorForParts.lace);
          }
        }
        if (colorForParts.logo != "aqua") {
          if (materials.material_6) {
            //logo
            materials.material_6.emissive.set(colorForParts.logo);
          }
        }
      }
    }, [colorForParts, materials]);

    const scaleValue = isMobile ? [0.8, 0.8, 0.8] : [2.2, 2.2, 2.2];

    return (
      <group ref={baseRef} position={[-4.3, 0.1, 0]}>
        <group
          ref={floatRef}
          scale={scaleValue}
          // position={[-4.3, -1.3, 0]}
          rotation={[Math.PI / 50, Math.PI / 100, -Math.PI / 8]}
        >
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.material}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.material_1}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.material_2}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.material_3}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.material_4}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.material_5}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.material_6}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.material_7}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.material_8}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.material_9}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.material_10}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
        </group>
      </group>
    );
  }
);

useGLTF.preload("/model/basketball_shoe2.glb");
