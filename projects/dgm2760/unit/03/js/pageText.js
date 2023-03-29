export function updatePageText() {
  const elementText = {
    title: 'Guessing Game',
    subtitle: 'Loops',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
