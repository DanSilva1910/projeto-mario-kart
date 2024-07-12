async function getRandomBlock() {
    let random = Math.random();
    let result;
  
    switch (true) {
      case random < 0.33:
        result = "RETA";
        break;
      case random < 0.66:
        result = "CURVA";
        break;
      default:
        result = "CONFRONTO";
    }
  
    return result;
  }

  module.exports = getRandomBlock;

