const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 function minesweeper(matrix) {
  const rowAmount = matrix.length,
        colAmount = matrix[0].length;
  
  let numMatrix = [];
  for (let row = 0; row < rowAmount; row++) {
    numMatrix[row] = [];
    for (let col = 0; col < colAmount; col++) {
      numMatrix[row][col] = 0;
    }
  }

  for (let row = 0; row < rowAmount; row++) {
    for (let col = 0; col < colAmount; col++) {
      try {
        if (matrix[row+1][col]) numMatrix[row][col]++; 
      } catch {}
      try {
        if (matrix[row+1][col+1]) numMatrix[row][col]++;
      } catch {}
      try {
        if (matrix[row][col+1]) numMatrix[row][col]++;
      } catch {}
      try {
        if (matrix[row-1][col+1]) numMatrix[row][col]++;
      } catch {}
      try {
        if (matrix[row-1][col]) numMatrix[row][col]++; 
      } catch {}
      try {
        if (matrix[row-1][col-1]) numMatrix[row][col]++;
      } catch {}
      try {
        if (matrix[row][col-1]) numMatrix[row][col]++;
      } catch {}
      try {
        if (matrix[row+1][col-1]) numMatrix[row][col]++;
      } catch {}
    }
  }
  return numMatrix;
}

module.exports = {
  minesweeper
};
