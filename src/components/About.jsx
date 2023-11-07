import React from "react";
import { Fade } from "react-awesome-reveal";
import Nav from "./Nav";

export default function About() {
  return (
    <>
      <Fade duration={2000}>
        <div style={{ width: "100vw", height: "100vh", background: "lightgrey" }}>
          <Nav />
        </div>
        ;
      </Fade>
    </>
  );
}
