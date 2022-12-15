const Car = require('../model/Car');
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


  getStatus() {
    return this.cars.map((car) => {
      return [car.name, car.position];
    })
  }

}

module.exports = CarGame;