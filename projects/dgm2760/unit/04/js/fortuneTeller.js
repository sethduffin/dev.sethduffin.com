import { randomDate, randomInt } from './utils.js';

const possibleFortunes = [
  'make sure to tie your shoelace',
  'look out for someone wearing an orange shirt',
  'don\'t drive next to red cars',
  'go grocery shopping',
  'turn off your stove',
  'unplug the lamp',
  'hats only',
  'avoid caffeine',
  'remember D.A.R.E',
  'don\'t trust the mustard',
  'throw out the milk',
  'screw on your water bottle lid',
  'if you see three crows, don\'t',
  'oh my gosh, you don\'t want to know',
  'bestie no, just no',
  'wake up earlier',
];

function generateFortuneMessage() {
  const date = randomDate();

  const fortuneIndex = randomInt(0, possibleFortunes.length - 1);
  const fortune = possibleFortunes[fortuneIndex];

  return `On ${date}, ${fortune}.`;
}

export function updateFortuneText() {
  const fortuneMessage = generateFortuneMessage();
  document.querySelector('#fortune').innerText = fortuneMessage;
}
