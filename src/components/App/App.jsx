import { useState } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import "../App/App.css";
import "../SignPost/SignPost.jsx";
import Main from "../Main/Main.jsx";
import SignPost from "../SignPost/SignPost.jsx";
import Published from "../Published/Published.jsx";
import Progress from "../Progress/Progress.jsx";
import Characters from "../Characters/Characters.jsx";
import World from "../World/World.jsx";
import Elars from "../World/world_components/Elars/Elars.jsx";
import Deities from "../World/world_components/Deities/Deities.jsx";
import Music from "../World/world_components/Music/Music.jsx";
import Constellations from "../World/world_components/Constellations/Constellations.jsx";
import Language from "../World/world_components/Language/Language.jsx";
import Glossary from "../World/world_components/Glossary/Glossary.jsx";

function App() {
  //clicks
  const handleMainClick = () => {};
  const handleSignPostClick = () => {};
  const handlePublishedClick = () => {};
  const handleProgressClick = () => {};
  const handleCharactersClick = () => {};
  const handleWorldClick = () => {};

  //world building clicks
  const handleElarsClick = () => {};
  const handleDeitiesClick = () => {};
  const handleMusicClick = () => {};
  const handleConstellationsClick = () => {};
  const handleLanguageClick = () => {};
  const handleGlossaryClick = () => {};

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/author_project"
            element={<Main onClick={handleMainClick} />}
          />
          <Route
            path="author_project/signpost"
            element={<SignPost onClick={handleSignPostClick} />}
          />
          <Route
            path="/author_project/published"
            element={<Published onClick={handlePublishedClick} />}
          />
          <Route
            path="/author_project/progress"
            element={<Progress onClick={handleProgressClick} />}
          />
          <Route
            path="/author_project/characters"
            element={<Characters onClick={handleCharactersClick} />}
          />
          <Route
            path="/author_project/world"
            element={<World onClick={handleWorldClick} />}
          />
          <Route
            path="/author_project/elars"
            element={<Elars onClick={handleElarsClick} />}
          />
          <Route
            path="/author_project/deities"
            element={<Deities onClick={handleDeitiesClick} />}
          />
          <Route
            path="/author_project/music"
            element={<Music onClick={handleMusicClick} />}
          />
          <Route
            path="/author_project/constellations"
            element={<Constellations onClick={handleConstellationsClick} />}
          />
          <Route
            path="/author_project/language"
            element={<Language onClick={handleLanguageClick} />}
          />
          <Route
            path="/author_project/glossary"
            element={<Glossary onClick={handleGlossaryClick} />}
          />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
