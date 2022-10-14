const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  let mainArray     = [],
      additionArray = [];

  str = String(str);
  options.repeatTimes = options.repeatTimes ? Number(options.repeatTimes) : 1;
  options.separator = options.separator ? String(options.separator) : '+';

  options.addition = options.addition !== undefined ? String(options.addition) : '';
  options.addition = options.addition ? String(options.addition) : '';
  options.additionRepeatTimes = options.additionRepeatTimes ? Number(options.additionRepeatTimes) : 1;
  options.additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArray.push(options.addition);
  }

  let addition        = additionArray.join(options.additionSeparator),
      strWithAddition = '' + str + addition;

  for (let i = 0; i < options.repeatTimes; i++) {
    mainArray.push(strWithAddition);
  }

  return mainArray.join(options.separator);
};

module.exports = {
  repeater
};
