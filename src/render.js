import displayController from "./controller";
import getPkmnData from "./api";
import { openModal } from "./modal-popout";

// capitalize the first char in a string
function capitalize(string) {
  return (String(string)).charAt(0).toUpperCase() + (String(string)).slice(1);
}

// function to format the ID with a tag ex: 5 -> "#005"
function tagFormat(id, tag = true) {
  const string = String(id);
  // dont include # if not needed
  if (tag === false) {
    if (string.length === 1) {
      return (`00${string}`);
    } if (string.length === 2) {
      return (`0${string}`);
    }
    return (`${string}`);
  }
  // include #
  if (string.length === 1) {
    return (`#00${string}`);
  } if (string.length === 2) {
    return (`#0${string}`);
  }
  return (`#${string}`);
}

// convert hectograms to lbs and add correct string format
function hexConversion(hectogram) {
  const pound = 0.220462;
  const conversion = Math.round((hectogram * pound) * 10) / 10;
  return `${String(conversion)} lbs.`;
}

// convert decimeters to foot'inch" format
function dexConversion(decimeter) {
  const foot = 0.328084;
  const inch = 0.0833333;
  const conversion = Math.round((decimeter * foot) * 100) / 100;
  const feet = Math.floor(conversion);
  const decimal = conversion - feet;
  let inches = Math.round(decimal / inch);
  if (inches < 10) {
    inches = `0${String(inches)}`;
  } else {
    inches = `${String(inches)}`;
  }
  return `${String(feet)}'${inches}"`;
}

// creates HTML elements for new cards
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
  const pkmnString = capitalize(data.name);
  pkmnName.innerHTML = pkmnString;

  // append children
  card.appendChild(img);
  card.appendChild(idTag);
  card.appendChild(pkmnName);
  displayController.cardContainer.appendChild(card);
  return (card);
}

// creates elements for Modal Popout window
function createModalHTML(data, speciesData) {
  const spriteFront = document.createElement('img');
  spriteFront.src = data.sprites.front_default;
  spriteFront.className = "pkmn_sprite_front temp";

  const spriteBack = document.createElement('img');
  spriteBack.src = data.sprites.back_default;
  spriteBack.className = "pkmn_sprite_back temp";

  const name = document.createElement('p');
  name.innerHTML = capitalize(data.name);
  name.className = "pkdx_name temp";

  // some data needs to be grabbed from the Spieces data set instead
  const nickname = document.createElement('p');
  nickname.innerHTML = speciesData.genera[7].genus;
  nickname.className = "pkdx_nickname temp";

  const id = document.createElement('p');
  id.innerHTML = tagFormat(data.id, false);
  id.className = "pkdx_id temp";

  const ht = document.createElement('p');
  ht.innerHTML = dexConversion(data.height);
  ht.className = "pkdx_ht temp";

  const wt = document.createElement('p');
  wt.innerHTML = hexConversion(data.weight);
  wt.className = "pkdx_wt temp";

  const description = document.createElement('p');
  description.innerHTML = speciesData.flavor_text_entries[9].flavor_text;
  description.className = "pkdx_description temp";

  const type1 = document.createElement('p');
  type1.innerHTML = capitalize(data.types[0].type.name);
  type1.className = `type ${data.types[0].type.name} left temp`;

  const type2 = document.createElement('p');
  try { // not all pokemon have two types, this will catch any errors
    type2.innerHTML = capitalize(data.types[1].type.name);
    type2.className = `type ${data.types[1].type.name} right temp`;
  } catch (error) {
    console.error(error);
    console.log(error);
  }

  displayController.modal.appendChild(spriteFront);
  displayController.modal.appendChild(spriteBack);
  displayController.modal.appendChild(name);
  displayController.modal.appendChild(nickname);
  displayController.modal.appendChild(id);
  displayController.modal.appendChild(ht);
  displayController.modal.appendChild(wt);
  displayController.modal.appendChild(description);
  displayController.modal.appendChild(type1);
  displayController.modal.appendChild(type2);
}

// add event listeners to cards that will open and close the modal window.
function createCardDOM(card, data, speciesData) {
  const selector = document.getElementById(card.id);
  selector.addEventListener("click", () => {
    openModal(displayController.modal);
    createModalHTML(data, speciesData);
  });
}

// create a new pokemon card
async function createCard(id) {
  const data = await getPkmnData(id);
  const speciesData = await getPkmnData(id, '-species');
  const newCard = createCardHTML(data);
  createCardDOM(newCard, data, speciesData);
}

// adds cards based on number of pokemon.
async function renderCards() {
  for (let i = 1; i < 152; i += 1) {
    await createCard(i);
  }
}
export { createCard, renderCards };
