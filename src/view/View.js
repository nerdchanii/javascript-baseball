const { input, output } = require("./io");
const MESSAGE = require("../constants/view.constants");
const refiner = require('../utils/refiner');
const RULE = require("../constants/rule.constants");

class View {
  constructor() {
    this.input = input;
    this.output = output;
  }

  // 사용자는 자동차의 이름을 입력할 수 있다.
  getCarNames(callback) {
    this.input(MESSAGE.INPUT.CAR_NAMES,
      this.errorBoundary(
        this.getCarNames.bind(this),
        (carnames) => {
          const refinedCarNames = refiner.carNames(carnames);
          callback(refinedCarNames);
        }
      )
    );
  }

  getMoveCount(callback) {
    this.input(MESSAGE.INPUT.MOVE_COUNT,
      this.errorBoundary(
        this.getMoveCount.bind(this),
        (input) => {
          const refinednumber = refiner.moveCount(input);
          callback(refinednumber);
        }
      )
    );
  }

  printWinner(winners) {
    if (winners.length === 1) {
      this.output(`${MESSAGE.OUTPUT.WINNER} ${MESSAGE.OUTPUT.COMPOSITE_DELIMITER} ${winners}`);
    } else {
      this.output(`${MESSAGE.OUTPUT.WINNER} ${MESSAGE.OUTPUT.COMPOSITE_DELIMITER} ${winners.join(MESSAGE.OUTPUT.WINNER_COMPOSE)}`);
    }
  }
  printStatus(cars) {
    const carDisplays = cars.map(([carName, point]) => {
      return `${carName} ${MESSAGE.OUTPUT.COMPOSITE_DELIMITER} ${MESSAGE.OUTPUT.CAR_MOVED_LOG.repeat(point)}`
    });
    this.output(carDisplays.join('\n'));
  }


  errorBoundary(caller, callback) {
    return (input) => {
      try {
        callback(input);
      } catch (e) {
        this.output(e.message);
        caller(callback);
      }
    }
  }
}

module.exports = View;
