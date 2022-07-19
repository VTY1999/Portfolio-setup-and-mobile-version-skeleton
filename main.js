const menuOver = document.querySelector('#menu-over');
const mobileMenu = document.querySelector('#mobileMenu');
const closeTab = document.querySelector('.closeMenu');

function mobileMenuToogle() {
  menuOver.style.width = '100%';
  menuOver.style.display = 'block';
}

function closeMenu() {
  menuOver.style.width = '0';
}

mobileMenu.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
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
const popUp1 = document.querySelector('.popup1');
const popUp2 = document.querySelector('.popup2');
const popUp3 = document.querySelector('.popup3');
const popUp4 = document.querySelector('.popup4');
const popUp5 = document.querySelector('.popup5');
const seeProject = document.querySelector('.botn');
const seeProject1 = document.querySelector('.btn1');
const seeProject2 = document.querySelector('.btn2');
const seeProject3 = document.querySelector('.btn3');
const seeProject4 = document.querySelector('.btn4');
const seeProject5 = document.querySelector('.btn5');

function Toogle() {
  blurPop.style.filter = 'blur(10px)';
  popUp.style.display = 'block';
}

function Toogle1() {
  blurPop.style.filter = 'blur(10px)';
  popUp1.style.display = 'block';
}

function Toogle2() {
  blurPop.style.filter = 'blur(10px)';
  popUp2.style.display = 'block';
}

function Toogle3() {
  blurPop.style.filter = 'blur(10px)';
  popUp3.style.display = 'block';
}

function Toogle4() {
  blurPop.style.filter = 'blur(10px)';
  popUp4.style.display = 'block';
}

function Toogle5() {
  blurPop.style.filter = 'blur(10px)';
  popUp5.style.display = 'block';
}

function closePopUp() {
  popUp.style.display = 'none';
  popUp1.style.display = 'none';
  popUp2.style.display = 'none';
  popUp3.style.display = 'none';
  popUp4.style.display = 'none';
  popUp5.style.display = 'none';
  blurPop.style.filter = 'blur(0px)';
}

seeProject.addEventListener('click', () => {
  Toogle();
});

seeProject1.addEventListener('click', () => {
  Toogle1();
});

seeProject2.addEventListener('click', () => {
  Toogle2();
});

seeProject3.addEventListener('click', () => {
  Toogle3();
});

seeProject4.addEventListener('click', () => {
  Toogle4();
});

seeProject5.addEventListener('click', () => {
  Toogle5();
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
