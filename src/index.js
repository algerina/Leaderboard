import './style.css';

const form = document.getElementById('form');
const scoresTable = document.querySelector('#scoresTable');
const refresh = document.getElementById('refresh');

const user = document.getElementById('name');
const score = document.getElementById('score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bx90xFfwK5Lr3jiZBT19/scores';

const refreshScores = async () => {
  scoresTable.innerHTML = '';
  const response = await fetch(url);
  const data = await response.json();
  const players = data.result;

  players.forEach((element) => {
    scoresTable.innerHTML += `
            <li class="item">
              ${element.user}: ${element.score}
            </li>
          `;
  });
};

refreshScores();

refresh.addEventListener('click', () => {
  refreshScores();
});

const submitScores = async (user, score) => {
  const player = { user, score };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitScores(user.value, score.value);
  refreshScores();
  user.value = '';
  score.value = '';
});
