//user should be able to upload music
//play/pause/stop/rewind button
//song name and timestamp
//thinking this could appear in a list with the sheet music (protected by copyright)

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Music = ({}) => {
  return (
    <>
      <Link to="/author_project/world" className="world">
        <button className="world_btn">World Building</button>
      </Link>
      <h2>Music</h2>
    </>
  );
};

export default Music;
