//CREDITS - http://www.replit.com/IUhJ/3
function humanReadable(seconds) {
  var hours = parseInt( seconds / 3600 );
  var minutes = parseInt( seconds / 60 ) % 60;
  seconds = seconds % 60;
  
  function format(x) {
    return x < 10 ? "0" + x : x;
  }
  
  return format(hours) + ":" + format(minutes) + ":" + format(seconds);
}
