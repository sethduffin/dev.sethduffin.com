import { randomInt } from './utils.js';

const minNumber = 1;
const maxNumber = 15;
const correctGuess = randomInt(minNumber, maxNumber);

const HintMessage = {
  NotInRange: `Hey, that's not even in range! \nMake a guess between ${minNumber} and ${maxNumber}.`,
  YouWin: `Right on! You guessed my number, ${correctGuess}`,
  GuessHigher: 'Ahh that\'s too low, guess higher',
  GuessLower: 'Woah that\'s to high! try a smaller number',
}

const ImageSource = {
  Ribbon1: './images/ribbon-1.svg',
  Ribbon2: './images/ribbon-2.svg',
  Ribbon3: './images/ribbon-3.svg',
  RibbonEmpty: './images/ribbon-empty.svg',
}

function incrementTryCount() {
  const currentCount = Number(document.querySelector('#tryCount').innerText);
  const nextCount = currentCount + 1;

  document.querySelector('#tryCount').innerText = nextCount;
}

function setHintMessage(message) {
  document.querySelector('#hintMessage').innerText = message;
  highlightElement('.feedback-container');
}

async function highlightElement(selector) {
  document.querySelector(selector).classList.add('highlight');
  await new Promise((res) => setTimeout(res, 1000));
  document.querySelector(selector).classList.remove('highlight');
}

function setRibbonImage(imageSource) {
  document.querySelector('#awardImage').src = imageSource;
  highlightElement('.award-container');
}

function doRibbonAward() {
  const tryCount = Number(document.querySelector('#tryCount').innerText);

  switch (tryCount) {
    case 1:
    case 2:
    case 3:
      setRibbonImage(ImageSource.Ribbon1);
      break
    case 4:
    case 5:
    case 6:
      setRibbonImage(ImageSource.Ribbon2);
      break
    default:
      setRibbonImage(ImageSource.Ribbon3);
  }
}

function isValidGuess(value) {
  return value >= minNumber && value <= maxNumber;
}

function isCorrectGuess(value) {
  return value === correctGuess;
}

export function onGuess() {
  const valueText = document.querySelector('#guessValue').value;
  const value = Number(valueText);

  if (isValidGuess(value)) {
    incrementTryCount();
    if (isCorrectGuess(value)) {
      setHintMessage(HintMessage.YouWin); 
      doRibbonAward();
    } else if (value > correctGuess) {
      setHintMessage(HintMessage.GuessLower);
    } else {
      setHintMessage(HintMessage.GuessHigher);
    }
  } else {
    setHintMessage(HintMessage.NotInRange);
  }
}

function printEncodedAnswer() {
  const encodedAnswer = (correctGuess + 2) * 4;
  console.log('I guess you can have the answer...');
  console.log('But you\'ll have to solve the math problem:');
  console.log(`${encodedAnswer} / 4 - 2`);
}

printEncodedAnswer();
