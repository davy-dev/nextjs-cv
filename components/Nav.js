import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import { gsap } from "gsap";

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const animeNav = useRef(null);
  const animeH2 = useRef(null);
  const [media, setmedia] = useState("");

  // ANIMATION TO SHOW AND HIDE THE NAV=====================
  function handleMenue() {
    if (!toggleNav) {
      gsap.to(animeNav.current, {
        duration: 1.2,
        rotateY: -160,
        x: -50,
        y: 30,
        ease: "power4.Out",
        scaleY: 0.07,
        scaleX: 0.2,
      });
      gsap.to(animeH2.current, {
        x: 100,
        y: 55,
        autoAlpha: 1,
      });
      setToggleNav(true);
    } else {
      gsap.to(animeNav.current, {
        duration: 1,
        rotateY: 34,
        x: 10,
        ease: "power4.Out",
        scale: 1,
      });
      gsap.to(animeH2.current, {
        x: -100,
        autoAlpha: 0,
      });

      setToggleNav(false);
    }
  }
  // =================================================

  // ACTIVATE ANIMATION OF MENUE WITH INNERWIDTH 643PX ============
  useEffect(() => {
    const watchMedia = () => {
      setmedia(window.innerWidth);
    };
    window.addEventListener("resize", watchMedia);

    if (media <= 643) {
      handleMenue();
    }
  }, [media]);

  // ==========================================================

  return (
    <div className="Nav">
      <h3 ref={animeH2}>Davy LAMARRE</h3>
      <div ref={animeNav} className="prism">
        <div onClick={handleMenue}  className=" face front ">
          <h1>Davy LAMARRE </h1>

          <Link href="/"><a><li>Acceuil</li></a></Link>

          <Link href="/skills">
            
            <a><li>Compétences</li></a>
          </Link>

          <Link href="/portfolio">
            
            <a><li>Portfolio</li></a>
          </Link>

          <Link href="/hobbies">
            <a> <li>Centres d'intérets</li></a>
          </Link>

          <Link href="/contact">
            
            <a> <li>Contact</li> </a>
          </Link>

          <div className="githubBlock">
            <Link href="https://github.com/davy-dev?tab=repositories">
              <a>
                <img src="/github-brands.svg" alt="github" />
                <span>Mon Github</span>
              </a>
              
            </Link>
          </div>
        </div>
        <div onClick={handleMenue} className=" face back">
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className=" face right"></div>
        <div className=" face left"></div>
        <div className=" face bottom"></div>
        <div className=" face top"></div>
      </div>
    </div>
  );
}
