const { MAXIMUM_CAR_NAME } = require("../constants/rule.constants");

class Car {
  position = 0;
  constructor(name) {
    this.validator(name);
    this.name = name;
  }

  move() {
    this.position += 1
  }


  validator(name) {
    if (name.length > MAXIMUM_CAR_NAME) throw new Error('[ERROR]')
  }


}

module.exports = Car;