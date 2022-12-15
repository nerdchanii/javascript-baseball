const moveJudgeFn = require('../utils/moveJuge');

class CarGame {
  constructor() {
  }

  getCars(names) {
    this.cars = names.map((carName) => new Car(carName));
  }

  playTurn() {
    this.cars.reduce((canGo, car) => {
      if (canGo()) {
        car.move();
      }
      return canGo;
    }, moveJudgeFn)
  }


}

module.exports = CarGame;