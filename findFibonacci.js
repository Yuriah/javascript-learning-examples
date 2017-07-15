function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

/*
fibonacci(4)   .--------> 2 + 1 = 3
      |          /               |
      '--> fibonacci(3) + fibonacci(2)
            |    ^           
            |    '----------- 2 = 1 + 1 <----------.
1st step -> |                     ^                |
            |                     |                |
            '---->  fibonacci(2) -' + fibonacci(1)-'
*/

//OTHER VARIATIONS
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}

//OTHER VARIATIONS
fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10)
