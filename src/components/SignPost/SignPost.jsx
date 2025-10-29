import "./SignPost.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignPost = ({}) => {
  return (
    <div className="signpost">
      <Link to="/published" className="published">
        <button className="sign_published">Published</button>{" "}
      </Link>
      <Link to="/progress" className="progress">
        <button className="sign_progress">In Progress </button>
      </Link>
      <Link to="/characters" className="characters">
        <button className="sign_characters">Characters </button>
      </Link>
      <Link to="/world" className="world">
        <button className="sign_world">World Building </button>
      </Link>
    </div>
  );
};

export default SignPost;
