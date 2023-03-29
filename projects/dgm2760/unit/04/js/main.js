import { updatePageText } from './pageText.js';
import { updateFortuneText } from './fortuneTeller.js';

window.addEventListener('load', () => {
  updatePageText();
  updateFortuneText();
});
