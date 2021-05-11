// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

export default function Home() {
  const animePage = useRef(null);

  useEffect(() => {
    const TL = gsap.timeline();
    TL.delay(0.8);
    TL.from(animePage.current, {
      x: -100,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power4.In",
    });
    TL.from(
      animePage.current.children[0],
      {
        autoAlpha: 0,
        duration: 3,
      },
      1
    );
  }, []);

  return (
    <Layout>
      <div ref={animePage} className="Home">
        <h2>Développeur web fullstack</h2>
        <Link href="./media/CV-DEV-ALTERNANCE.pdf">
          <a  target="_blanc">
            Télécharger le CV
          </a>
        </Link>
      </div>
    </Layout>
  );
}
