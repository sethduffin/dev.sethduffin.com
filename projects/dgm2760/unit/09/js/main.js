function duplicateMenu() {
  const topList = document.querySelectorAll('ul#primaryNavigation li a');
  const newList = document.createElement('ul');

  topList.forEach((menuItem) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', menuItem.getAttribute('href'));
    link.innerText = menuItem.innerText;
    listItem.appendChild(link);

    newList.appendChild(listItem);
  })

  document.querySelector('#smallNavArea').appendChild(newList);
}

duplicateMenu();
