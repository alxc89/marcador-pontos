const express = require("express");

const server = express();
const port = 3000;

server.use(express.static("public"));

server.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});
server.get("/placar-domino", (req, res) => {
  return res.sendFile(__dirname + "/views/placar-domino.html");
});
server.get("/placar-uno", (req, res) => {
  return res.sendFile(__dirname + "/views/placar-uno.html");
});
server.get("/placar-canastra", (req, res) => {
  return res.sendFile(__dirname + "/views/placar-canastra.html");
});

server.listen(port);
