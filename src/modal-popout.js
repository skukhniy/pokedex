import displayController from "./controller";

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  displayController.overlay.classList.add('active');
  displayController.cardContainer.classList.remove('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  displayController.overlay.classList.remove('active');
  displayController.cardContainer.classList.add('active');
  const tempElements = document.querySelectorAll('.temp');

  tempElements.forEach(elem => {
    elem.remove();
  });
}

displayController.openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    console.log('hi');
  });
});

displayController.overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

export { openModal, closeModal };
