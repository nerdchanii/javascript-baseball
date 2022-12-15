const { Random } = require('@woowacourse/mission-utils');
const RULE = require('../constants/rule.constants');

const moveJudge = () => {
  const randomValue = Random.pickNumberInRange(RULE.RANDOM_VALUE.MIN, RULE.RANDOM_VALUE.MAX);
  if (randomValue >= RULE.MOVE_BOUNDARY) return true;
  return false;
}

module.exports = moveJudge