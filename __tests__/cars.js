const Car = require('../src/model/Car')

describe('자동차게임 테스트', () => {
  test('자동차 생성하기', () => {
    const car = new Car('hello');


    expect(car.name).toEqual('hello');
  })
})