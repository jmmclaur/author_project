//7.14.2025
//show images of the 12 Houses and where they rest above Lamina

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Constellations = ({}) => {
  return (
    <>
      <Link to="/author_project/world" className="world">
        <button className="world_btn">World Building</button>
      </Link>
      <h2>Constellations</h2>
    </>
  );
};

export default Constellations;
