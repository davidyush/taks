window.yep = ( function() {
  var dom = {
    byClass: function(className) {
      return document.getElementsByClassName(className);
    },
    byId: function(id) {
      return document.getElementById(id);
    },
    byTag: function(tag) {
      return document.getElementsByTagName(tag);
    }
  }
  return [dom];
})();

//////////////wish//////////////
//
// var sel1 = yep.byClass(name)//dom arr
// var sel2 = yep.byId(name)// dom el
// var sel3 = yep.byTag(name)//dom arr
//
// sel1.add(array_of_classes)//if sel has the same not to add again and if just string add also
// sel2.remove(array_of_classes)
// sel1.exist(className)//true or false
// sel1.clear() //remove all classes


(function(window) {
  'use strict'
  var Yep = {};
  function defineYep() {
    Yep.alert = function() {
      alert("loaded");
    };
    return Yep;
  }

  if(typeof Yep === 'underfined') {
    window.Yep = defineYep();
  }

})(window);
