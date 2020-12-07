const content = [...document.getElementsByClassName('content')];
const scrollArea = document.getElementById('scroll-area');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

let observer = new IntersectionObserver(callback, options);
let count = 1;

content.forEach(el => observer.observe(el));

function callback(entries) {
  entries.forEach(entry => {
    const visibleElement = entry.target;

    if (entry.isIntersecting) {
      visibleElement.classList.remove('not-visible');
      visibleElement.classList.remove('left');
      visibleElement.classList.remove('right');
    }

    // effects element not visible on window load
    if (visibleElement.classList.contains('not-visible')) {
      if (count % 2) {
        visibleElement.classList.add('left');
        count++;
      } else {
        visibleElement.classList.add('right');
        count++;
      }
    }
  });
};
