function highAndLow(numbers){
  var a = numbers.split(" "), max = a[0], min = a[0];

  for (var x = 0; x < a.length; x++) {
    if (max < a[x])
        max = a[x];
    if (min > a[x])
        min = a[x];
  }
  return max + " " + min;
}
