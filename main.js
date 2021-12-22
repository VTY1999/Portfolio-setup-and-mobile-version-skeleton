const menuOver = document.querySelector('#menu-over');
const mobileMenu = document.querySelector('#mobileMenu');
const closeTab = document.querySelector('.closeMenu');

function mobileMenuToogle() {
  menuOver.style.width = '398px';
  menuOver.style.display = 'block';
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

const blurPop = document.querySelector('#blur');
const popUp = document.querySelector('.popup');
const seeProject = document.querySelector('.btn');

function Toogle() {
  blurPop.style.filter = 'blur(24px)';
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
