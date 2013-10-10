Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')
var array = Underscore.range(1000)
exports.compare = {
  "underscore" : function () {
    Underscore.find(array, function(item) {
      return item == 500;
    })    
  },
  "lodash" : function () {
    Lodash.find(array, function(item) {
      return item == 500;
    })
  },
  "lazy" : function () {
    Lazy(array).find(function(item) {
      return item == 500;
    })
  }
};
require("bench").runMain()
