const RULE = require('./rule.constants');

const MESSAGE = Object.freeze({
  INPUT: {
    CAR_NAMES: `자동차 이름을 ${RULE.MAXIMUM_CAR_NAME}자 이하 콤마로 구분하여 입력해주세요\n`,
    MOVE_COUNT: '시도할 횟수를 입력해주세요.\n'
  },
  OUTPUT: {
    PREFIX_RESULT: '실행결과 출력\n',
    WINNER: '최종우승자',
    CAR_MOVED_LOG: '-',
    COMPOSIT_FORMAT: ':'
  }
});

module.exports = MESSAGE;