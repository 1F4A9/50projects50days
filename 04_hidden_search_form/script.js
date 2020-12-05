const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
  input.classList.toggle('active');

  if (input.classList.contains('active')) input.disabled = false;
  else input.disabled = true;

  input.focus();
});
