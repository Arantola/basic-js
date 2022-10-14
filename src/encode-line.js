const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encodedLine = '', row = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      row += 1;
    } else {
      row > 1 ? encodedLine += `${row}${str[i]}` : encodedLine += `${str[i]}`;
      row = 1;
    }
  }
  return encodedLine;
}

module.exports = {
  encodeLine
};
