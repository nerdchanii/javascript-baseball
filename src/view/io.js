const { Console } = require('@woowacourse/mission-utils');



const input = (msg, callback) => {
  Console.readLine(msg, callback);
}


const output = (msg) => {
  Console.print(msg);
}

module.exports = { input, output };