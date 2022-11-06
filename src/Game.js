const Io = require('./Io');
class Game {
  constructor() {
  }

  /**
   * 커맨드를 실행한다.
   * @public 
   * @method
   * @return {} void
   * @description 게임을 시작한다. 클래스 외부에서 호출한다. 
   */
  playCommand () {}
  
  /**
   * - 두 숫자배열을 비교한다.
   * @param {[number, number, number]} computerNumber 
   * @param {[number, number, number]} input 
   * @return {{strike:number, ball:number}}
   */
  compare (computerNumber, input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      if(computerNumber[i] === input[i]) {
        strike++;
      }else if(computerNumber.includes(input[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }
}

module.exports = Game;
