function diceNum() {
  let diceRandom1 = Math.floor(Math.random() * 6) + 1;
  let diceRandom2 = Math.floor(Math.random() * 6) + 1;
  let dadoUm = `imgs/dice${diceRandom1}.png`;
  let dadoDois = `imgs/dice${diceRandom2}.png`;
  document.querySelector("#imgdice1").src = dadoUm;
  document.querySelector("#imgdice2").src = dadoDois;

  if (diceRandom1 == diceRandom2) {
    document.querySelector("h1").textContent = "Empate";
  } else if (diceRandom1 > diceRandom2) {
    document.querySelector("h1").textContent = "Jogador 1 venceu";
  } else {
    document.querySelector("h1").textContent = "Jogador 2 venceu";
  }
}
