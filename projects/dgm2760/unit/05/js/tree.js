let treeList = [
  'oak',
  'Pine',
  'aspen',
  'Bald Cypress',
];
const logList = [];

export function updateElementText() {
  document.querySelector('#treeList').innerText = treeList.join('\n');
  document.querySelector('#treeListCount').innerText = `${treeList.length} elements long`;
  document.querySelector('#logList').innerText = logList.join('\n');
}

function log(message) {
  logList.push(message);
}

const buttonMethods = {
  buttonAdd1: () => treeList.push('Redwood Tree'),
  buttonAdd2: () => treeList.unshift('pear'),
  buttonRemove1: () => treeList.shift(),
  buttonRemove2: () => treeList.splice(1, 1),
  buttonRemove3: () => treeList.pop(),
  buttonManipulate1: () => treeList = treeList.sort(),
  buttonManipulate2: () => treeList = treeList.map((item) => item.toLowerCase()),
  buttonGet1: () => log(treeList[2] || 'ERR: Uhh... there isn\'t a third tree.'),
  buttonGet2: () => log(treeList[3] || 'ERR: Yo you know there isn\'t a fourth tree'),
}

export function attachButtonMethods() {
  Object.entries(buttonMethods).forEach(([id, method]) => 
    document.querySelector(`#${id}`).onclick = () => {
      method();
      updateElementText();
    },
  );
}
