import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image"


export default function Langage() {
  const [displayList, setDisplayList] = useState(false);

  function handleDisplay() {
    displayList ? setDisplayList(false) : setDisplayList(true);
  }

  const animeList = useRef(null);

  useEffect(() => {
    displayList &&
      gsap.from(animeList.current, {
        rotateY: 100,
        autoAlpha: 0,
        x: -200,
      });
  }, [displayList]);

  const cardStyle = {
    background:"linear-gradient(45deg, #aee9ff69, #0095c79b, #0127388c),url(/iStock.jpg)",
    backgroundPosition: "center",
    backgroundSize:"460px"
  };

  return (
    <div
      onMouseLeave={handleDisplay}
      onMouseEnter={handleDisplay}
      className="langage"
      style={cardStyle}
    >
      {!displayList && <h2>Languages ou Framework pratiqués</h2>}

      {displayList && (
        <ul ref={animeList}>
          <li>
            <Image  src="/js-square.svg" alt="js-icon"  width="33" height="33" /> JavaScript (ES6)
          </li>
          <li>
            
            <Image  src="/react.svg" alt="react-icon" width="33" height="33" /> React
          </li>
          <li>
           
            <Image  src="/css3.svg" alt="css3-icon" width="33" height="33"  /> CSS (prépocesseur
            SASS)
          </li>
          <li>
           
            <Image  src="/html5.svg" alt="html-icon" width="33" height="33"  /> HTML
          </li>
          <li>
           
            <Image  src="/php.svg" alt="php-icon"  width="33" height="33" /> PHP
          </li>
          <li>
           
            <Image  src="/bootstrap.svg" alt="bootstrap-icon"  width="33" height="33" /> Bootstrap
          </li>
        </ul>
      )}
    </div>
  );
}
