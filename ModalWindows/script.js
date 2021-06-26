'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.close-modal');
const btnModal = document.querySelectorAll('.show-modal');

const openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(modal.classList.toString());
};

const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', openModalWindow);
}

modalClose.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    closeModalWindow();
    console.log(modal.classList.toString());
  }
});
