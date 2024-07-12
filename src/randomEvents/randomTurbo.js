async function randomTurbo() {
    let random = Math.random();
    let speed;
  
    switch (true) {
      case random < 0.65:
        speed = "TURBO";
        break;
      default:
        speed = "NO-TURBO";
    }
  
    return speed;
  };

  module.exports = randomTurbo;