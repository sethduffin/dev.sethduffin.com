export function updatePageText() {
  const elementText = {
    title: 'Unit Name',
    subtitle: 'Objective',
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}
