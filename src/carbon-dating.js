const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') return false;

  let parsedString = parseFloat(sampleActivity);
  if (isNaN(parsedString)) {
    return false;
  }
  if (parsedString > MODERN_ACTIVITY || parsedString <= 0) {
    return false;
  }
  const a = 0.693 * 100000 / HALF_LIFE_PERIOD / 100000;
  let log = Math.log10(MODERN_ACTIVITY / parsedString);

  return Math.floor(log / a);
}

module.exports = {
  dateSample
};
