const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});
