function showStoryElement() {
  document.querySelector('.story').classList.remove('hide');
}

const valueMap = {
  nounInput: 'noun',
  adjectiveInput: 'adjective',
  verbInput: 'verb',
};

function updateStoryValues() {
  Object.entries(valueMap).forEach(([inputId, outputClass]) => {
    const inputValue = document.querySelector(`#${inputId}`).value;
    const words = inputValue.replace(/ /g, '\n').split('\n');

    const outputElements = document.querySelectorAll(`.${outputClass}`);
    outputElements.forEach((element, index) => {
      const outputValue = words[index];

      if (outputValue) {
        element.innerText = outputValue.toLowerCase();
      }
    })
  });
}

export function onPressGenerateStory() {
  updateStoryValues();
  showStoryElement();
}
