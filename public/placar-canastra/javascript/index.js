function createPlayers(players) {
  let timeA = document.querySelector("#teamOnePlayerOne");
  let timeB = document.querySelector("#teamOnePlayerTwo");
  let times = document.createElement("div");
 
  

}

const getGamers = () =>
  localStorage.game ? JSON.parse(localStorage.game) : [];

function createDatePlayers() {
  const name = document.querySelector("#namePlayer").value;
  const players = { name, score: 0 };

  const game = getGamers();
  game.push(players);

  localStorage.game = JSON.stringify(game);

  createPlayers(players);
}
