var randomNumber = require('./random');
var dollar = require('./dollar');

exports.getNumber = function(){
var number = randomNumber(100, 1000000);
return dollar(number);
}

exports.display = function (){
  return 'Account balance: \n';
}
