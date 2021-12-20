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