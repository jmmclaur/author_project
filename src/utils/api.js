//const baseUrl = "http://localhost:3001/author_project";
//const baseUrl = "http://localhost:3001"; //after deployment change this for Railway backend URL
const baseUrl = "https://authorprojectbackend-production.up.railway.app"; //other baseUrls in the project will be replaced w this

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

//USER API
const getUserInfo = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`, //checks local storage for jwt token
    },
  }).then(checkResponse);
};

const updateUserInfo = async (name) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`, //same as above, make sure it's the right user
    },
    body: JSON.stringify({ name }),
  });
  return checkResponse(res);
};

//CHARACTER API
async function createCharacter(
  characterName,
  characterAge,
  characterWeapon,
  characterBrigade,
  characterImage,
  characterLikes,
  characterDislikes,
  characterGoals,
  owner
) {
  return fetch(`${baseUrl}/characters`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      characterName: String(characterName),
      characterAge: Number(characterAge),
      characterWeapon: String(characterWeapon),
      characterBrigade: String(characterBrigade),
      characterImage: String(characterImage),
      characterLikes: String(characterLikes),
      characterDislikes: String(characterDislikes),
      characterGoals: String(characterGoals),
      owner: String(owner),
    }),
  }).then(checkResponse);
}

const getOneCharacter = async (characterId) => {
  const res = await fetch(`${baseUrl}/characters/${characterId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  return checkResponse(res);
};

const getAllCharacters = async () => {
  const res = await fetch(`${baseUrl}/characters/list`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  console.log("API result:", res);
  //return checkResponse(res);
  const result = await checkResponse(res);
  console.log("Processed API result:", result);
  return result;
};

const updateCharacter = async (characterId, characterUpdates) => {
  const res = await fetch(`${baseUrl}/characters/update/${characterId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(characterUpdates),
  });
  return checkResponse(res);
};

export {
  checkResponse,
  getUserInfo,
  updateUserInfo,
  createCharacter,
  getOneCharacter,
  getAllCharacters,
  updateCharacter,
};
