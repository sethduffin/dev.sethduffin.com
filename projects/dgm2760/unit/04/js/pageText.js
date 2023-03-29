export function updatePageText() {
  const elementText = {
    title: 'Fortune Teller',
    subtitle: 'Switch Statements',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
