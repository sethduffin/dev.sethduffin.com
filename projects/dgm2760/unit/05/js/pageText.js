export function updatePageText() {
  const elementText = {
    title: 'The Arborist',
    subtitle: 'Events and Arrays',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
