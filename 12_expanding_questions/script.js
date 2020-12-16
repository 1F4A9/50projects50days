const buttons = [...document.querySelectorAll('button[class="toggle-visibility"]')];
const answerContentDivs = [...document.getElementsByClassName('answer')];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const hiddenAnswerDiv = button.parentElement.nextElementSibling;
    const icons = [...button.children];

    toggleContentVisibility(hiddenAnswerDiv);
    toggleIconVisibility(icons);
  });
});

function toggleIconVisibility(icons) {
  icons.forEach(icon => icon.classList.toggle('hide-icon'));
};

function toggleContentVisibility(element) {
  element.classList.toggle('hide-element');
};
