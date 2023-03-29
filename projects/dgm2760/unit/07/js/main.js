import { attachButtonMethods } from './order.js';
import { updatePageText } from './pageText.js';

window.addEventListener('load', () => {
  updatePageText();
  attachButtonMethods();
});
