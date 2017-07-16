//Yuriah

function HolidayPriorityQueue(){
  this.gifts = [];
}

HolidayPriorityQueue.prototype.addGift = function(gift){
    var priority = gift.priority;
    var giftArrayLength = this.gifts.length;
function HolidayPriorityQueue(){//Techinically its just a function, but it will become an Object. We give it an array gifts[]
  this.gifts = [];//Creates an array inside the Object
  //this reffers to the instance of the object
  //var obj1 = new HolidayPriorityQueue(); //same constructor, but its a differente instance. If I edit obj1, it wont affect obj2, or the HolidayPriorityQueue() constructor
  //var obj2 = new HolidayPriorityQueue();
}

//Adds the addGift method to our Object HolidayPriorityQueue() with 1 parameter (gift);
HolidayPriorityQueue.prototype.addGift = function(gift){
    var priority = gift.priority;
    var giftArrayLength = this.gifts.length;//Again, this reffers to the current instance of the object. So its own length from our gifts[] array

    this.gifts.push(gift);
    this.gifts.sort(function(a, b) {//Thanks Stuhl
      return a.priority - b.priority;
    })
  return this.gifts.length;
}

HolidayPriorityQueue.prototype.buyGift = function(){
  if (this.gifts.length == 0) {
    return '';
  }
  
  let giftName = this.gifts.shift();
  return giftName.gift;
}

//OTHER VARIATIONS - Stuhl
let arrObj = [];

function addGift(obj) {
  arrObj.push(obj);
  arrObj.sort(function(a, b) {         // sort the gifts from low to high priority (smaller numbers have higher priority)

    return a.priority - b.priority;
  })
  return arrObj.length;
}


function buyGift() {                        
  let giftName = arrObj[0] !== undefined ? arrObj[0].gift : "Error! Your shopping card is empty.";
   
  arrObj.shift();              // Above ternary is pretty easy: If arrObj is not empty, giftName = the gifts name (e.g 1080 ti)
  return giftName;             // else giftName = "Error! Your shopping card is empty."
}

console.log(addGift({gift: "toy", priority: 5}));         // --> 1 (returns the length of the array)
console.log(addGift({gift: "1080 ti", priority: 1}));     // --> 2

console.log(buyGift());     // --> 1080 ti               
console.log(buyGift());     // --> toy
console.log(buyGift());     // --> Error! Your shopping card is empty.
