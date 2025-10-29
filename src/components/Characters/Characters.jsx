//7.14.2025 this should show characters in a grid
//pictures of characters and it glows in the background when hovered over
//click on character and get a popup modal with a description
//add button to add more characters, hidden button from customers

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal/FormModal";
//import CharacterDetails from "../Characters/CharacterDetails";
import { getAllCharacters, getOneCharacter } from "../../utils/api";

const Characters = ({
  characters,
  setCharacters,
  handleCharacterClick,
  handleCharacter,
  currentUser,
  onClose,
}) => {
  //array values
  const [activeModal, setActiveModal] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState("");
  const [characterBrigade, setCharacterBrigade] = useState("");
  const [characterWeapon, setCharacterWeapon] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [characterLikes, setCharacterLikes] = useState("");
  const [characterDislikes, setCharacterDislikes] = useState("");
  const [characterGoals, setCharacterGoals] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //object with properties for character cards
  const character = {
    characterName: "",
    characterAge: "",
    characterBrigade: "",
    characterWeapon: "",
    characterImage: "",
    characterLikes: "",
    characterDislikes: "",
    characterGoals: "",
  };

  //functions
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      closeActiveModal();
    }
  };
  document.addEventListener("keydown", handleEscClose);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data being submitted:", {
      characterName,
      characterAge,
      characterWeapon,
      characterBrigade,
      characterImage,
      characterLikes,
      characterDislikes,
      characterGoals,
      currentUser,
    });

    handleCharacter(
      characterName,
      characterAge,
      characterWeapon,
      characterBrigade,
      characterImage,
      characterLikes,
      characterDislikes,
      characterGoals,
      currentUser
    );
  };

  //startFileReader function to convert image to base64 string
  //need html5 to resize an image file so it'll fit for the base64 conversion to string
  //resizing should occur when the user selects an image file
  //order: select file > resize file > convert to base64 string > setCharacterImage
  const startFileReader = (file) => {
    // Check if a file was selected
    if (!file) return;
    // Create an off-screen canvas for resizing
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;

    //correct timing now
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    }).then((result) => {
      //const src = { img: result }; //create an object with a property 'img'
      const img = new Image(); //create a new image
      img.src = result; //set the source of the image to the base64 string
      img.onload = () => {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 300, 300); //draw the image to the canvas
        setCharacterImage(canvas.toDataURL()); //this should be base64 string
      }; //wait for image to load
    });
  };

  //useEffect section to post characters on /character

  useEffect(() => {
    //if characters button is clicked, fetch characters from backend
    const fetchCharacters = async () => {
      try {
        //const [characters] = await getAllCharacters();
        const characters = await getAllCharacters();
        if (characters) {
          console.log(characters);
          setCharacters(characters);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      {" "}
      <Link to="/signpost" className="signpost">
        <button className="signpost_btn">Sign Post</button>
      </Link>
      <button
        className="characters_btn"
        onClick={() => setActiveModal("characters")}
      >
        Add+
      </button>
      <h2>Characters</h2>
      <div className="character_grid">
        <div className="character_list">
          {characters.map(
            (
              character //mapping through the array of characters
            ) => (
              <div
                className="character_card"
                key={character._id || character.id}
              >
                <img src={character.characterImage} alt="Character Card" />{" "}
                <div className="character_card_body">
                  <h5 className="character_card_title">
                    {character.characterName}
                  </h5>
                  <button className="character_card_button">Details</button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* Conditional rendering, activeModal === "characters" && <FormModal />, allows modal to open
      The modal will only open when activeModal exactly equals 'characters'
      If yes, then the <FormModal /> component will appear */}
      <FormModal
        title="Character"
        buttonText="Character"
        isOpen={activeModal === "characters"}
        onClose={closeActiveModal}
        onSubmit={handleSubmit}
        onLinkClick={handleCharacterClick}
      >
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_name"
            placeholder="Character Name"
            required
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_age"
            placeholder="Character Age"
            required
            value={characterAge}
            onChange={(e) => setCharacterAge(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_weapon"
            placeholder="Character Weapon"
            required
            value={characterWeapon}
            onChange={(e) => setCharacterWeapon(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_brigade"
            placeholder="Character Brigade"
            required
            value={characterBrigade}
            onChange={(e) => setCharacterBrigade(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="file" //changed from text to file for image upload base64
            className="modal_input"
            id="character_image"
            placeholder="Character Image"
            required
            onChange={(e) => startFileReader(e.target.files[0])}
            //this was e.target.value
            //.files is a FileList object,
            // which is an array-like object containing the selected files
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_likes"
            placeholder="Character Likes"
            required
            value={characterLikes}
            onChange={(e) => setCharacterLikes(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_dislikes"
            placeholder="Character Dislikes"
            required
            value={characterDislikes}
            onChange={(e) => setCharacterDislikes(e.target.value)}
          />
        </label>
        <label className="modal_label">
          <input
            type="text"
            className="modal_input"
            id="character_goals"
            placeholder="Character Goals"
            required
            value={characterGoals}
            onChange={(e) => setCharacterGoals(e.target.value)}
          />
        </label>
      </FormModal>
    </>
  );
};

export default Characters;
