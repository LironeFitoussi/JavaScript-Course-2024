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

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
}
h1.addEventListener('mouseenter', alertH1, { once: true });


// Bubbuling and Capturing
// rgb(255,255,255)
const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
 console.log(randomColor());

  document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // Stop propagation
    // e.stopPropagation();
  });

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
  });

  document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  }, 
  // true); // true: capturing phase, false: bubbling phase
  );

  // Capturing Phase: the event goes down to the target element
  // Bubbling Phase: the event bubbles up to the parent elements