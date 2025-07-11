import "./SignPost.css";
import { useState, useEffect } from "react";

const SignPost = ({}) => {
  return (
    <div className="signpost">
      <button type="button" className="published">
        Published
      </button>
      <button type="button" className="progress">
        In Progress
      </button>
      <button type="button" className="characters">
        Characters
      </button>
      <button type="button" className="world">
        World Building
      </button>
    </div>
  );
};

export default SignPost;
