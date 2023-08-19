
// You should implement your task here.

const { sort } = require("semver");

module.exports = function towelSort (matrix) {
  let result = [];
  
  if (matrix === undefined || matrix.length === 0)
  {return result;}
  else {
    for (let i=0; i<matrix.length; i++) {
        if (i%2 == 0) {
            for ( j=0; j<matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        } else {
            for (j=matrix[i].length-1; j>-1; j--) {
                result.push(matrix[i][j]);
        }
    }
    }
    return result;
  }
};