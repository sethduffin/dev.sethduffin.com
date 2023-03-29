export function updatePageText() {
  const elementText = {
    title: 'Grant\'s Tomb',
    subtitle: 'Literal Objects',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
