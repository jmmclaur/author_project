//7.14.2025
//this should allow the user to create a running list/chart
//world, pronunciation, definition, example sentence

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Glossary = ({}) => {
  return (
    <>
      <Link to="/author_project/world" className="world">
        <button className="world_btn">World Building</button>
      </Link>
      <h2>Glossary</h2>
    </>
  );
};

export default Glossary;
