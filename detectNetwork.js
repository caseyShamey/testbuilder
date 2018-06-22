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

  var sixDigitPrefixes = ['564182', '633110'];
  rangePush(sixDigitPrefixes, 622126, 622925)

  var fourDigitPrefixes = ['6011', '5018', '5020', '5038', '6304', '4903', '4905', '4911', '4936', '6333', '6759'];
  rangePush(fourDigitPrefixes, 6282, 6288);

  var threeDigitPrefixes = ['644', '645', '646', '647', '648', '649', '624', '625', '626']

  if (sixDigitPrefixes.indexOf(cardNumber.slice(0, 6)) !== -1) {
    var prefix = cardNumber.slice(0, 6);
  } else if (fourDigitPrefixes.indexOf(cardNumber.slice(0, 4)) !== -1) {
    prefix = cardNumber.slice(0, 4);
  } else if (threeDigitPrefixes.indexOf(cardNumber.slice(0, 3)) !== -1) {
    prefix = cardNumber.slice(0, 3);
  } else if (cardNumber.slice(0, 1) === '4') {
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

  var Discover = {
    prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    length: [16, 19],
    name: 'Discover'
  }

  var Maestro = {
    prefix: ['5018', '5020', '5038', '6304'],
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    name: 'Maestro'
  }
  
  var chUnPayArray = [];
  rangePush(chUnPayArray, 622126, 622925)
  rangePush(chUnPayArray, 624, 626)
  rangePush(chUnPayArray, 6282, 6288)

  var ChUnPay = {
    prefix: chUnPayArray,
    length: [16, 17, 18, 19],
    name: 'China UnionPay'
  }

  var Switch = {
    prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    length: [16, 18, 19],
    name: 'Switch'
  }
  
  var networks = [AmEx, DinClub, Visa, MastCard, Discover, Maestro, ChUnPay, Switch]

  networks.forEach(function(net) {
    if (net.prefix.indexOf(network.prefix) + 1 &&
        net.length.indexOf(network.length) + 1) {
          return network.name = net.name;
        }
  });
  return network.name;
}
  
function rangePush(array, start, end) {
  var counter = start - 1;
  for (var i = 0; i < end - start + 1; i++) {
    counter = counter + 1;
    array.push(counter.toString());
  }
}



