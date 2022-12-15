const CarGame = require("../service/CarGame");
const View = require('../view/View');

class Controller {
  constructor() {
    this.service = new CarGame();
    this.view = new View();
  }

  play() {
    this.view.getCarNames((names) => {
      this.service.makeCars(names);
      this.playRounds();
    })
  }

  playRounds() {
    this.view.getMoveCount((counts) => {
      for (let i = 0; i < counts; i++) {
        this.playTurn();
      }
      this.showResult();
    });
  }

  playTurn() {
    this.service.playTurn();
    this.view.printStatus(this.service.getStatus())
  }

  showResult() {
    this.view.printWinner(this.service.getWinners());
  }

}


module.exports = Controller;