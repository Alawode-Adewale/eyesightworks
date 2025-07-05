// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Optional: Language Dropdown (for dynamic future use)
const languageSelect = document.getElementById('languageSelect');

if (languageSelect) {
  languageSelect.addEventListener('change', () => {
    const selectedLang = languageSelect.value;
    alert(`Language switched to: ${selectedLang}`);
    // You can integrate real translations or redirects here later.
  });
}
