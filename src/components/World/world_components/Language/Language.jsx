//7.14.2025
//this should show a breakdown by region aka domains
//Akl, Dictare, Manus, Common, etc

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Language = ({}) => {
  return (
    <>
      <Link to="/world" className="world">
        <button className="world_btn">World Building</button>
      </Link>
      <h2>Language</h2>
    </>
  );
};

export default Language;
