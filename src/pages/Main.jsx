import React, { useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import { SectionContext } from "../context/SectionContext";

export default function Main() {
  const [activeSection, setActiveSection] = useState({
    home: true,
    about: false,
    contact: false,
  });
  console.log(activeSection);
  return (
    <>
      <SectionContext.Provider
        value={{
          activeSection,
          setActiveSection,
        }}
      >
        {activeSection.home && <Home />}
        {activeSection.about && <About />}
        {activeSection.contact && <Contact />}
      </SectionContext.Provider>
    </>
  );
}
