const companyName = 'Joe\'s Bed and Breakfast';

document.querySelector('#companyName').innerText = companyName;
document.querySelector('#companySlogan').innerText = 'Best B&B this side of Vernal';

function doPrompt() {
  const userName = prompt('What is your name?');

  if (userName) {
    document.querySelector('#welcomeMessage').innerText = `Hi ${userName}, welcome to ${companyName}.`
  }
}
