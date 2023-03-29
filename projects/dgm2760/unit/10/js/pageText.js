export function updatePageText() {
  const elementText = {
    title: 'Hotel California',
    subtitle: 'You Can Never Leave',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
