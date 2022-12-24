import displayController from './controller';

function openModal(modal: Element) {
  if (modal == null) return;
  modal.classList.add('active');
  displayController!.overlay!.classList.add('active');
  displayController!.cardContainer!.classList.remove('active');
}

function closeModal(modal: Element) {
  if (modal == null) return;
  modal.classList.remove('active');
  displayController!.overlay!.classList.remove('active');
  displayController!.cardContainer!.classList.add('active');
  const tempElements = document.querySelectorAll('.temp');

  tempElements.forEach((elem) => {
    elem.remove();
  });
}

// button.dataset.modalTarget

displayController.openModalButtons.forEach((button: HTMLElement) => {
  button.addEventListener('click', () => {
    let selection: string = button.dataset.modalTarget!;
    const modal = document.querySelector(selection);
    openModal(modal!);
    console.log('hi');
  });
});

displayController!.overlay!.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

export { openModal, closeModal };
