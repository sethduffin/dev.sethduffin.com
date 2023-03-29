import { updatePageText } from './pageText.js';
import { onPressGenerateStory } from './story.js';

window.addEventListener('load', () => {
  updatePageText();
});

document.querySelector('#generateStoryButton').onclick = onPressGenerateStory;
