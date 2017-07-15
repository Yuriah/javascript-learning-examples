//MY EXAMPLE - UNFINISHED [Needs to handle uppercase letters.]
//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
function rot13(str) {
  var splitWords = str.split(" "), newWord = [];
  for (var i = 0; i < splitWords.length; i++) {
    newWord.push(shiftWord(splitWords[i]));
  }
  
  return newWord.join(" ");
}

function shiftWord(word) {
  var splitWord = word.split(""), shifted = [];
  for (var i = 0; i < word.length; i++) {
    shifted.push(shiftLetter(splitWord[i]));
  }
  return shifted.join("");
}

function shiftLetter(letter) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz", index = -1, shiftTotal = 0, shift = 13, dif = -1;

  for (var i = -1; i < alphabet.length; i++) {
    if (letter == alphabet[i]) {
      index = i;
    }
  }
  
  shiftTotal = shift + index;
  
  if (shiftTotal >= 26) {
    dif = shiftTotal - alphabet.length;
  }
  
  if (index < 0)
    return letter;
  
  if (dif > -1) {
    return alphabet[dif];
    } else
    return alphabet[shiftTotal];
}


//OTHER VARIATIONS - Stuhl
function rot13(str) {
  let strArr = str.split("");             // Splitting str into an array because the .map only accepts arrays
  
  let storeArr = strArr.map(function(val) {
    
    let charCode = val.charCodeAt();          // some variables for shorter code in if conditions
    let toChar = String.fromCharCode;
    
    if (charCode >= 65 && charCode <= 77) {             // Check from A-M
      return toChar(charCode + 13);
    } else if (charCode >= 78 && charCode <= 90) {      // Check from N-Z
      return toChar(charCode - 13);
    } else if (charCode >= 97 && charCode <= 109) {     // Check from a-m
      return toChar(charCode + 13);
    } else if (charCode >= 110 && charCode <= 122) {    // Check from n-z
      return toChar(charCode - 13);
    } else {                                            // Check rest and return the same (e.g # is #);
      return val;
    // Map is basically the same as a for loop, so you can use that too
    }
  
  return storeArr.join("")    // return the result
}

console.log(rot13("Hey buddy this sh#t works now ^^"));
