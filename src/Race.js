let getRandomBlock = require("./randomEvents/randomBlock");
let randomBatlle = require("./randomEvents/randomBatlle");
let randomTurbo = require("./randomEvents/randomTurbo");
let rollDice = require("./randomEvents/rollDice");

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      let batlle = await randomBatlle();
      console.log(`O confronto entre: ${batlle}`);

      let turbo = await randomTurbo();

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2) {
        if (character2.PONTOS === 0) {
          console.log(`${character1.NOME} venceu o confronto! e o ${character2.NOME} não tem pontos para perder!`);
        }

        if (batlle === "BOMBAS" && character2.PONTOS > 1) {
          character2.PONTOS -= 2
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 2 pontos 🐢`
          );
        }
        if (batlle === "BOMBAS" && character2.PONTOS === 1) {
          character2.PONTOS--;
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
          );
        }

        if (batlle === "CASCOS" && character2.PONTOS > 0) {
          character2.PONTOS--;
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
          );
        }

        if (turbo === "TURBO") {
          character1.PONTOS++;
          console.log(
            `${character1.NOME} ganhou um TURBOOOO!!!! e mais 1 ponto 🐢`
          );
        }
      }

      if (powerResult2 > powerResult1) {
        if (character1.PONTOS === 0) {
          console.log(`${character2.NOME} venceu o confronto! e o ${character1.NOME} não tem pontos para perder!`);
        }

        if (batlle === "BOMBAS" && character1.PONTOS > 1) {
          character1.PONTOS -= 2
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 2 pontos 🐢`
          );
        }
        if (batlle === "BOMBAS" && character1.PONTOS === 1) {
          character1.PONTOS--;
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
          );
        }
        if (batlle === "CASCOS" && character1.PONTOS > 0) {
          character1.PONTOS--;
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
          );
        }

        if (turbo === "TURBO") {
          character2.PONTOS++;
          console.log(
            `${character2.NOME} ganhou um TURBOOOO!!!! e mais 1 ponto 🐢`
          );
        }
      }
    }
    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    }
    if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }
    if (totalTestSkill2 === totalTestSkill1 && totalTestSkill1 !== 0) {
      console.log(`Confronto empatado ninguém marca ponto!`);
    }

    console.log("-----------------------------");
  }
}

module.exports = playRaceEngine;
