'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

// Selecting elements
// setTimeout(() => {
//   console.log(document.documentElement);
//   console.log(document.head);
//   console.log(document.body);
// }, 100);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1'); // select by id (only one element)
const allButtons = document.getElementsByTagName('button'); // select by tag name
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); // select by class name


// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// setTimeout(() => {
//   console.log(message);
// }, 1000);

// header.prepend(message); // add as first child
// header.append(message.cloneNode(true)); // add as last child (only one place in the DOM) - can be in two places at the same time we use cloneNode 
header.append(message); // add as last child (only one place in the DOM) - cannot be in two places at the same time

// header.before(message); // add as sibling before
// header.after(message); // add as sibling after

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove(); // remove element is very new, before we had to do message.parentElement.removeChild(message); until ES2020
  // message.parentElement.removeChild(message);
});