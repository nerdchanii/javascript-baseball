const Car = require('../model/Car');
const moveJudgeFn = require('../utils/moveJuge');
const Judge = require('../model/Judge');
class CarGame {
  constructor() {
    this.judge = new Judge();
  }

  makeCars(names) {
    this.cars = names.map((carName) => new Car(carName));
    this.judge.setCars(this.cars);
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


  getWinners() {
    return this.judge.getWinners();
  }

}

module.exports = CarGame;