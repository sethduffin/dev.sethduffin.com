export class PageLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { name, path, description = '', disabled } = getAttributesFrom(this);
  
    this.innerHTML = `
      <li class="page-link">
        <a href="${path}" class="${disabled ? 'disabled' : ''}">
          <div class="page-link__text-container">
            <h3>${name}</h3>
            <p>${description}</p>
          </div>
          <span class="material-icons-round page-link__arrow">
          arrow_forward
          </span>
        </a>
      </li>
    `;
  }
}

function getAttributesFrom(elem) {
  const attributeEntries = elem.getAttributeNames().map((name) => {
    return [name, elem.getAttribute(name)];
  });

  const attributes = Object.fromEntries(attributeEntries);
  
  return attributes;
}

customElements.define('page-link', PageLink);
