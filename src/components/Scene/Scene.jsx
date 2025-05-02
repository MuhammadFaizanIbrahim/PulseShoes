import { Environment, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Shoe } from "../Shoe/Shoe";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Scene = ({ color, modelRef }) => {
  const shoeModelRef = useRef();

  useEffect(() => {
    if (modelRef) {
      modelRef.current = shoeModelRef.current;
    }
  }, [modelRef]);

  
  useGSAP(() => {
    if (!shoeModelRef.current) return;

    const getScrollEndValue = () => {
      const width = window.innerWidth;
    
      if (width >= 1550) {
        return "+=2150"; // for large screens
      } else if (width >= 900 && width <= 1550) {
        return "+=1770"; // for medium screens
      } else if(width <= 767) {
        return "+=2000"; // for small screens
      }
    };
    
    // ScrollTrigger.create({
    //   trigger: ".canvas-pin-container",
    //   start: "top top",
    //   end: getScrollEndValue(),
    //   pin: true,
    //   pinSpacing: false,
    // });

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

    const isDesktop = window.innerWidth > 1550; // adjust breakpoint as needed
    const isLaptop = window.innerWidth >= 900 && window.innerWidth <= 1550; // adjust breakpoint as needed
    const isMobile = window.innerWidth <= 767; // adjust breakpoint as needed

    if(isMobile)
    {
      tl.to(shoeModelRef.current.position, { x: -0.5, y: -2.2, ease: "power1.out" }, 0);
      tl.to(shoeModelRef.current.rotation, { y: -1.5, ease: "power1.out" }, "<");
    
      tl.to(shoeModelRef.current.position, { x: -0.5, y: -2.2, ease: "power1.out" }, 0.35);
      tl.to(shoeModelRef.current.rotation, { y: 1, x: -0.1, z: 0, ease: "power1.out" }, "<");

      tl.to(shoeModelRef.current.position, { x: -0.5, y: -2.2, z: 1.5, ease: "power1.out" }, 0.9);
      tl.to(shoeModelRef.current.rotation, { y: 2.2, z: -0.1, x: 0.5, ease: "power1.out" }, "<");
    }
    if(isDesktop)
    {
      tl.to(shoeModelRef.current.position, { x: 3.5, y: -1, ease: "power1.out" }, 0);
      tl.to(shoeModelRef.current.rotation, { y: -1.5, ease: "power1.out" }, "<");
      
      tl.to(shoeModelRef.current.position, { x: -4, y: -0.6, ease: "power1.out" }, 0.35);
      tl.to(shoeModelRef.current.rotation, { y: 5, x: -0.1, z: 0, ease: "power1.out" }, "<");

      tl.to(shoeModelRef.current.position, { x: -1, y: -0.05, z: 1.5, ease: "power1.out" }, 0.9);
      tl.to(shoeModelRef.current.rotation, { y: 2.2, z: -0.1, x: 0.5, ease: "power1.out" }, "<");
    }
    
  if(isLaptop){

      tl.to(shoeModelRef.current.position, { x: 3.5, y: -1, ease: "power1.out" }, 0);
      tl.to(shoeModelRef.current.rotation, { y: -1.5, ease: "power1.out" }, "<");
      
      tl.to(shoeModelRef.current.position, { x: -4, y: -0.6, ease: "power1.out" }, 0.35);
      tl.to(shoeModelRef.current.rotation, { y: 5, x: -0.1, z: 0, ease: "power1.out" }, "<");

      tl.to(shoeModelRef.current.position, { x: -1, y: -0.5, z: 1.5, ease: "power1.out" }, 0.9);
      tl.to(shoeModelRef.current.rotation, { y: 2.2, z: -0.1, x: 0.5, ease: "power1.out" }, "<");
  }
  
}
  ScrollTrigger.refresh();
  }, 100);

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
