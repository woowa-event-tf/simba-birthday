import messages from './messages.js';

const $letter = document.querySelector('.letter');
const $letterInner = document.querySelector('.letter-inner');
const $audience = document.querySelector('.audience');
const $simba = document.querySelector('.simba');

const $yeahAudio = document.querySelector('.yeah-audio');
const $bgm = document.querySelector('.bgm');

const $modal = document.querySelector('#modal');
const $muteButton = document.querySelector('.mute-button');
const $modalCloseButton = document.querySelector('.modal-close-button');

let timeoutId;

let count = 0;

$simba.addEventListener('click', () => {
  clearTimeout(timeoutId);

  $letterInner.textContent = messages[count % messages.length].message;
  $letterInner.scrollTo(0, 0);
  count++;

  $letter.classList.add('letter-up-animation');
  $audience.classList.add('pou-up');

  $yeahAudio.play();

  timeoutId = setTimeout(() => {
    $letter.classList.remove('letter-up-animation');
    $audience.classList.remove('pou-up');
  }, 1000);
});

$modalCloseButton.addEventListener('click', () => {
  $modal.classList.add('hidden');
});

$muteButton.addEventListener('click', () => {
  $yeahAudio.volume = 0;
  $modal.classList.add('hidden');
});
