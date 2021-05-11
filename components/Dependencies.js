import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

export default function Dependencies() {
  const [displayList, setDisplayList] = useState(false);
  const list = [
    { id: 1, langage: "Mongoose" },
    { id: 2, langage: "Passport" },
    { id: 3, langage: "Axios" },
    { id: 4, langage: "Redux" },
    { id: 5, langage: "Styled-Components" },
    { id: 6, langage: "Dotenv" },
    { id: 7, langage: "GreenSock" },
  ];

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
    background:
    "linear-gradient(45deg, #aee9ff69, #0095c79b, #0127388c),url(/iStock.jpg)",
    backgroundPosition: "center",
    backgroundSize: "460px",
  };

  return (
    <div
      onMouseLeave={handleDisplay}
      onMouseEnter={handleDisplay}
      className="dependencies"
      style={cardStyle}
    >
      {!displayList && <h2>Dépendances ou libraries manipulées</h2>}

      {displayList && (
        <ul ref={animeList}>
          {list.map((e) => (
            <li key={e.id}>
              <FontAwesomeIcon icon={faCheckSquare} /> {e.langage}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
