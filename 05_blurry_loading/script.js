const background = document.querySelector('.background');
const text = document.querySelector('.loading-text');

window.addEventListener('load', () => {
  background.setAttribute('style', 'filter: blur(0px);');
  text.setAttribute('style', 'opacity: 0;');
});

let percentage = 0;

// CSS transition duration: 2000ms / 100 = 20
let interval = setInterval(changePercentage, 20);

function changePercentage() {
  percentage++;

  if (percentage >= 100) clearInterval(interval);

  text.innerHTML = `${percentage}%`;
};
