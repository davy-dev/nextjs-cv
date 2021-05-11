import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { dataPortfolio } from "../dataPortfolio";

import Layout from "../components/layout";
export default function Portfolio() {
  const animeTile = useRef(null);
  const animeProject = useRef(null);

 const  dataPortfolio= [
    {
      id: 1,
      title: "Site vitrine",
      thumbnail: "/SiteVitrine.png",
      url: "https://davy-dev.github.io/davy-dev-EvalAssos/",
      codeSource: "https://github.com/davy-dev/davy-dev-EvalAssos.git",
    },
    {
      id: 2,
      title: "Clone Tinder",
      thumbnail: "/Tinder-Clone.png",
      url: "https://tinder-clone-cf22a.web.app",
      codeSource: "https://github.com/davy-dev/Tinder-Clone.git",
    },
    {
      id: 3,
      title: " Clone WhatsApp",
      thumbnail: "/whatsapp-Clone.png",
      url: "https://whatsapp-clone-mern-bcada.web.app/",
      codeSource: "https://github.com/davy-dev/Whatsapp-clone.git",
    },
    {
      id: 4,
      title: "Mémo todolist",
      thumbnail: "/Memo-App.png",
      url: "https://todolis-dav.web.app",
      codeSource: "https://github.com/davy-dev/React-Memo.git",
    }]

  useEffect(() => {

    const TL = gsap.timeline();

    TL.from(animeTile.current, {
      duration: 1,
      autoAlpha: -1,
      x: -300,
      ease: "expo.out",
    });
    TL.from(animeProject.current.children, {
      scale: 0,
      x: 100,
      ease: "expo.Out",
      stagger: 0.2,
    });
  }, []);

  return (
    <Layout>
      <div className="Portfolio">
        <h2 ref={animeTile}>Portfolio</h2>
        <div ref={animeProject} className="list-project">
          {dataPortfolio.map((project) => (
          <div key={project.id} className="project">
            <img src={project.thumbnail} alt="thumbnail" />
            <span className="title">{project.title}</span>
            <a
              className="site"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Visiter le site
            </a>
            <a
              className="code-source"
              href={project.codeSource}
              target="_blank"
              rel="noreferrer"
            >
              Code source
            </a>
          </div>
        ))}
        </div>
      </div>
    </Layout>
  );
}
