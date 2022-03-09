import displayController from "./controller";
import getPkmnData from "./api";

function createCard(id) {
  getPkmnData(id).then((data) => {
    // create card div
    const card = document.createElement('div');
    card.className = "pokemon-card";

    // create elements inside the card div
    const img = document.createElement('img');
    img.src = data.sprites.front_default;

    const idTag = document.createElement('p');
    idTag.innerHTML = String(data.id);

    const pkmnName = document.createElement('h3');
    pkmnName.innerHTML = String(data.name);

    // append children
    card.appendChild(img);
    card.appendChild(idTag);
    card.appendChild(pkmnName);
    displayController.cardContainer.appendChild(card);
  });
}

function renderCards() {
  for (let i = 1; i < 150; i += 1) {
    pkmnData(i);
  }
}
export { createCard, renderCards };
