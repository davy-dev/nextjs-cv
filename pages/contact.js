import React, { useRef, useEffect, useState } from "react";


import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { gsap } from "gsap";

export default function Contact() {
  const animePage = useRef(null);
  const [showToolType1, setShowToolType1] = useState(false);
  const [showToolType2, setShowToolType2] = useState(false);

  //PAGE ANIMATION CONTACT================================================

  useEffect(() => {
    console.log(animePage);
    gsap.from(animePage.current.children[0], {
      duration: 0.8,
      autoAlpha: 0,
      ease: "circ.out",
      x: 100,
    });
    gsap.from(animePage.current.children[1], {
      duration: 1,
      x: -200,
      autoAlpha: 0,
    });
  }, [animePage]);

  // ====================================================================

  function handleTool1() {
    showToolType1 ? setShowToolType1(false) : setShowToolType1(true);
  }

  function handleTool2() {
    showToolType2 ? setShowToolType2(false) : setShowToolType2(true);
  }

  return (
    <Layout>
    <div ref={animePage} className="Contact">
      
      <h2>Contactez moi</h2>
      <div className="card">
        <ul>
          <CopyToClipboard text="0617900220">
            <li
              onMouseEnter={handleTool1}
              onMouseLeave={handleTool1}
              onClick={() => alert("Le numéro de téléphone est copié")}
            >
              <FontAwesomeIcon icon={faMobile} /> 0617 90 02 20{" "}
              {showToolType1 && <span>Cliquer pour copier</span>}
            </li>
          </CopyToClipboard>

          <CopyToClipboard text="l.davy971@live.fr">
            <li
              onMouseEnter={handleTool2}
              onMouseLeave={handleTool2}
              onClick={() => alert("L'adresse email est copié")}
            >
              <FontAwesomeIcon icon={faEnvelope} /> l.davy971@live.fr
              {showToolType2 && <span>Cliquer pour copier</span>}
            </li>
          </CopyToClipboard>
        </ul>
      </div>
    </div>
    </Layout>
  );
}
