import { updatePageText } from './pageText.js';
import { attachButtonMethods, updateElementText } from './tree.js';


window.addEventListener('load', () => {
  updatePageText();
  updateElementText();
  attachButtonMethods();
});
