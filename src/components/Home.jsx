import React, { useState, useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { SectionContext } from "../context/SectionContext";
import line from "../images/line_rbg53.png";

export default function Start() {
  const { activeSection, setActiveSection } = useContext(SectionContext);
  const sections = {
    music: { text: "MUSIC", duration: 1150, delay: 2900 },
    about: { text: "ABOUT", duration: 1170, delay: 4000 },
    contact: { text: "CONTACT", duration: 1190, delay: 5200 },
  };
  const [hover, setHover] = useState(false);

  const handleActiveSection = section => {
    if (section === "music") return;

    // Compose new state object by..
    const state = Object.keys(activeSection) // Get list of keys in model
      .reduce((result, k) => {
        // Reduce keys to object of key/value pairs
        // where key match is set to true
        return { ...result, [k]: section === k };
      }, {});

    setActiveSection(state);
  };

  const handleMouseEnterSection = section => {
    if (section === "about" || section === "contact") return;
    console.log("in", section);
    setHover(true);
  };
  const handleMouseLeaveSection = section => {
    if (section === "about" || section === "contact") return;
    console.log("out", section);
    setHover(false);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background: "rgb(230, 230, 230)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "85vw",
            background: "lightpink",
          }}
        >
          {Object.entries(sections).map(([k, v]) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  background: "lightgreen",
                  height: "100vh",
                }}
              >
                <img style={{ height: "65vh" }} src={line} />
                <Fade duration={1000} delay={v.delay}>
                  <div
                    onMouseEnter={() => handleMouseEnterSection(k)}
                    onMouseLeave={() => handleMouseLeaveSection(k)}
                    style={{ background: "lightblue" }}
                    onClick={() => handleActiveSection(k)}
                  >
                    <Fade duration={100} delay={v.delay} cascade>
                      {v.text}
                    </Fade>
                  </div>
                </Fade>
                {k === "music" && hover && (
                  <Fade duration={1500}>
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                      <div>Spotify</div>
                      <div>Player</div>
                      <div>Youtube</div>
                    </div>
                  </Fade>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
