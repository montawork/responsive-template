const popupOverlay = document.querySelector('.popup-overlay');
const popupContainer = document.querySelector('popup-container');
const closeBtn = document.querySelector('.popup-overlay .close-btn');
const contactBtn = document.querySelector('.hero .btn');

closeBtn.addEventListener('click', closePopup);

contactBtn.addEventListener('click', showPopup);

function closePopup() {
  popupOverlay.classList.remove('open-popup');
}

function showPopup() {
  popupOverlay.classList.add('open-popup');
}

// Close with Escape key
document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});

document.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});
