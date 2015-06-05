;(function() {
  window.jo = function (selector) {
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    self.html = function() {
      return self.element;
    }

    // arr-if because of reset method remains empty string as first element
    self.get = function() {
      var arr = self.element.className.split(" ");
      if(arr[0] === '')
        arr.shift();
      return arr;
    }

    // true if dom-elem has className
    self.contain = function(className) {
      var currentArr = self.get();
      for(var i = 0; i < currentArr.length; i ++) {
        if(className === currentArr[i])
          return true;
      }
      return false;
    }

    //helper for self.set
    function addArrNames(arr) {
      var currentNames = self.element.className;
      for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string' && !self.contain(arr[i])) {
          self.element.className = currentNames + " " + arr[i];
          currentNames = self.element.className;
        }
      }
      return currentNames;
    }

    //set classes 1)args 2) name 3) array
    self.set = function(className) {
      var currentNames = self.element.className;
      if(arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments);
        addArrNames(args);
      }
      else if(typeof className === 'string' && !self.contain(className)) {
        self.element.className = currentNames + " " + className;
      }
      else if(className.push) {
        addArrNames(className);
      }
      return self;
    }

    //helper for self.remove
    function removeArrNames(arr) {
      var currentArr = self.get();
      var currentNames = self.element.className;
      for(var i = 0; i < arr.length;i++) {
        for(var j = 0; j < currentArr.length; j++) {
          if(arr[i] === currentArr[j] && self.contain(arr[i]))
            currentNames = currentNames.replace(arr[i],'').split(" ").sort().join(" ").trim();
        }
      }
      return currentNames;
    }

    //remove classes 1)args 2) name 3) array
    self.remove = function(className) {
      var currentNames = self.element.className;
      if(arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments);
        currentNames = removeArrNames(args);
      }
      else if(typeof className === 'string' && self.contain(className)) {
        currentNames = currentNames.replace(className,'').split(" ").sort().join(" ").trim();
      }
      else if(className.push) {
        currentNames = removeArrNames(className);
      }
      self.element.className = currentNames;
      return self;
    }

    //another algorythm, maybe i should change set and remove?
    self.toggle = function(className) {
      var names;
      if(!className.push)
        names = Array.prototype.slice.call(arguments);
      else
        names = className;

      for(var i = 0; i < names.length; i++) {
        if(typeof names[i] === "string" && self.contain(names[i]))
          self.remove(names[i]);
        else
          self.set(names[i]);
      }
      return self;
    }

    self.reset = function() {
      self.element.className = "";
      return self;
    }

    return self;
  };

})();
