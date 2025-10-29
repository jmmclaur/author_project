import { useState } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import "../App/App.css";
import "../SignPost/SignPost.jsx";
import Main from "../Main/Main.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
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
import Header from "../Header/Header.jsx";
//import Success from "../Success/Success.jsx";
import * as api from "../../utils/api.js";
//import * as auth from "../../utils/auth/auth.js"; //this is an object
import { register } from "../../utils/auth/auth.js";
import { login } from "../../utils/auth/auth.js";

function App() {
  //arrays
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
  });
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});

  //let navigate = useNavigate();

  //clicks
  const handleRegisterClick = () => {
    setActiveModal("sign-up");
  };
  const handleLoginClick = () => {
    setActiveModal("log-in");
  };
  const handleMainClick = () => {};
  const handleSignPostClick = () => {};
  const handlePublishedClick = () => {};
  const handleProgressClick = () => {};
  const handleCharactersClick = () => {
    setActiveModal("characters");
  };
  const handleWorldClick = () => {};

  const closeActiveModal = () => {
    setActiveModal("");
  };

  //forms
  /*
  const FormValidation = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    //setFormData({ name: "", email: "", password: "" });
  }; */

  /*const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }; */

  const handleRegistration = (name, email, password) => {
    const validate = () => {
      const newErrors = {};
      if (name.length < 2)
        newErrors.name = "Name must be at least 2 characters.";
      if (!email.includes("@")) newErrors.email = "Invalid email address.";
      if (password.length < 2)
        newErrors.password = "Password must be at least 2 characters.";
      return newErrors;
    };

    const validationErrors = validate(); //validation should occur before the API call
    if (Object.keys(validationErrors).length === 0) {
      console.log("Sending to server:", { name, email, password });
      //this sends data to the db if it passes validation
      register(name, email, password)
        .then((data) => {
          if (data.user) {
            setCurrentUser({
              //store user state
              name: data.user.name,
              email: data.user.email,
            });
          }
          setIsLoggedIn(false);
        })
        .then(() => {
          //handleChange();
          //navigate("/signpost");
          alert("Form submitted successfully!");
          closeActiveModal();
        })
        .catch((error) =>
          console.error(
            "Trouble registering, please check data field length and syntax",
            error
          )
        );
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLogin = (email, password) => {
    login(email, password)
      .then((data) => {
        console.log("Login response data:", data);
        console.log("After login, data received:", data);
        /*console.log("Auth state:", {
          isUser: auth.isUser,
          token: auth.token,
        });*/
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        return api.getUserInfo(data);
      })
      .then((userData) => {
        console.log("After getUserInfo, userData received:", userData);

        if (userData != null) {
          setCurrentUser({
            name: userData.name,
            _id: userData._id,
            role: userData.role,
          });
          closeActiveModal();
        } else {
          console.log("userData is null");
        }
      })
      .catch((error) => {
        console.error("Error in login process:", error);
      });
  };

  //character clicks
  const handleCharacter = (
    characterName,
    characterAge,
    characterWeapon,
    characterBrigade,
    characterImage,
    characterLikes,
    characterDislikes,
    characterGoals,
    currentUser
  ) => {
    api
      .createCharacter(
        characterName,
        characterAge,
        characterWeapon,
        characterBrigade,
        characterImage,
        characterLikes,
        characterDislikes,
        characterGoals,
        currentUser._id
      )
      .then((data) => {
        console.log("API response data:", data);
        if (data.character) {
          setCurrentCharacter({ character: data.character });
          setCharacters([...characters, data.character]);
          //need to update the characters array state to include new characters
        }
        closeActiveModal();
      })
      .catch((err) => console.error(err));
  };

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
        <Header
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Main onClick={handleMainClick} />} />
          <Route
            path="/signpost"
            element={<SignPost onClick={handleSignPostClick} />}
          />
          <Route
            path="/published"
            element={<Published onClick={handlePublishedClick} />}
          />
          <Route
            path="/progress"
            element={<Progress onClick={handleProgressClick} />}
          />
          <Route
            path="/characters"
            element={
              <Characters
                characters={characters}
                setCharacters={setCharacters}
                onClick={handleCharactersClick}
                handleCharacterClick={handleCharactersClick}
                handleCharacter={handleCharacter}
                currentUser={currentUser}
              />
            }
          />
          <Route path="/world" element={<World onClick={handleWorldClick} />} />
          <Route path="/elars" element={<Elars onClick={handleElarsClick} />} />
          <Route
            path="/deities"
            element={<Deities onClick={handleDeitiesClick} />}
          />
          <Route path="/music" element={<Music onClick={handleMusicClick} />} />
          <Route
            path="/constellations"
            element={<Constellations onClick={handleConstellationsClick} />}
          />
          <Route
            path="/language"
            element={<Language onClick={handleLanguageClick} />}
          />
          <Route
            path="/glossary"
            element={<Glossary onClick={handleGlossaryClick} />}
          />
        </Routes>

        <RegisterModal
          activeModal={activeModal}
          handleRegistration={handleRegistration}
          handleLogin={handleLogin}
          onClose={closeActiveModal}
        />
        <LoginModal
          activeModal={activeModal}
          handleLogin={handleLogin}
          handleRegisterClick={handleRegisterClick}
          onClose={closeActiveModal}
        />
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
