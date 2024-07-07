const Runner = require('./Runner');
const playRaceEngine = require('./Race')


const Mario = new Runner("Mario", 4, 3, 3);
const Luigi = new Runner("Luigi", 3, 4, 4);
const Bowser = new Runner("Bowser", 5, 2, 5);
const Peach = new Runner("Peach", 3, 4, 2);
const Yoshi = new Runner("Yoshi", 3, 4, 3);
const DonkeyKong = new Runner("Donkey Kong", 3, 2, 5);

Mario.displayInfo();
Luigi.displayInfo();
Bowser.displayInfo();
Peach.displayInfo();
Yoshi.displayInfo();
DonkeyKong.displayInfo();

player1 = Mario;
player2 = Bowser;

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

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
