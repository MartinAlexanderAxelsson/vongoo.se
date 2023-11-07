import React from "react";
import { Fade } from "react-awesome-reveal";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function Test() {
  const sections = {
    music: { text: "music", duration: 68, delay: 2900 },
    about: { text: "about", duration: 92, delay: 4000 },
    contact: { text: "contact", duration: 126, delay: 5200 },
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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "90vw",
          }}
        >
          {Object.values(sections).map((s, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  transform: "rotate(90deg)",
                  width: "5vh",
                }}
              >
                <Fade
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  duration={s.duration}
                  cascade
                >
                  {[...Array(80).keys()].map(() => {
                    return <HorizontalRuleIcon sx={{ fontSize: "15px", margin: "-4px" }} />;
                  })}
                  {/* <HorizontalRuleIcon
                    sx={{ fontSize: "15px", margin: "-7px", transform: "rotate(90deg)" }}
                  /> */}
                </Fade>
                <Fade duration={1000} delay={s.delay}>
                  <div
                    style={{
                      transform: "rotate(-90deg)",
                      marginLeft: i === 2 ? "-20px" : "-10px",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "18px",
                    }}
                  >
                    <Fade duration={200} delay={s.delay} cascade>
                      {s.text}
                    </Fade>
                  </div>
                </Fade>
              </div>
            );
          })}
          {/* <div
            style={{
              display: "flex",
              transform: "rotate(90deg)",
              width: "5vh",
            }}
          >
            <Fade
              style={{
                display: "flex",
                alignItems: "center",
              }}
              duration={50}
              cascade
            >
              {[...Array(115).keys()].map(() => {
                return <FiberManualRecordIcon sx={{ fontSize: "3px", margin: "1px" }} />;
              })}
            </Fade>
            <Fade duration={1000} delay={2900}>
              <div style={{ transform: "rotate(-90deg)", marginLeft: "-5px" }}>MUSIC</div>
            </Fade>
          </div>
          <div
            style={{
              display: "flex",
              transform: "rotate(90deg)",
              width: "5vh",
            }}
          >
            <Fade
              style={{
                display: "flex",
                alignItems: "center",
              }}
              duration={70}
              cascade
            >
              {[...Array(115).keys()].map(() => {
                return <FiberManualRecordIcon sx={{ fontSize: "3px", margin: "1px" }} />;
              })}
            </Fade>
            <Fade duration={1000} delay={4000}>
              <div style={{ transform: "rotate(-90deg)", marginLeft: "-5px" }}>ABOUT</div>
            </Fade>
          </div>
          <div
            style={{
              display: "flex",
              transform: "rotate(90deg)",
              width: "5vh",
            }}
          >
            <Fade
              style={{
                display: "flex",
                alignItems: "center",
              }}
              duration={90}
              cascade
            >
              {[...Array(115).keys()].map(() => {
                return <FiberManualRecordIcon sx={{ fontSize: "3px", margin: "1px" }} />;
              })}
            </Fade>
            <Fade duration={1000} delay={5200}>
              <div style={{ transform: "rotate(-90deg)", marginLeft: "-15px" }}>CONTACT</div>
            </Fade>
          </div> */}
        </div>
      </div>
    </>
  );
}
