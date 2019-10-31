// Feedback

var link = document.querySelector('.open-feedback');

var popup = document.querySelector('.writeus');
var close = document.querySelector('.modal-close');

var form = popup.querySelector('.feedback-form')
var nameForm = popup.querySelector('[name=name]');
var emailForm = popup.querySelector('[name=email');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt){
  evt.preventDefault();
  popup.classList.add('modal-show');

  if (storage) {
    emailForm.value = storage;
    nameForm.focus();
  } else {
    emailForm.focus();
  }
});

close.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!nameForm.value || !emailForm.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('email', emailForm.value)
  }
}
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

// Map

var mapLink = document.querySelector('.open-map');
var mapPopup = document.querySelector('.map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});

