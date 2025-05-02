import { Environment, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Shoe } from "../Shoe/Shoe";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ color, modelRef }) => {
  const shoeModelRef = useRef();

  useEffect(() => {
    if (modelRef) {
      modelRef.current = shoeModelRef.current;
    }
  }, [modelRef]);

  useGSAP(() => {
    const model = shoeModelRef.current;
    if (!model) return;
  
    const getScrollEndValue = () => {
      const width = window.innerWidth;
      if (width >= 1550) return "+=2150";
      else if (width >= 900 && width <= 1550) return "+=1770";
      else return "+=2000";
    };
  
    const pinContainer = document.querySelector(".canvas-pin-container");
    if (pinContainer) {
      ScrollTrigger.create({
        trigger: pinContainer,
        start: "top top",
        end: getScrollEndValue(),
        pin: true,
        pinSpacing: false,
      });
    }
  
    const hero1 = document.querySelector(".Hero1");
    const hero5 = document.querySelector(".Hero5");
  
    if (hero1 && hero5) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Hero1",
          endTrigger: ".Hero5",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
  
      const width = window.innerWidth;
      const isMobile = width <= 767;
      const isLaptop = width >= 900 && width <= 1550;
      const isDesktop = width > 1550;
  
      if (isMobile) {
        tl.to(model.position, { x: -0.5, y: -2.2, ease: "power1.out" }, 0);
        tl.to(model.rotation, { y: -1.5, ease: "power1.out" }, "<");
        tl.to(model.position, { x: -0.5, y: -2.2 }, 0.35);
        tl.to(model.rotation, { y: 1, x: -0.1, z: 0 }, "<");
        tl.to(model.position, { x: -0.5, y: -2.2, z: 1.5 }, 0.9);
        tl.to(model.rotation, { y: 2.2, z: -0.1, x: 0.5 }, "<");
      }
  
      if (isLaptop || isDesktop) {
        tl.to(model.position, { x: 3.5, y: -1 }, 0);
        tl.to(model.rotation, { y: -1.5 }, "<");
        tl.to(model.position, { x: -4, y: -0.6 }, 0.35);
        tl.to(model.rotation, { y: 5, x: -0.1, z: 0 }, "<");
        tl.to(model.position, { x: -1, y: isLaptop ? -0.5 : -0.05, z: 1.5 }, 0.9);
        tl.to(model.rotation, { y: 2.2, z: -0.1, x: 0.5 }, "<");
      }
    }
  
    // Refresh to ensure all scroll positions are recalculated
    ScrollTrigger.refresh();
  
    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []); // useGSAP at top-level

  return (
    <>
      <PerspectiveCamera
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 0, 10]}
      />
      <Environment preset="city" />
      <Shoe color={color} ref={shoeModelRef} />
    </>
  );
};

export default Scene;
