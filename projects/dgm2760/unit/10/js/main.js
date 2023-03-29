import { insertHotelButtons } from './hotel.js';
import { updatePageText } from './pageText.js';

window.addEventListener('load', () => {
  updatePageText();
  insertHotelButtons();
});
