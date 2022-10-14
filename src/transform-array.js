const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let newArray = arr.slice();

  for (let i = 0; i < newArray.length; i++) {
    switch (newArray[i]) {
      case ('--discard-next'):
        newArray.splice(i + 1, 1, null);
        newArray.splice(i, 1, null);
        break;
      case ('--discard-prev'):
        newArray.splice(i - 1, 1, null);
        newArray.splice(i, 1, null);
        break;
      case ('--double-next'):
        newArray.splice(i + 1, 0, newArray[i + 1]);
        newArray.splice(i, 1, null);
        break;
      case ('--double-prev'):
        newArray.splice(i, 1, null);
        newArray.splice(i - 1, 0, newArray[i - 1]);
        break;
      case (undefined):
        newArray.splice(i, 1, null);
      default: break;
      }
  }
  let finalArray = newArray.filter((item) => item !== null);
  return finalArray;
}

module.exports = {
  transform
};
