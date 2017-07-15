function narcissistic( value ) {
  var remaining = value,
      digits = [],
      solution = 0;
  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  
  return value == digits.reduce(function(p,n) {
    return p + Math.pow(n,digits.length);
  },0);
}

//OTHER VARIATIONS
function narcissistic(x) {
  var n = 1 + Math.floor(Math.log(x)/Math.log(10));
  for (var y = x; y != 0; y = Math.floor(y/10)) {
    x -= Math.pow(y%10, n);
  }
  return x == 0;
}

//OTHER VARIATIONS
function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

//OTHER VARIATIONS
function narcissistic(number) {
    var arrayOfDigitals = number.toString().split(''),
        numberLength = arrayOfDigitals.length,
        sum = 0;

    arrayOfDigitals.forEach(function(digit) {
        sum += Math.pow(digit, numberLength);
    });

    return sum === number;
}
