function renderGame() {
  const game = getGamers();

  game.forEach((element) => {
    addPlayerToGame(element);
  });
}

function addPonto(id) {
  let players = getGamers();
  let btnPlus = document.getElementById(id).parentElement.className;

  for (let index = 0; index < players.length; index++) {
    if (btnPlus == players[index].name) {
      players[index].score++;
      let newPlayers = [...players];

      localStorage.game = JSON.stringify(newPlayers);

      document.querySelector(".principal").children[
        index
      ].children[1].innerHTML = players[index].score;
    }
  }
}

function subPonto(id) {
  let players = getGamers();
  let btnMinus = document.getElementById(id).parentElement.className;

  for (let index = 0; index < players.length; index++) {
    if (btnMinus == players[index].name) {
      if (players[index].score <= 0) {
        return;
      }
      players[index].score--;
      let newPlayers = [...players];

      localStorage.game = JSON.stringify(newPlayers);

      document.querySelector(".principal").children[
        index
      ].children[1].innerHTML = players[index].score;
    }
  }
}

function addPlayerToGame(players) {
  let principal = document.querySelector("#principal");
  let player = document.createElement("div");
  player.setAttribute("class", `${players.name}`);
  player.innerHTML = `
            <h1>${players.name}</h1>
            <div class="display">${players.score}</div> 
            <button class="fa fa-plus-circle" 
              id="${players.name}" 
              onclick="addPonto('${players.name}')">
            </button>
            <button class="fa fa-minus-circle" 
              id="${players.name}" 
              onclick="subPonto('${players.name}')">
            </button>         
      `;
  principal.appendChild(player);

  document.querySelector("#namePlayer").value = "";
}

const getGamers = () =>
  localStorage.game ? JSON.parse(localStorage.game) : [];

function createPlayer() {
  const name = document.querySelector("#namePlayer").value;
  const players = { name, score: 0 };

  const game = getGamers();
  game.push(players);

  localStorage.game = JSON.stringify(game);

  addPlayerToGame(players);
}

function clearGame() {
  localStorage.clear("game");
  window.location.reload();
}

renderGame();
