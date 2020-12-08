const splits = [...document.getElementsByClassName('split')];

console.log(splits)

splits.forEach(el => el.addEventListener('mouseenter', (e) => onMouseEnter(e)));
splits.forEach(el => el.addEventListener('mouseleave', (e) => onMouseLeave(e)));

function onMouseEnter(e) {
  const el = e.target;

  el.classList.add('active');
};

function onMouseLeave(e) {
  const el = e.target;

  el.classList.remove('active');
};
