import displayController from "./controller";
import getPkmnData from "./api";
import { openModal } from "./modal-popout";

// function to format the ID with a tag ex: 5 -> "#005"
function tagFormat(id, tag = true) {
  const string = String(id);
  if (tag === false) {
    if (string.length === 1) {
      return (`00${string}`);
    } if (string.length === 2) {
      return (`0${string}`);
    }
    return (`${string}`);
  }
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

function createModalHTML(data, speciesData) {
  const spriteFront = document.createElement('img');
  spriteFront.src = data.sprites.front_default;
  spriteFront.className = "pkmn_sprite_front temp";

  const spriteBack = document.createElement('img');
  spriteBack.src = data.sprites.back_default;
  spriteBack.className = "pkmn_sprite_back temp";

  const name = document.createElement('p');
  name.innerHTML = data.name;
  name.className = "pkdx_name temp";

  // some data needs to be grabbed from the Spieces data set instead
  const nickname = document.createElement('p');
  nickname.innerHTML = speciesData.genera[7].genus;
  nickname.className = "pkdx_nickname temp";

  const id = document.createElement('p');
  id.innerHTML = tagFormat(data.id, false);
  id.className = "pkdx_id temp";

  // const ht = document.createElement('p');
  // ht.innerHTML = data.name;
  // ht.className = "pkdx_name";

  // const wt = document.createElement('p');
  // wt.innerHTML = data.name;
  // wt.className = "pkdx_name";

  const description = document.createElement('p');
  description.innerHTML = speciesData.flavor_text_entries[9].flavor_text;
  description.className = "pkdx_description temp";

  displayController.modal.appendChild(spriteFront);
  displayController.modal.appendChild(spriteBack);
  displayController.modal.appendChild(name);
  displayController.modal.appendChild(nickname);
  displayController.modal.appendChild(id);
  // displayController.modal.appendChild(spriteFront)
  // displayController.modal.appendChild(spriteFront)
  displayController.modal.appendChild(description);
}

function createCardDOM(card, data, speciesData) {
  const selector = document.getElementById(card.id);
  selector.addEventListener("click", () => {
    openModal(displayController.modal);
    createModalHTML(data, speciesData);
  });
}



async function createCard(id) {
  const data = await getPkmnData(id);
  const speciesData = await getPkmnData(id, '-species');
  console.log(data);
  console.log(speciesData);
  const newCard = createCardHTML(data);
  createCardDOM(newCard, data, speciesData);
  
}

// use 152 for kanto
async function renderCards() {
  for (let i = 1; i < 4; i += 1) {
    await createCard(i);
  }
}
export { createCard, renderCards };
