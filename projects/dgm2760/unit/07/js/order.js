function getRadioValue(name) {
  const options = document.querySelectorAll(`input[name="${name}"]`);
  const checkedOption = Array.from(options).find(({ checked }) => checked);

  return checkedOption.id;
}

function updateMessage(value) {
  document.querySelector('#message').innerText = value;
}

function getPizzaData() {
  const crust = getRadioValue('crust');
  const topping = getRadioValue('topping');
  const size = getRadioValue('size');

  let flour = 1;
  if (crust === 'thick') flour *= 2;
  if (size === 'large') flour *= 2;

  return { crust, topping, size, flour };
}

function onPressBuildPizza() {
  const { topping, crust, size } = getPizzaData();
  const message = `Baking a ${size} pizza on a ${crust} crust with ${topping} and cheese just for you.`;
  updateMessage(message);
}

function onPressShoppingList() {
  const { topping, flour } = getPizzaData();
  const message = `You will need to purchase ${flour} cups of flour and 1 lb of ${topping}`;
  updateMessage(message);
}

const buttonMethods = {
  buildPizza: onPressBuildPizza,
  shoppingList: onPressShoppingList,
}

export function attachButtonMethods() {
  Object.entries(buttonMethods).forEach(([id, method]) => 
    document.querySelector(`#${id}`).onclick = () => {
      method();
    },
  );
}
