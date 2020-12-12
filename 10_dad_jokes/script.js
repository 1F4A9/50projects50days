const span = document.querySelector('span[id="joke-container"]');
const button = document.querySelector('button[class="fetch-joke"]');

window.addEventListener('load', generateDadJoke);
button.addEventListener('click', generateDadJoke);

const config = {
  method: 'get',
  url: 'https://icanhazdadjoke.com/',
  headers: { "Accept": "application/json" },
};

async function fetchDadJoke() {
  try {
    return response = await axios(config);
  } catch (err) {
    console.log(err);
  };
};

async function generateDadJoke() {
  const { data } = await fetchDadJoke();
  const { status, joke } = data;

  if (status !== 200) throw new Error(`invalid response: ${data.status}`);

  span.innerHTML = '';
  span.appendChild(document.createTextNode(joke));
};
