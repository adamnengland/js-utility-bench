Underscore = require('underscore')
Lodash = require('lodash')
Lazy = require('lazy.js')
exports.compare = {
  "underscore" : function () {
    var array = Underscore.range(1000)
  },
  "lodash" : function () {
    var array = Lodash.range(1000)
  },
  "lazy" : function () {
    var array = Lazy.range(1000).toArray()
  }
};
require("bench").runMain()