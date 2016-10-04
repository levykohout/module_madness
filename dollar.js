//The second module should accept a number and convert it to a USD value. You can find some good implementations of this online.

var randomNumber = require('./random');

function convertToDollar(number){

  return number.toLocaleString('en-us',{currency:'USD',style:'currency'});

}

module.exports = convertToDollar;
