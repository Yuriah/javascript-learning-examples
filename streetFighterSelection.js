function streetFighterSelection(fighters, position, moves){
  var result = [];
  
  moves.forEach(function(move) {
    if (move === "up") {
      position[0] = 0;
    }
    else if (move === "down") {
      position[0] = 1;
    }
    else if (move === "right") {
      position[1] = (position[1] === 5) ? 0 : position[1] + 1;
    }
    else if (move === "left") {
      position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    }
    
    result.push(fighters[position[0]][position[1]]);
  });
  
  return result;
}

//OTHER VARIATIONS
function streetFighterSelection(fighters, position, moves){
  var res = [], i = position[0], j = position[1];
  for (var k = 0; k < moves.length; k++) {
      if (moves[k] === 'up')
         i = i === 1 ? 0 : i;
      else if (moves[k] === 'down')
         i = i === 0 ? 1 : i;
      else if (moves[k] === 'left')
         j = j === 0 ? fighters[0].length - 1 : j - 1;
      else if (moves[k] === 'right')
         j = j === fighters[0].length - 1 ? 0 : j + 1;
      res.push(fighters[i][j]);
  }
  return res;
}

//OTHER VARIATIONS
function streetFighterSelection(fighters, position, moves)
{ 
  // Create function that reads the move value and then returns the new position 
  // Take this position put it into the array, and then add the new character to the array of characters selected 
  // For the move function, just return a new position value based on what they did previously. 
  // For down, if first index is 0, then do not change position, otherwise add 1. 
  // Get into list of moves, for each one add the new character or return value of move function to the master array 
  var selectedArray = []; 
  for (var i=0;i<moves.length;i++) 
  { 
    selectedArray.push(charSelected(position,moves[i]));
  }
  return selectedArray; 
}
var fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
] 
function charSelected(position,move) 
{ 
  if (move === 'up') 
  { 
    if (position[0] === 0) 
    { 
      return fighters [position[0]][position[1]];
    }else 
    { 
     position[0]-=1; 
     return fighters [position[0]][position[1]];
    }
  }else if (move === 'down') 
  { 
    if (position[0] === 1) 
    {
      return fighters[position[0]][position[1]];
    }else 
    { 
      position[0]+=1;
      return fighters[position[0]][position[1]];
    }
  }else if (move === 'left')
  { 
    if (position[1] === 0) 
    { 
      position[1] = 5; 
      return fighters[position[0]][position[1]];
    }else 
    { 
      position[1]-=1; 
      return fighters[position[0]][position[1]];
    }
  } else if (move === 'right')
  { 
    if (position[1] === 5) 
    { 
     position[1] = 0;
     return fighters[position[0]][position[1]];
    }else 
      { 
       position[1] +=1; 
       return fighters[position[0]][position[1]];
      }
  }else 
  { 
    return undefined; 
  }
  
}
 
