async function randomBatlle() {
    let random = Math.random();
    let matchup;
  
    switch (true) {
      case random < 0.5:
        matchup = "CASCOS";
        break;
      default:
        matchup = "BOMBAS";
    }
  
    return matchup;
  }

  module.exports = randomBatlle;