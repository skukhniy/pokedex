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

function createCardHTML(data) {
  // create card div
  const card = document.createElement('div');
  card.className = "pokemon-card";
  card.id = data.id;

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
  return (card);
}

function createCardDOM(card) {
  console.log(card.id);
  const selector = document.getElementById(card.id);
  selector.addEventListener("click", () => {
    console.log(selector);
  });
}

async function createCard(id) {
  const data = await getPkmnData(id);
  const newCard = createCardHTML(data);
  createCardDOM(newCard);
}

// use 152 for kanto
async function renderCards() {
  for (let i = 1; i < 4; i += 1) {
    await createCard(i);
  }
}
export { createCard, renderCards };
