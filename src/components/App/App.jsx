import { useState } from "react";
import "../App/App.css";
import "../SignPost/SignPost.jsx";
import SignPost from "../SignPost/SignPost.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Majera Palae</h1>
      <SignPost />
    </>
  );
}

export default App;
