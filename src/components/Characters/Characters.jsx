//7.14.2025 this should show characters in a grid
//pictures of characters and it glows in the background when hovered over
//click on character and get a popup modal with a description
//add button to add more characters, hidden button from customers

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = ({}) => {
  return (
    <>
      {" "}
      <Link to="/author_project/signpost" className="signpost">
        <button className="signpost_btn">Sign Post</button>
      </Link>
      <h2>Characters</h2>
    </>
  );
};

export default Characters;
