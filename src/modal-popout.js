import displayController from "./controller";

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  displayController.cardContainer.classList.remove('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  displayController.cardContainer.classList.add('active');
  const tempElements = document.querySelectorAll('.temp')

  tempElements.forEach(elem => {
    elem.remove();
  });
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    console.log('hi');
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

export { openModal, closeModal };
