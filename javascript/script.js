const hamburgerMenu = document.querySelector('#menu');
const menu = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
