Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')

square = function(x) { return x * x; }
inc = function(x) { return x + 1; }
isEven = function(x) { return x % 2 === 0; }
var array = Underscore.range(1000)

exports.compare = {
  "underscore" : function () {
    Underscore.chain(array).map(square).map(inc).filter(isEven).take(5).value()
  },
  "lodash" : function () {
    Lodash.chain(array).map(square).map(inc).filter(isEven).take(5).value()
  },
  "lazy" : function () {
    Lazy(array).map(square).map(inc).filter(isEven).take(5)
  }
};
require("bench").runMain()