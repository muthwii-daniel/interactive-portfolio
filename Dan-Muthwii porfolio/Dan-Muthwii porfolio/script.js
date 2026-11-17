const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const helloButton = document.getElementById('helloButton');
const helloMessage = document.getElementById('helloMessage');
if (helloButton && helloMessage) {
  helloButton.addEventListener('click', () => {
    helloMessage.textContent = 'Thank you for visiting my portfolio!';
  });
}

const resetButton = document.getElementById('resetButton');
const contactForm = document.getElementById('contactForm');
if (resetButton && contactForm) {
  resetButton.addEventListener('click', () => {
    contactForm.reset();
    if (helloMessage) helloMessage.textContent = '';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Your form is ready, but it needs an email/form service connected before it can deliver messages.';
  });
}
