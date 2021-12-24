const menuOver = document.querySelector('#menu-over');
const mobileMenu = document.querySelector('#mobileMenu');
const closeTab = document.querySelector('.closeMenu');

function mobileMenuToogle() {
  menuOver.style.width = '398px';
  menuOver.style.display = 'none';
}

function closeMenu() {
  menuOver.style.width = '0';
}

mobileMenu.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMenu();
  });
}

closeTab.addEventListener('click', () => {
  closeMenu();
});

const projects = [{
  id: 1,
  name: 'Multi-Post Stories',
  discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'Images/Img_Placeholder.png',
  technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  gitLink: '#',
  srcLink: '#',
}];

const blurPop = document.querySelector('#blur');
const popUp = document.querySelector('.popup');
const seeProject = document.querySelector('.btn');

function Toogle() {
  blurPop.style.filter = 'blur(15px)';
  popUp.style.display = 'block';
}

function closePopUp() {
  popUp.style.display = 'none';
  blurPop.style.filter = 'blur(0px)';
}

seeProject.addEventListener('click', () => {
  Toogle();
});

const seeProjectLinks = document.querySelectorAll('.closePopUp');
for (let i = 0; i < seeProjectLinks.length; i += 1) {
  seeProjectLinks[i].addEventListener('click', () => {
    closePopUp();
  });
}

projects.addEventListener('click', () => {
  Toogle();
});

const form = document.querySelector('form');
const email = document.getElementById('email-address');
const span = document.querySelector('span');

form.addEventListener('submit', (event) => {
  if (email.validity.valueMissing) {
    span.innerHTML = 'You need to enter an e-mail address';
    event.preventDefault();
    span.classList.remove('message');
  } else if (email.validity.typeMismatch) {
    span.innerHTML = 'E-mail address needs to be valid (example@org.com)';
    event.preventDefault();
    span.classList.remove('message');
  } else if (email.validity.patternMismatch) {
    span.innerHTML = 'E-mail address needs to be in lower case';
    event.preventDefault();
    span.classList.remove('message');
  }
});

email.addEventListener('click', () => {
  span.classList.add('message');
});
