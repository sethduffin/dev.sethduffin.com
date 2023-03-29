function updateElementText() {
  const elementText = {
    title: 'Inspector Clouseau',
    subtitle: 'Clarity Into Page Specs',
    windowProperties: `
      Window size is ${window.innerWidth} wide by ${window.innerHeight} tall.
      Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top of the display.
      The page URL is ${window.location}
    `,
    documentProperties: `
      Document Title is ${document.title}
      This document was last updated on ${document.lastModified}
    `,
  }

  Object.entries(elementText).forEach(([id, text]) => {
    document.querySelector(`#${id}`).innerText = text.trim();
  });
}

window.addEventListener('load', updateElementText);
window.addEventListener('resize', updateElementText);
