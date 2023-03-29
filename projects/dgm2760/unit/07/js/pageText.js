export function updatePageText() {
  const elementText = {
    title: 'Pizza Emporium',
    subtitle: 'Literal Objects',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
