// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length;
  if (cardNumber.slice(0, 1) === '4') {
    var prefix = '4';
  } else {
    prefix = cardNumber.slice(0, 2);
  }
  var network = {};
  network.prefix = prefix
  network.length = length

  var AmEx = {
    prefix: ['34', '37'],
    length: [15],
    name: 'American Express'
  };

  var DinClub = {
    prefix: ['38', '39'],
    length: [14],
    name: 'Diner\'s Club'
  };

  var Visa = {
    prefix: ['4'],
    length: [13, 16, 19],
    name: 'Visa'
  };

  var MastCard = {
    prefix: ['51', '52', '53', '54', '55'],
    length: [16],
    name: 'MasterCard'
  };
  
  var networks = [AmEx, DinClub, Visa, MastCard]

  networks.forEach(function(net) {
    if (net.prefix.indexOf(network.prefix) + 1 &&
        net.length.indexOf(network.length) + 1) {
          return network.name = net.name;
        }
  });
  return network.name;
}
  



