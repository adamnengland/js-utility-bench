Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')

square = function(x) { return x * x; }
inc = function(x) { return x + 1; }
isEven = function(x) { return x % 2 === 0; }

exports.compare = {
  "underscore" : function () {
    var array = Underscore.range(1000)
    Underscore.chain(array).map(square).map(inc).filter(isEven).take(5).value()
  },
  "lodash" : function () {
    var array = Lodash.range(1000)
    Lodash.chain(array).map(square).map(inc).filter(isEven).take(5).value()
  },
  "lazy" : function () {
    var array = Lazy.range(1000).toArray()
    Lazy(array).map(square).map(inc).filter(isEven).take(5)
  }
};
require("bench").runMain()