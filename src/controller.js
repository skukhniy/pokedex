const displayController = (() => {
  const cardContainer = document.getElementById("pokemon-cards");
  const modal = document.getElementById("modal");
  return { cardContainer, modal };
})();

export default displayController;
