const buttons = [...document.querySelectorAll('button[class="sound-effect"]')];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const fileName = button.id.toString();

    const audio = new Audio(`sounds/${fileName}.mp3`);
    audio.play()
  });
});
