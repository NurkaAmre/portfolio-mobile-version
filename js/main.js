const hamburger = document.querySelector('.hamburger');
const openMenu = document.querySelector('.mobile-option');
const extBtn = document.querySelector('.exit');

function show() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  hamburger.style.visibility = 'hidden';
  extBtn.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  hamburger.style.visibility = 'visible';
  extBtn.style.visibility = 'hidden';
}

hamburger.addEventListener('click', show);
extBtn.addEventListener('click', close);

openMenu.addEventListener('click', close);
