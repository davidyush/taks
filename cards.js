var cards = [
  "From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.",
  "Take train 78A from Madrid to Barcelona. Seat 45B.",
  "Take the airport bus from Barcelona to Gerona Airport. No seat assignment.",
  "From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg."
  ];


var regTo = /(T|t)o\s([A-Z]\w*\s?)*/g;
var regFrom = /(F|f)rom\s([A-Z]\w*\s?)*/g;

function getFrom(str) {
  var result = [];
  var arr = str.match(regFrom).join(" ").trim().split(" ");
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() !== 'from')
      result.push(arr[i]);
  }
  return result.join(" ");
}

function getTo(str) {
  var result = [];
  var arr = str.match(regTo).join(" ").trim().split(" ");
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() !== 'to')
      result.push(arr[i]);
  }
  return result.join(" ");
}


var pathCards = [];
for(var i = 0; i < cards.length; i++) {
  pathCards.push({
    from: getFrom(cards[i]),
    to: getTo(cards[i]),
    index: i
  });
}


from = [];
for(var i = 0;i < pathCards.length; i++) {
  from.push(pathCards[i].from);
}
to = [];
for(var i = 0;i < pathCards.length; i++) {
  to.push(pathCards[i].to);
}

function contain(str,arr) {
  for(var i = 0; i < arr.length; i++) {
    if(str === arr[i])
      return true;
  }
  return false;
}


var temp = [];
//get first card
for(var i = 0; i < cards.length;i++) {
  if( !contain(pathCards[i].from,to) )
    temp.push(pathCards[i]);
}


//get others
for(var i = 0; i < pathCards.length; i++) {
  var current = 0;
  for(var j = 0; j < pathCards.length; j++) {


  }
}

console.log("temp",temp);
