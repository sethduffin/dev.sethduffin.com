const question = {
  stem: 'Who is buried in Grants Tomb?',
  options: [
    'Tom',
    'Grant',
    'Sally',
    'Jordan',
  ],
  correctAnswer: 'Grant',
  feedback: {
    correct: 'Correct!',
    incorrect: 'Try Again.'
  },
}

function onAnswer(value) {
  if (value === question.correctAnswer) {
    updateFeedback(question.feedback.correct);
  } else {
    updateFeedback(question.feedback.incorrect);
  }
}

function updateFeedback(value) {
  document.querySelector('#feedback').innerText = value;
}

function generateOptionHtml() {
  const buttonHtml = question.options.map((value) => {
    return `<button id="button${value}">${value}</button>`;
  })

  return buttonHtml.join('\n');
}

export function attachOptionMethods() {
  question.options.forEach((value) => 
    document.querySelector(`#button${value}`).onclick = () => {
      onAnswer(value)
    },
  );
}

export function updateQuestionElements() {
  const optionHtml = generateOptionHtml();

  document.querySelector('#stem').innerText = question.stem;
  document.querySelector('#options').innerHTML = optionHtml;
  attachOptionMethods();
}
