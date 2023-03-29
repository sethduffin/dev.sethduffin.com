export function updatePageText() {
  const elementText = {
    title: 'Nonsense Story',
    subtitle: 'String Manipulation',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
