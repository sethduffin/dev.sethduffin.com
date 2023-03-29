import { updatePageText } from './pageText.js';
import { onGuess } from './numberGame.js';

window.addEventListener('load', updatePageText);

const guessButton = document.querySelector('#guessButton');
guessButton.addEventListener('click', onGuess);
