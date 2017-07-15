function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//OTHER VARIATIONS

function solution(number){
  for(
      var sum = 0, i = 1;
      i < number;
      !(i % 3 && i % 5) && (sum += i), i++
  );
  return sum;
}

//OTHER VARIATIONS

function solution(number){
  for(
    var arr = [], i = 1;
    i < number;
    !(i % 3 && i % 5) && arr.push(i), i++
);
// Sum the array
return arr.reduce(function(prev, current) {
      return prev + current
  });
}
