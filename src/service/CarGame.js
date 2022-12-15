const moveJudgeFn = require('../utils/moveJuge');

class CarGame {
  constructor() {
  }

  getCars(names) {
    this.cars = names.map((carName) => new Car(carName));
  }


}

module.exports= CarGame;