var isSquare = function(target){
   // handle 0 and 1
    if (target > -1 && target <= 1)
        return true;
    if (target < 0)
        return false;

    var currentSquare = 4;
    var currentNumber = 2;

    // loop through till the target is more than
    // the square of the current number
    while (currentSquare <= target)
    {
        // if we have a match, return true
        if (currentSquare == target)
            return true;
        // increment current number
        currentNumber++;
        // find the next square
        currentSquare = currentNumber * currentNumber;
    }

    // no matching number could be squared
    return false;
}
