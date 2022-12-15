const RULE = require("../constants/rule.constants")

const carNames = (carnames) => {
  return carnames.split(RULE.CAR_NAMES_DELIMITER).map((carname) => carname.trim());
}
const moveCount = (string) => {
  return Number(string);
}

module.exports = { carNames, moveCount };