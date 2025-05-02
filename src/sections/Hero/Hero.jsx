import React, { Suspense, useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Canvas } from "@react-three/fiber";
import Scene from "../../components/Scene/Scene";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";


const LoaderOverlay = () => {
  const { progress } = useProgress();
  if (progress === 100) return null; // Hide when loading is done

  return (
    <div className="loader-container">
      <h2>Loading {Math.floor(progress)}%</h2>
    </div>
  );
};

const Hero = () => {
  const [shoeColor, setShoeColor] = useState("black");
  const [shoeColorForParts, setShoeColorForParts] = useState([
    { sole: "black", lace: "black", logo: "black", base: "black" },
  ]);
  const shoeRef = useRef();
  const colorOptions = ["black", "#3B8C97", "#ff3c3c", "#013AD3", "#2ecc71", "orange"];

  const handleScrollToCustomize = () => {
    const section = document.getElementById("customize");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleColorChange = () => {
    const colors = ["black", "#3B8C97", "#ff3c3c", "#013AD3", "#2ecc71", "orange"];
    const currentIndex = colors.indexOf(shoeColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    setShoeColor(nextColor);

    if (shoeRef.current) {
      gsap.fromTo(
        shoeRef.current.position,
        { y: shoeRef.current.position.y },
        {
          y: shoeRef.current.position.y + 5,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
        }
      );
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = shoeColor;
  }, [shoeColor]);

  return (
    <div className="fullHero">
      <div className="Hero1" id="home">
        <div className="Hero1Left">
          <div className="strip1"></div>
          <div className="strip2"></div>
          <div className="strip3"></div>
        </div>
        <div className="HeroShoes">
        <div className="canvas-pin-container" style={{ position: "relative" }}>
  <LoaderOverlay /> {/* ✅ This goes outside the Canvas */}
  <Canvas>
    <Suspense fallback={null}> {/* fallback now not needed here */}
      <Scene color={shoeColor} modelRef={shoeRef} />
    </Suspense>
  </Canvas>
</div>

        </div>
        <button className="color-btn" onClick={handleColorChange}>
          Next Color <span className="arrow">→</span>
        </button>
        <div className="Hero1Right">
          <div className="Hero1RightBigText">
            Your Pulse. <br /> Your Path.
          </div>
          <div className="Hero1RightSmallText">
            Premium Quality Sports Shoes
          </div>
          <button
            className="customizerButton"
            onClick={handleScrollToCustomize}
          >
            Customize & Shop
          </button>
        </div>
      </div>
      <div className="Hero2">
        <div className="Hero2Left">
          <h1>What's special in us???</h1>
          <p>
            Pulse Sports Shoes combines style, comfort, and performance to help
            you move with confidence. Designed for athletes and everyday wearers
            alike, Pulse offers lightweight, durable footwear that keeps up with
            your active lifestyle. Step into the rhythm of performance with
            Pulse.
          </p>
        </div>
        <div className="Hero2Right"></div>
      </div>
      <div className="Hero3" id="mission">
        <div className="Hero3Left"></div>
        <div className="Hero3Right">
          <h1>OUR MISSION</h1>
          <p>
            At Pulse, we're passionate about movement and performance. Our
            mission is to create high-quality sports shoes that not only look
            great but also support every step you take. Whether you're hitting
            the gym, running the track, or walking through your day, Pulse is
            here to keep you comfortable, confident, and ahead of the game.
          </p>
        </div>
      </div>
      <div className="Hero3_2" id="customize"></div>
      <div className="Hero4" id="customize">
        <div className="Hero4ContainorLeft">
          <div className="white-bordered-box">
            <h2 className="customizer-title">
              <b>Pulse</b> Customizer
            </h2>
            {/* You can add more content below the title */}
          </div>
        </div>
        <div className="Hero4ContainorRight">
          <div className="customization-box">
            <h2>Customize Your Shoe</h2>
            <div className="color-option-group">
              <h4>Sole Color</h4>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="color-option-group">
              <h4>Lace Color</h4>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="color-option-group">
              <h4>Logo Color</h4>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="color-option-group">
              <h4>Base Color</h4>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <button className="buyButton">Shop Now</button>
        </div>
      </div>
      <div className="Hero5"></div>
    </div>
  );
};

export default Hero;
