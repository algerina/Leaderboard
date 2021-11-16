import './style.css';

const players = [
    {
        player: 'player A',
        score: 10, 
    },
    { 
        player: 'player B', 
        score: 20,
    },
    {
        player: 'player C', 
        score: 16,
    },

];

const scoresTable =  document.querySelector('#scoresTable');
players.forEach((element) => {
    const li = document.createElement('li');
    const text = document.createElement('span');
    element.textContent = `${element.name}: ${element.score}`;
    li.appendChild(text);
    scoresTable.appendChild(li);
});