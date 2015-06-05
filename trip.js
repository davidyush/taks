var allCards = [
  {
    from: "Stockholm",
    to: "New York JFK",
    transport: {
      type: "flight SK22",
      gate: "22",
      seat: "7B"
    },
    moreInfo:"Baggage will be automatically transferred from your last leg."
  },

  {
    from: "Barcelona",
    to: "Gerona Airport",
    transport: {
      type: "airport bus"
    }
  },
  {
    from: "New York JFK",
    to: "The 770",
    transport: {
      type: "on your foots"
    }
  },
  {
    from: "Gerona Airport",
    to: "Stockholm",
    transport: {
      type: "flight SK455",
      gate:"45B",
      seat: "3A"
    },
    moreInfo:"Baggage drop at ticket counter 344"
  },
  {
    from: "Madrid",
    to: "Barcelona",
    transport: {
      type: "train 78A",
      seat: "45B"
    }
  }
];

// @cards are array of objects with string properties
var sortCards = function(cards) {
  //making arrays from and to ,each of them has names of cities
  var from = [];
  var to = [];

  for(var i = 0; i < cards.length;i++) {
    from.push(cards[i].from);
  }

  for(var i = 0; i < cards.length;i++) {
    to.push(cards[i].to);
  }

  function contain(str,arr) {
    for(var i = 0; i < arr.length; i++) {
      if(str === arr[i])
        return true;
    }
    return false;
  }

  //get name of first city
  function getStart(from,to) {
    for(var i = 0; i < to.length; i++) {
      if(contain(from[i],to) === false)
        return from[i];
    }
  }

  function findNext(city) {
    for(var i = 0; i < cards.length;i++) {
      if(cards[i].from === city)
        return cards[i].to;
    }
  }

  function deleteCity(city,arr) {
    for(var i = 0;i < arr.length;i++) {
      if(arr[i] === city)
        return arr.splice(i,1);
    }
  }

  //sorting array to get correct path
  function findPath() {
    var result = [];
    for(var i =0; i < cards.length;i++) {
      var startPath = getStart(from,to);
      var tempPath = deleteCity(startPath,from);
      result.push(tempPath);
      deleteCity(findNext(startPath),to);
    }
    return result.join().split(",");
  }

  var path = findPath();

  //sort cards with famous method
  for(var i = 0; i < cards.length; i++) {
    for(var j = 0; j < cards.length; j++) {
      if(cards[j].from === path[i]) {
        currentCard = cards[i];
        cards[i] = cards[j];
        cards[j] = currentCard;
      }
    }
  }

  //making array of all correct paths
  var resultPaths = [];
  for(var i= 0; i < cards.length;i++) {
    var str1 = i + 1 + ") " + "From " + cards[i].from + " you are going to " + cards[i].to + ". ";

    var infoTrans = "";
    if("transport" in cards[i])
      infoTrans = "You should take " + cards[i].transport.type;
    if("seat" in cards[i].transport)
      infoTrans = infoTrans + " on seat " + cards[i].transport.seat
    else
      infoTrans = infoTrans + ", but no seat assignment";
    if("gate" in cards[i].transport)
      infoTrans = infoTrans + ", your gate is " + cards[i].transport.gate + ". ";
    var moreInfo = "";
    if("moreInfo" in cards[i])
      moreInfo = cards[i].moreInfo

    var resultPath = str1 + infoTrans + moreInfo + '\n';
    resultPaths.push(resultPath);
  }

  //@resultPath is array of string,each string is the whole way from beginning to the end
  return resultPaths;
}

console.log(sortCards(allCards).join(" "));
