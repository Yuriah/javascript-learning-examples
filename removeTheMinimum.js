
function removeSmallest(numbers) {
	var index = 0, smallest = Number.MAX_VALUE, array = numbers;
  for (var i = 0; i < numbers.length; i++) {
    smallest = (array[i] < smallest) ? array[i]:smallest;
    index = array.indexOf(smallest);
    console.log("Smallest: " + smallest + " Index: " + index);
  }
  var remove = function() {
    return array.splice(index, 1) && console.log("Removed " + smallest + " at Index " + index);
  }
  (index > -1) ? remove : console.log("Index is less than 0");
  return array;
}
