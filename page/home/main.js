const pages = [
  {
    name: 'DGM 3261',
    description: 'Mixed Reality Experiences II',
    path: '../dgm3261',
  },
]

function fmtPageItem(page) {
  const { name, path, description = '', disabled } = page;

  return `
    <li>
      <a href="${path}" class="${disabled && 'disabled'}">
        <div class="page-item__text-container">
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <span class="material-icons-round page-item__arrow">
        arrow_forward
        </span>
      </a>
    </li>
  `;
}

pages.forEach((page) => {
  $('#pageList').append(fmtPageItem(page))
});
