import React, { useRef, useEffect, useState } from "react";

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

export default function Hobbies() {
  const [countRight, setCountRight] = useState(90);
  const [countLeft, setCountLeft] = useState(-90);

  const animeCube = useRef(null);
  const slideSpan = useRef(null);

  // CUBE ACTION MANIPULATION=================================

  function handleRotateRight() {
    setCountLeft(countLeft + 90);
    setCountRight(countRight + 90);

    gsap.to(animeCube.current, {
      duration: 1.3,
      ease: "power2.Out",
      rotateY: countRight,
    });
  }

  function handleRotateLeft() {
    setCountRight(countRight - 90);
    setCountLeft(countLeft - 90);

    gsap.to(animeCube.current, {
      duration: 1.3,
      ease: "power2.Out",
      rotateY: countLeft,
    });
  }

  // =======================================================================

  // CUBE ANIMATION WHEN PAGE SELECTED==================================
  useEffect(() => {
    console.log(animeCube);
    console.log(animeCube.current.children[0].children);
    gsap.from(animeCube.current, {
      duration: 1,
      x: 900,
      ease: "power4.Out",
      rotateX: 360,
    });
    const TL = gsap.timeline({ repeat: -1 });
  
    TL.to(slideSpan.current.children, {
      y: 0,
      autoAlpha: 1,
      stagger: 1,
    }).to(
      slideSpan.current.children,
      {
        y: -100,
        autoAlpha: 0,
        stagger: 1,
      },
      1
    );
  }, []);
  // =========================================================================

  return (
  <Layout>
    <div className="Hobbies">
      <h2>Centres d'intéret</h2>
      <FontAwesomeIcon
        onClick={() => handleRotateRight()}
        className="chevron-right"
        icon={faChevronRight}
        size="3x"
      />
      <FontAwesomeIcon
        onClick={() => handleRotateLeft()}
        className="chevron-left"
        icon={faChevronLeft}
        size="3x"
      />

      <div ref={animeCube} className="cube">
        <div className="faces front">
          <span>Musique</span>

          <div ref={slideSpan} className="slider">
            <p>Piano</p>
            <p>Chant</p>
            <p>M.A.0</p>
          </div>
        </div>

        <div className="faces back">
          <span>Technologie</span>
        </div>

        <div className="faces left">
          <span>Gymnastique</span>
        </div>

        <div className="faces right">
          <span>Photographie</span>
        </div>
        <div className="faces top"></div>

        <div className="faces bottom"></div>
      </div>
    </div>
    </Layout>
  );
}
