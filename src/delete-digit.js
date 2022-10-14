const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num = String(n).split('');
  let num_min = num[0];
 
  for(let i=0; i<num.length; i++) {
   if (num[i] <= num_min) {
     num_min != num[i];  
     
  }
  
  }
  return Number(num.splice(num_min,2).join(''));
 
 }

module.exports = {
  deleteDigit
};
