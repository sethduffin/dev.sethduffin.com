import { updatePageText } from './pageText.js';
import { updateQuestionElements } from './quiz.js';

window.addEventListener('load', () => {
  updatePageText();
  updateQuestionElements();
});
