class Judge {

  setCars(cars) {
    this.cars = cars;
  }


  getWinners() {
    const high = this.#getHighScore();
    const winners = this.cars
      .filter((car) => car.position === high)
      .map((car) => car.name);
    return winners;
  }

  #getHighScore() {
    return Math.max(...this.cars.map((car) => car.position));
  }
}

module.exports = Judge;