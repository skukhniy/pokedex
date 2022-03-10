import displayController from "./controller";
import getPkmnData from "./api";

// function to format the ID with a tag ex: 5 -> "#005"
function tagFormat(id) {
  const string = String(id);
  if (string.length === 1) {
    return (`#00${string}`);
  } if (string.length === 2) {
    return (`#0${string}`);
  }
  return (`#${string}`);
}

function createCard(id) {
  // grab json data file from pokemon API, then use that data to grab images/names/ids
  getPkmnData(id).then((data) => {
    // create card div
    const card = document.createElement('div');
    card.className = "pokemon-card";

    // create elements inside the card div
    const img = document.createElement('img');
    img.src = data.sprites.other["official-artwork"].front_default;

    const idTag = document.createElement('p');
    idTag.innerHTML = tagFormat(data.id);

    const pkmnName = document.createElement('h3');
    // capitalizes the name of the pokemon
    const pkmnString = (String(data.name)).charAt(0).toUpperCase() + (String(data.name)).slice(1);
    pkmnName.innerHTML = pkmnString;

    // append children
    card.appendChild(img);
    card.appendChild(idTag);
    card.appendChild(pkmnName);
    displayController.cardContainer.appendChild(card);
  });
}

function renderCards() {
  // loop to render all 151 pokemon
  for (let i = 1; i < 152; i += 1) {
    createCard(i);
  }
}
export { createCard, renderCards };
