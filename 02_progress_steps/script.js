const circles = [...document.querySelectorAll('.circle')];
const progBar = document.querySelector('div[class="progress-bar"]');
const prevBtn = document.querySelector('button[id="prev"]');
const nextBtn = document.querySelector('button[id="next"]');

let currentActive = 1;

// *************** Event listeners *************** //

nextBtn.addEventListener('click', () => {
  if (currentActive >= circles.length) return;

  currentActive++;

  updateCircle();
  updateProgressBar();
  disableButtons();
});

prevBtn.addEventListener('click', () => {
  if (currentActive <= 1) return;

  currentActive--;

  updateCircle();
  updateProgressBar();
  disableButtons();
});

// *************** Main functions *************** //

function updateCircle() {
  circles.forEach((element, index) => {
    if (index < currentActive) element.classList.add('active');
    else element.classList.remove('active');
  });
};

function updateProgressBar() {
  let percentage = Math.floor((currentActive - 1) / (circles.length - 1) * 100);
  progBar.setAttribute('style', `width: ${percentage}%`);
};

function disableButtons() {
  if (currentActive <= 1) prevBtn.disabled = true;
  else prevBtn.disabled = false;

  if (currentActive >= circles.length) nextBtn.disabled = true;
  else nextBtn.disabled = false;
};
