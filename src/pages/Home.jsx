import React from "react";
import { Fade } from "react-awesome-reveal";
import line from "../images/line_rbg53.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Home() {
  const sections = {
    music: { text: "MUSIC", duration: 1150, delay: 2900 },
    about: { text: "ABOUT", duration: 1170, delay: 4000 },
    contact: { text: "CONTACT", duration: 1190, delay: 5200 },
  };

  const handleLinkClick = section => {
    console.log(section);
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
                }}
              >
                <img style={{ height: "65vh" }} src={line} />
                <Fade duration={1000} delay={v.delay}>
                  <div style={{ background: "lightblue" }} onClick={() => handleLinkClick(k)}>
                    <Fade duration={100} delay={v.delay} cascade>
                      {v.text}
                    </Fade>
                  </div>
                </Fade>
                <div>Spotify</div>
                <div>Player</div>
                <div>Youtube</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
