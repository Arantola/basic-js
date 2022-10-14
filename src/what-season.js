const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // if (!date) {
  //   return 'Unable to determine the time of year!'
  // }

  // if (isNaN(date.getUTCHours())) {
  //   throw new Error('Invalid date!');
  // }

  // let dateFromStr = new Date(date);
  // let month = dateFromStr.getMonth();

  // switch (month) {
  //   case (0 || 1 || 11):
  //     return 'winter';
  //   case (2 || 3 || 4):
  //     return 'spring';
  //   case (5 || 6 || 7):
  //     return 'summer';
  //   case (8 || 9 || 10):
  //     return 'autumn';
  // }
};

module.exports = {
  getSeason
};
