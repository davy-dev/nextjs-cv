import React, { useRef, useEffect } from "react";

import AreasPracticed from "../components/AreasPracticed";
import Dependencies from "../components/Dependencies";
import Langage from "../components/Langage";
import Layout from "../components/layout";
import { gsap } from "gsap";

export default function Skills() {
  const animCard = useRef(null);

  useEffect(() => {
    console.log(animCard);
    const TL = gsap.timeline();
    TL.delay(0.6);
    TL.from(animCard.current.children[1].children[0], {
      ease: "power4.In",
      duration: 0.5,
      y: -200,
      autoAlpha: 0,
    })
      .from(animCard.current.children[1].children[1], {
        duration: 0.5,
        y: -200,
        autoAlpha: 0,
        ease: "power4.In",
      })
      .from(animCard.current.children[1].children[2], {
        duration: 0.3,
        y: -200,
        autoAlpha: 0,
        ease: "power4.In",
      })
      .from(animCard.current.children[0], {
        autoAlpha: 0,
        duration: 1.5,
      });
  }, []);

  return (
    <Layout>
      <div ref={animCard} className="Skills">
        <h2 className="h2">Compétences</h2>
        <div className="container">
          <Langage />

          <Dependencies />

          <AreasPracticed />
        </div>
      </div>
    </Layout>
  );
}
