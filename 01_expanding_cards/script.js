const cards = [...document.getElementsByClassName('card')];

cards.forEach(card => {
  card.addEventListener('click', () => {
    normalizeCards();
    card.classList.add('active');
  });
});

// *************** Helper functions *************** //

function normalizeCards() {
  cards.forEach(element => element.classList.remove('active'));
};
