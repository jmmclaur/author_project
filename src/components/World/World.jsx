//7.14.2025 world will have a signpost of its own, can go to 6 dif pages
//E'lars, music, deities, constellations, glossary, languages

import "./World.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const World = ({}) => {
  return (
    <>
      <Link to="/signpost" className="signpost">
        <button className="signpost_btn">Sign Post</button>
      </Link>
      <h2>World Building</h2>
      <div className="nohis">
        <Link to="/elars" className="elars">
          <button className="nohis_elars">E'lars</button>{" "}
        </Link>
        <Link to="/music" className="music">
          <button className="nohis_music">Music</button>
        </Link>
        <Link to="/deities" className="deities">
          <button className="nohis_deities">Deities</button>
        </Link>
        <Link to="/constellations" className="constellations">
          <button className="nohis_constellations">Constellations</button>
        </Link>
        <Link to="/glossary" className="glossary">
          <button className="nohis_glossary">Glossary</button>
        </Link>
        <Link to="/language" className="language">
          <button className="nohis_language">Language</button>
        </Link>
      </div>
    </>
  );
};

export default World;
