const insertKeyboardKeysSpan = [...document.querySelectorAll('span[class="insert-keyboard-keys"]')];
const initialContentDiv = document.querySelector('div[class="initial-content"]');

window.addEventListener('keydown', (e) => {
  const keyBoardEvents = {
    pressed: e.key,
    ASCII: e.key.charCodeAt(0),
    code: e.code,
  };

  insertKeyboardKeysSpan.forEach(span => {
    removeDisplayNoneAttribute(span);

    if (span.id in keyBoardEvents) {
      const keyBoardInput = keyBoardEvents[span.id];

      span.innerHTML = '';
      span.appendChild(document.createTextNode(keyBoardInput));
    };
  });
});

function removeDisplayNoneAttribute(span) {
  const hiddenParentElement = span.parentElement;

  // stops func from running more than once.
  if (!hiddenParentElement.classList.contains('not-visible')) return;

  initialContentDiv.classList.add('not-visible');
  hiddenParentElement.classList.remove('not-visible');
};
