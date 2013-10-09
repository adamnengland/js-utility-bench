Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')
exports.compare = {
  "underscore" : function () {
    var array = Underscore.range(1000)
    Underscore.find(array, function(item) {
      return item == 500;
    })    
  },
  "lodash" : function () {
    var array = Lodash.range(1000)
    Lodash.find(array, function(item) {
      return item == 500;
    })
  },
  "lazy" : function () {
    var array = Lazy.range(1000).toArray()
    out = Lazy(array).find(function(item) {
      return item == 500;
    })
    console.log(out);
  }
};
require("bench").runMain()