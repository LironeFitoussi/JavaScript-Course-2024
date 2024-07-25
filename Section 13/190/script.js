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

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://
console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo'; // change the alt attribute
console.log(logo.alt); // Beautiful minimalist logo

// Non-standard
console.log(logo.designer); // undefined because it's not an attribute
console.log(logo.getAttribute('designer')); // Jonas because it's an attribute

logo.setAttribute('company', 'Bankist'); // set the attribute

console.log(logo.src); // http://127.0.0.1:5500/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

// on links
const link = document.querySelector('.twitter-link');
console.log(link.href); // http://twitter.com/jonasschmedtman
console.log(link.getAttribute('href')); // http://twitter.com/jonasschmedtman

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href); // http://127.0.0.1:8080/188/#
console.log(link2.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('c', 'j'); // add multiple classes
logo.classList.remove('c', 'j'); // remove multiple classes
logo.classList.toggle('c'); // add the class if it's not there and remove it if it's there
logo.classList.contains('c'); // true - check if the class is there

// Don't use
logo.className = 'jonas'; // overwrite all the classes