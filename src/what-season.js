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
    let newdate = new Date(date);
    let mouth = newdate.getMonth();
    console.log(mouth);
   if (!date) {
     return "Unable to determine the time of year!"
   } ;if (!(date instanceof Date)){
    throw new Error('Invalid date!');
   };if (mouth === 11 || mouth <=1){
    return "winter";
  } else if (mouth <= 4){
    return "spring";
   } else if(mouth <= 7){
    return "summer";
   } else if(mouth <= 10){
    return "autumn";
   }
  }


module.exports = {
  getSeason
};
