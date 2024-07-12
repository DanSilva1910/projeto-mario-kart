const readline = require("readline");
const Runner = require("./Runner");
const playRaceEngine = require("./Race");

const runners = [
  new Runner("Mario", 4, 3, 3),
  new Runner("Luigi", 3, 4, 4),
  new Runner("Bowser", 5, 2, 5),
  new Runner("Peach", 3, 4, 2),
  new Runner("Yoshi", 3, 4, 3),
  new Runner("Donkey Kong", 3, 2, 5),
];

function showRuners() {
  runners.forEach((runner, index) => {
    console.log(`Nome: ${runner.NOME},
                        Velocidade: ${runner.VELOCIDADE}, 
                        Manobrabilidade: ${runner.MANOBRABILIDADE},
                        Poder: ${runner.PODER},
                        Pontos: ${runner.PONTOS}\n`);
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayRunners() {
  runners.forEach((runner, index) => {
    console.log(`${index + 1}. ${runner.NOME}`);
  });
}

function getRandomPlayer(excludePlayer) {
  let randomPlayer;
  do {
    randomPlayer = runners[Math.floor(Math.random() * runners.length)];
  } while (randomPlayer === excludePlayer);
  return randomPlayer;
}

async function main() {
  showRuners();
  console.log("Escolha um jogador para correr:");
  displayRunners();

  rl.question("Digite o número do jogador: ", (answer) => {
    const player1Index = parseInt(answer) - 1;
    if (player1Index >= 0 && player1Index < runners.length) {
      const player1 = runners[player1Index];
      const player2 = getRandomPlayer(player1);

      console.log(`\nVocê escolheu ${player1.NOME}`);
      console.log(`O outro jogador será ${player2.NOME}\n`);

      (async () => {
        console.log(
          `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
        );
        await playRaceEngine(player1, player2);
        await declareWinner(player1, player2);
        rl.close();
      })();
    } else {
      console.log("Escolha inválida. Tente novamente.");
      rl.close();
    }
  });
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

main();
