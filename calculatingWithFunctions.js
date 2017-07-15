//Creates a variable that takes two parameters (number, operation) for the operations
var expr = function (number, operation) {
            //If the operation doesn't exist, it will return the number
            if (!operation)
                return number;
            //Else, it will return 
            return operation(number);
        }

        function zero(operation) { return expr(0, operation) }
        function one(operation) { return expr(1, operation) }
        function two(operation) { return expr(2, operation) }
        function three(operation) { return expr(3, operation) }
        function four(operation) { return expr(4, operation) }
        function five(operation) { return expr(5, operation) }
        function six(operation) { return expr(6, operation) }
        function seven(operation) { return expr(7, operation) }
        function eight(operation) { return expr(8, operation) }
        function nine(operation) { return expr(9, operation) }

        function plus(a) {
            return function (b) {
                return b + a;
            }
        }
        function minus(a) {
            return function (b) {
                return b - a;
            }
        }
        function times(a) {
            return function (b) {
                return a * b;
            }
        }
        function dividedBy(a) {
            return function (b) {
                return b / a;
            }
        }

//OTHER VARIATIONS
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

//OTHER VARIATIONS
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };
