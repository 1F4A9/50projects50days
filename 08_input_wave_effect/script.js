const form = document.querySelector('button[class="form"]');
const labels = [...document.querySelectorAll('label')];

addEventListener('submit', (e) => {
  e.preventDefault();
});

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) =>
      `
        <span class="wave-effect" style="transition-delay: ${index * 50}ms;">
          ${letter}
        </span>
      `
    )
    .join('');
});
