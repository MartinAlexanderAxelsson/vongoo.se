import React, { useContext } from "react";
import { SectionContext } from "../context/SectionContext";

export default function Nav() {
  const { activeSection } = useContext(SectionContext);

  return (
    <>
      <div>
        {Object.entries(activeSection).map(([k, v]) => (
          <div style={{ fontWeight: v ? "bold" : "normal" }}>{k}</div>
        ))}
      </div>
    </>
  );
}
