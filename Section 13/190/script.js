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
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1'); // select by id (only one element)
const allButtons = document.getElementsByTagName('button'); // select by tag name

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); 

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // empty string because it's not set in the inline style
console.log(message.style.backgroundColor); // rgb(55, 56, 61) because it's set in the inline style
console.log(getComputedStyle(message)); // get all the styles of the element including the ones set by the default browser
console.log(getComputedStyle(message).color); // rgb(255, 255, 255) because it's set in the css file
console.log(getComputedStyle(message).height); // 32px because it's set in the css file

message.style.height = (Number.parseFloat(getComputedStyle(message).height) + 30) + 'px'; // 62px

document.documentElement.style.setProperty('--color-primary', 'orangered');

const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));

const h1 = document.querySelector('h1');

// Old way to add event listener to an element
// h1.onmouseenter = () => {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// New way to add event listener to an element
// h1.addEventListener('mouseenter', () => {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// 1. Allowing to add multiple event listeners to the same element
// 2. Allowing to remove the event listener from the element

// Splitted the function to a named function
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
}

// Adding the event listener to the element
// h1.addEventListener('mouseenter', alertH1);

// Removing the event listener from the element after certain time
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Removing the event listener from the element after one use
h1.addEventListener('mouseenter', alertH1, { once: true });


