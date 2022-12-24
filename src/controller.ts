const displayController = (() => {
  const cardContainer = document.getElementById('pokemon-cards');
  const modal = document.getElementById('modal');
  const openModalButtons = Array.from(
    document.querySelectorAll<HTMLElement>('[data-modal-target]')
  );
  const overlay = document.getElementById('overlay');
  return {
    cardContainer,
    modal,
    openModalButtons,
    overlay,
  };
})();

export default displayController;
